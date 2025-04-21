import type { photoCompagnieProps } from "@/lib/definitions";
import postgres from "postgres";

const sql = postgres(process.env.POSTGRES_URL as string, { ssl: "require" });

class UtilsPhotoCompagnie {
	async createPhotoCompagnie(photo: photoCompagnieProps) {
		try {
			await sql`
        INSERT INTO photo (name, service)
        VALUES(${photo.photoCompagnie}, 'photoCompagniePage')
        `;

			return { message: "La photo a bien été ajoutée" };
		} catch (e) {
			console.log(e);
		}
	}
}

export default new UtilsPhotoCompagnie();
