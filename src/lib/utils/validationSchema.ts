import z from "zod";
import errorMessage from "../../assets/data/errorMessage.json";

export const loginSchema = z.object({
	email: z.string().regex(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/, {
		message: errorMessage.email,
	}),
	password: z
		.string()
		.regex(
			/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+[\]{};':"\\|,.<>/?-]).{8,}$/,
			{ message: errorMessage.password },
		),
});

export const dateSchema = z.object({
	place : z.string().regex(/^[^<>]*$/, {message: "Les caractères <> ne sont pas autorisés"}).nonempty( {message: "Champ requis"}),
	public : z.string().regex(/^[^<>]*$/, {message: "Les caractères <> ne sont pas autorisés"}).nonempty( {message: "Champ requis"}),
	date : z.coerce.date({required_error: "La date est obligatoiree"}),
	city : z.string().regex(/^[^<>]*$/, {message: "Les caractères <> ne sont pas autorisés"}).nonempty( {message: "Champ requis"}),
	hour : z.string().regex(/^[^<>]*$/, {message: "Les caractères <> ne sont pas autorisés"}).nonempty( {message: "Champ requis"}),
	isPassed : z.coerce.number({required_error: "Le champ est obligatoiree"}),
	spectacleId : z.coerce.number().optional()
})

export const interventionSchema = z.object({

	year: z.string().regex(/^[^<>]*$/,{message : "Les caractères <> sont interdits"}).nonempty({message : "Champs requis"}),
	label : z.string().regex(/^[^<>]*$/,{message : "Les caractères <> sont interdits"}).nonempty({message : "Champs requis"}),
	isPassed : z.coerce.number({required_error:"Champs requis"}),
	mediationId: z.coerce.number({required_error:"Champs requis"}),
})

export const contactSchema = z.object({
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

export const modifyDateSchema = z.object({
	id: z.string().uuid(),
	place : z.string().regex(/^[^<>]*$/, {message: "Les caractères <> ne sont pas autorisés"}).nonempty( {message: "Champ requis"}),
	public : z.string().regex(/^[^<>]*$/, {message: "Les caractères <> ne sont pas autorisés"}).nonempty( {message: "Champ requis"}),
	date : z.string(),
	city : z.string().regex(/^[^<>]*$/, {message: "Les caractères <> ne sont pas autorisés"}).nonempty( {message: "Champ requis"}),
	hour : z.string().regex(/^[^<>]*$/, {message: "Les caractères <> ne sont pas autorisés"}).nonempty( {message: "Champ requis"}),
	is_passed : z.coerce.number({required_error: "Le champ est obligatoiree"}),
	spectacle_id : z.coerce.number().optional()
})