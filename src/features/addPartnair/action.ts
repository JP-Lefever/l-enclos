"use server";

import type { partnairProps } from "@/lib/definitions";
import z from "zod";
import utils from "./utils";

const partnairSchema = z.object({
	partnair: z
		.string()
		.trim()
		.regex(/^[^<>]*$/)
		.min(1, { message: "champ requis" }),
});

export async function addPartnair(data: partnairProps) {
	try {
		const parsedData = partnairSchema.safeParse(data);

		if (parsedData.success) {
			const { partnair } = parsedData.data;
			const insertData = await utils.createPartnair(partnair);
			return { success: true, message: insertData?.message };
		}
	} catch (e) {
		return { message: "une erreur est survenue" };
	}
}
