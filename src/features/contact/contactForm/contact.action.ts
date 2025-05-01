"use server";

import { z } from "zod";

const contactSchema = z.object({
	lastname: z
		.string()
		.min(2, { message: "Le nom doit contenir au moins 2 caractères" })
		.regex(/^[A-Za-zÀ-ÖØ-öø-ÿ]+(?:[ '-][A-Za-zÀ-ÖØ-öø-ÿ]+)*$/, {
			message: "Nom invalide",
		}),
	firstname: z
		.string()
		.min(2, { message: "Le prénom doit contenir au moins 2 caractères" })
		.regex(/^[A-Za-zÀ-ÖØ-öø-ÿ]+(?:[ '-][A-Za-zÀ-ÖØ-öø-ÿ]+)*$/, {
			message: "Prénom invalide",
		}),
	organism: z
		.string()
		.regex(/^[A-Za-zÀ-ÖØ-öø-ÿ]+(?:[ '-][A-Za-zÀ-ÖØ-öø-ÿ]+)*$/, {
			message: "Nom d’organisme invalide",
		})
		.optional(),
	email: z.string().email({ message: "Adresse e-mail invalide" }),
	subject: z.string().nonempty({ message: "Le sujet est obligatoire" }),
	message: z
		.string()
		.min(2, { message: "Le message doit contenir au moins 2 caractères" })
		.refine((val) => /\S/.test(val), {
			message: "Le message ne peut pas contenir que des espaces",
		}),
});
