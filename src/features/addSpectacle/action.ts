"use server";

import type { creationProps } from "@/lib/definitions";
import { z } from "zod";
import utils from "./utils";

const noHtmlRegex = /^[^<>]*$/;

export const spectacleSchema = z.object({
	title: z
		.string()
		.nonempty("champ requis")
		.max(255, "Maximum 255 caractères")
		.regex(noHtmlRegex, "Caractères <> interdits"),

	age: z.string().nonempty("champ requis").max(255).regex(noHtmlRegex),

	duration: z.string().nonempty("champ requis").max(255).regex(noHtmlRegex),

	resumé: z.string().nonempty("champ requis").regex(noHtmlRegex),

	author: z.string().nonempty("champ requis").max(255).regex(noHtmlRegex),

	Interpretation: z
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

	illustration: z.string().nonempty("champ requis").max(255).regex(noHtmlRegex),

	poster: z.string().max(255).regex(noHtmlRegex),

	assistant: z
		.string()
		.max(255)
		.regex(noHtmlRegex, { message: "Caractères <> interdits" }),

	jauge: z.string().nonempty("champ requis").max(255).regex(noHtmlRegex),

	plateau: z.string().nonempty("champ requis").max(255).regex(noHtmlRegex),

	regie: z.string().nonempty("champ requis").max(255).regex(noHtmlRegex),

	partnair1: z.string(),
	partnair2: z.string(),
	partnair3: z.string(),
	partnair4: z.string(),
	partnair5: z.string(),
	partnair6: z.string(),
	partnair7: z.string(),
	partnair8: z.string(),
	partnair9: z.string(),
	partnair10: z.string(),
	partnair11: z.string(),
	partnair12: z.string(),
});

export async function addSpectacle(
	data: Omit<creationProps, "mainPhoto" | "posterPhoto">,
	photo: Pick<creationProps, "mainPhoto" | "posterPhoto">,
) {
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

		const insertSpectacle = await utils.createSpectacle(rest, photo);
	}
}
