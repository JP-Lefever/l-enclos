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
