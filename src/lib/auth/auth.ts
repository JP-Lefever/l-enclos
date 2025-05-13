import Credentials from "next-auth/providers/credentials";
import { authConfig } from "./auth.config";
import { loginSchema } from "../utils/validationSchema";
import { getUserByEmail } from "@/features/auth/auth.action";
import { verifyPassword } from "../utils/argon";
import NextAuth from "next-auth";

export const authOptions = {
	...authConfig,
	providers: [
		Credentials({
			credentials: {
				email: { label: "email", type: "text" },
				password: { label: "mot de passe", type: "password" },
			},
			async authorize(credentials) {
				//Validation schema with zod
				const validateInfo = loginSchema.safeParse(credentials);
				if (!validateInfo.success) {
					throw new Error("Informations incorrectes");
				}

				const { email, password } = validateInfo.data;

				//check user email
				const user = await getUserByEmail(email);
				if (!user.success) throw new Error(user.error);

				//check user password
				const validPassword = await verifyPassword(password, user.data.password);
				if (!validPassword) throw new Error("Email ou mot de pass invalide");

				return {
					id: user.data.id,
					firstname: user.data.firstname,
					lastname: user.data.lastname,
					email: user.data.email,
					role_id: user.data.role_id,
				};
			},
		}),
	],
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
