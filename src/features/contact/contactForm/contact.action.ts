"use server";

import type { ContactProps, ResultProps } from "@/lib/definitions";
import Contact from "./Contact.repository";
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
	organism: z.string().optional(),
	email: z.string().email({ message: "Adresse e-mail invalide" }),
	subject: z.string().nonempty({ message: "Le sujet est obligatoire" }),
	message: z
		.string()
		.min(2, { message: "Le message doit contenir au moins 2 caractères" })
		.refine((val) => /\S/.test(val), {
			message: "Le message ne peut pas contenir que des espaces",
		}),
});

export async function addMessage(data: ContactProps) {
	const parsedData = contactSchema.safeParse(data);

	if (!parsedData.success) {
		return { success: false, error: parsedData.error.flatten().fieldErrors };
	}
	try {
		const result = await Contact.createMessage(parsedData.data);
		if (parsedData.success) {
			return { success: true, message: result.message };
		}
	} catch (error) {
		return { success: false, error };
	}
}
