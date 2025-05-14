"use server";

import Users from "./Auth.repository";
import {UsersProps} from "@/types/definitions";
import type {Result} from "@/types/definitions";

export async function getUserByEmail(email: string) : Promise<Result<UsersProps>> {
	const user = await Users.readUserByEmail(email);
	if (!user.success) {
		return {success: false, error : user.error}
	}

	return {success: true, data : user.data}
}
