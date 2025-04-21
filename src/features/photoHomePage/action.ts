"use server";

import type { photoHomePage } from "@/lib/definitions";
import utils from "./utils";

export async function addPhoto(photo: photoHomePage) {
	try {
		const insertPhoto = await utils.createPhotoAccueil(photo);

		return { success: true, message: insertPhoto?.message };
	} catch (e) {
		console.log(e);
	}
}
