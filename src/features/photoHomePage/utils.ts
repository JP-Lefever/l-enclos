import type { photoHomePage } from "@/lib/definitions";
import postgres from "postgres";

const sql = postgres(process.env.POSTGRES_URL as string, { ssl: "require" });

class utilsPhotoHomePage {
	async createPhotoAccueil(photo: photoHomePage) {
		const {
			photoCarousel1,
			photoCarousel2,
			photoCarousel3,
			photoCarousel4,
			photoCompagnie,
			photoMediation,
			photoSpectacle,
		} = photo;

		try {
			const photos = [
				[photoCarousel1, "photo_carousel_accueil"],
				[photoCarousel2, "photo_carousel_accueil"],
				[photoCarousel3, "photo_carousel_accueil"],
				[photoCarousel4, "photo_carousel_accueil"],
				[photoCompagnie, "photo_compagnie_accueil"],
				[photoMediation, "photo_mediation_accueil"],
				[photoSpectacle, "photo_spectacle_accueil"],
			];

			await sql`
                INSERT INTO photo (name, service)
                VALUES ${sql(photos)}
            `;
		} catch (error) {
			console.log(error);
		}
	}
}

export default new utilsPhotoHomePage();
