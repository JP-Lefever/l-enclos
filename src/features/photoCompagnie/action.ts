"use server";

import type { photoCompagnieProps } from "@/lib/definitions";
import utils from "./utils";

export const addPhotoCompagnie = async (photo: photoCompagnieProps) => {
	try {
		const inserPhoto = await utils.createPhotoCompagnie(photo);

		return { success: true, message: inserPhoto?.message };
	} catch (e) {
		console.log(e);
	}
};
