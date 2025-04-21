"use server";

import type { photoHomePage } from "@/lib/definitions";
import utils from "./utils";

export async function uploadPhoto(photo: photoHomePage) {
	try {
		const addPhoto = await utils.createPhotoAccueil(photo);
	} catch (e) {
		console.log(e);
	}
}
