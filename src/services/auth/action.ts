"use server";
import { em } from "framer-motion/client";
import Users from "./repository";

export async function getUserByEmail(email: string) {
	const user = Users.readUserByEmail(email);
	if (!user) {
		return null;
	}

	return user;
}
