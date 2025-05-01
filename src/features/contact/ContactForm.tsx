"use client";

import { useForm } from "react-hook-form";
import { subjectOptions } from "@/lib/placeholder-data-contact";

export default function AdminContact() {
	const { register } = useForm();
	return (
		<>
			<form>
				<fieldset>
					<label htmlFor="lastname">Nom</label>
					<input type="text" {...register("lastname")} />
					<label htmlFor="firstname">Prénom</label>
					<input type="text" {...register("firstname")} />
					<label htmlFor="email">Email</label>
					<input type="email" {...register("email")} />
				</fieldset>
				<fieldset>
					<label htmlFor="subject">Sujet du message</label>
					<select {...register("subject")}>
						{subjectOptions.map((s) => (
							<option key={s.id} value={s.id}>
								{s.subject}
							</option>
						))}
					</select>
				</fieldset>
				<fieldset>
					<label htmlFor="message">Message</label>
					<textarea {...register("message")} />
				</fieldset>
			</form>
		</>
	);
}
