import type { creationProps } from "@/lib/definitions";
import postgres from "postgres";

const sql = postgres(process.env.POSTGRES_URL as string, { ssl: "require" });

class UtilsSpectacle {
	async createSpectacle(
		data: Omit<creationProps, "mainPhoto" | "posterPhoto">,
		photo: Pick<creationProps, "mainPhoto" | "posterPhoto">,
	) {
		const {
			title,
			age,
			duration,
			resumé,
			author,
			Interpretation,
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
		const newSpectacle = await sql`
    INSERT INTO creation (title, public, duration, author, interpretation, resume, illustration, poster, assistant, jauge, plate, regie, posterphoto, mainphoto)
    VALUES (${title},${age},${duration},${author},${Interpretation},${resumé},${illustration},${poster},${assistant},${jauge},${plateau},${regie},${posterPhoto},${mainPhoto},)
    
    `;
	}
}

export default new UtilsSpectacle();
