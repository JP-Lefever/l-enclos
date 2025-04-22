"use server";

import type { creationProps } from "@/lib/definitions";
import { z } from "zod";
import utils from "./utils";

const noHtmlRegex = /^[^<>]*$/;

const spectacleSchema = z.object({
	title: z
		.string()
		.nonempty("champ requis")
		.max(255, "Maximum 255 caractères")
		.regex(noHtmlRegex, "Caractères <> interdits"),

	age: z.string().nonempty("champ requis").max(255).regex(noHtmlRegex),

	duration: z.string().nonempty("champ requis").max(255).regex(noHtmlRegex),

	resume: z.string().nonempty("champ requis").regex(noHtmlRegex),

	author: z.string().nonempty("champ requis").max(255).regex(noHtmlRegex),

	interpretation: z
		.string()
		.nonempty("champ requis")
		.max(255)
		.regex(noHtmlRegex),

	music: z.string().nonempty("champ requis").max(255).regex(noHtmlRegex),

	video: z
		.string()
		.max(255)
		.regex(noHtmlRegex, { message: "Caractères <> interdits" }),

	light: z
		.string()
		.max(255)
		.regex(noHtmlRegex, { message: "Caractères <> interdits" }),

	sceno: z
		.string()
		.max(255)
		.regex(noHtmlRegex, { message: "Caractères <> interdits" }),
	directedBy: z
		.string()
		.max(255)
		.regex(noHtmlRegex, { message: "Caractères <> interdits" }),

	illustration: z.string().max(255).regex(noHtmlRegex),

	poster: z.string().max(255).regex(noHtmlRegex),

	assistant: z
		.string()
		.max(255)
		.regex(noHtmlRegex, { message: "Caractères <> interdits" }),

	jauge: z.string().nonempty("champ requis").max(255).regex(noHtmlRegex),

	plateau: z.string().nonempty("champ requis").max(255).regex(noHtmlRegex),

	regie: z.string().nonempty("champ requis").max(255).regex(noHtmlRegex),

	partnair1: z.string().optional(),
	partnair2: z.string().optional(),
	partnair3: z.string().optional(),
	partnair4: z.string().optional(),
	partnair5: z.string().optional(),
	partnair6: z.string().optional(),
	partnair7: z.string().optional(),
	partnair8: z.string().optional(),
	partnair9: z.string().optional(),
	partnair10: z.string().optional(),
	partnair11: z.string().optional(),
	partnair12: z.string().optional(),
});

export async function addSpectacle(
	data: Omit<creationProps, "mainPhoto" | "posterPhoto">,
	photo: Pick<creationProps, "mainPhoto" | "posterPhoto">,
) {
	try {
		const parsedData = spectacleSchema.safeParse(data);

		if (parsedData.success) {
			const {
				partnair1,
				partnair2,
				partnair3,
				partnair4,
				partnair5,
				partnair6,
				partnair7,
				partnair8,
				partnair9,
				partnair10,
				partnair11,
				partnair12,
				...rest
			} = parsedData.data;

			const partnair = [
				partnair1,
				partnair2,
				partnair3,
				partnair4,
				partnair5,
				partnair6,
				partnair7,
				partnair8,
				partnair9,
				partnair10,
				partnair11,
				partnair12,
			];

			const validPartnair = partnair.filter((p) => p !== undefined);

			const spectacleId = await utils.createSpectacle(rest, photo);

			const idCreationPartnair = await utils.createPartnerCreation(
				spectacleId,
				validPartnair,
			);
			if (spectacleId && idCreationPartnair) {
				return { success: true, message: "Le spectacle a bien été ajouté" };
			}
		}
	} catch (e) {
		return { message: e };
	}
}
