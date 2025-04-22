import type { creationProps } from "@/lib/definitions";
import postgres from "postgres";

const sql = postgres(process.env.POSTGRES_URL as string, { ssl: "require" });

class UtilsSpectacle {
	async createSpectacle(
		data: Omit<creationProps, "mainPhoto" | "posterPhoto">,
		photo: Pick<creationProps, "mainPhoto" | "posterPhoto">,
	) {
		function safeValue(value: string) {
			return value === undefined ? null : value;
		}

		const {
			title,
			age,
			duration,
			resume,
			author,
			interpretation,
			music,
			illustration,
			poster,
			video,
			light,
			assistant,
			jauge,
			plateau,
			regie,
		} = data;
		const { mainPhoto, posterPhoto } = photo;
		try {
			const [newSpectacleId] = await sql`
        INSERT INTO creation (title, public, duration, author, interpretation, resume, illustration, poster, assistant, jauge, plate, regie, posterphoto, mainphoto, music, video, light)
        VALUES (
    ${safeValue(title)}, ${safeValue(age)}, ${safeValue(duration)}, ${safeValue(author)},
    ${safeValue(interpretation)}, ${safeValue(resume)}, ${safeValue(illustration)},
    ${safeValue(poster)}, ${safeValue(assistant)}, ${safeValue(jauge)},
    ${safeValue(plateau)}, ${safeValue(regie)}, ${safeValue(posterPhoto)},
    ${safeValue(mainPhoto)}, ${safeValue(music)}, ${safeValue(video)}, ${safeValue(light)}
  )
        RETURNING id;
         `;
			return newSpectacleId.id;
		} catch (e) {
			console.log(e);
		}
	}

	async createPartnerCreation(spectacleId: string, partnair: string[]) {
		const insertValues = partnair.map((p) => [spectacleId, p]);
		const idPartnair = await sql`
        INSERT INTO creation_partnair (creation_id, partnair_id)
        VALUES ${sql(insertValues)}
        
        `;
	}
}

export default new UtilsSpectacle();
