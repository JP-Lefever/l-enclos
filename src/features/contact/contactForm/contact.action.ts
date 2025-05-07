"use server";

import type { ContactProps } from "@/types/definitions";
import Contact from "./Contact.repository";
import {contactSchema} from "@/lib/utils/validationSchema";


export async function addMessage(data: Omit<ContactProps, "id" | "date" | "is_treated">) {
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
