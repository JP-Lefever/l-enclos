"use client";

import styles from "./contactForm.module.css";
import { SubmitHandler, useForm } from "react-hook-form";
import { subjectOptions } from "@/lib/placeholder-data-contact";
import errorMessage from "../../../lib/errorMessage.json";
import type { ContactProps } from "@/lib/definitions";
import { addMessage } from "./contact.action";
import { toast } from "react-toastify";

export default function AdminContact() {
	const { register, handleSubmit, reset } = useForm<ContactProps>();
	const onSubmit = async (data: ContactProps) => {
		const response = await addMessage(data);

		if (response?.success) {
			toast.success(response.message);
			reset();
		} else {
			toast.error("Un erreur est survenue, veuillez rééssayer ulterieurement");
		}
	};
	return (
		<>
			<section className={styles.sectionForm}>
				<h2 className={styles.h2}>Formulaire de contact</h2>
				<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
					<fieldset className={styles.fieldset}>
						<label className={styles.label} htmlFor="lastname">
							Nom
						</label>
						<input
							className={styles.input}
							type="text"
							{...register("lastname", {
								required: errorMessage.require,
								min: {
									value: 2,
									message: errorMessage.minLenght,
								},
								pattern: {
									value: /^[A-Za-zÀ-ÖØ-öø-ÿ]+(?:[ '-][A-Za-zÀ-ÖØ-öø-ÿ]+)*$/,
									message: errorMessage.regex,
								},
							})}
						/>
						<label className={styles.label} htmlFor="firstname">
							Prénom
						</label>
						<input
							className={styles.input}
							type="text"
							{...register("firstname", {
								required: errorMessage.require,
								min: {
									value: 2,
									message: errorMessage.minLenght,
								},
								pattern: {
									value: /^[A-Za-zÀ-ÖØ-öø-ÿ]+(?:[ '-][A-Za-zÀ-ÖØ-öø-ÿ]+)*$/,
									message: errorMessage.regex,
								},
							})}
						/>
						<label className={styles.label} htmlFor="organism">
							Organisme (optionnel)
						</label>
						<input
							className={styles.input}
							type="text"
							{...register("organism")}
						/>
						<label className={styles.label} htmlFor="email">
							Email
						</label>
						<input
							className={styles.input}
							type="email"
							{...register("email", {
								required: errorMessage.require,
								min: {
									value: 2,
									message: errorMessage.minLenght,
								},
								pattern: {
									value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
									message: errorMessage.regex,
								},
							})}
						/>
					</fieldset>
					<fieldset className={styles.fieldset}>
						<label className={styles.label} htmlFor="subject">
							Sujet du message
						</label>
						<select
							className={styles.input}
							{...register("subject", { required: errorMessage.require })}
						>
							<option value="" disabled>
								Veuillez selectionner un sujet
							</option>
							{subjectOptions.map((s) => (
								<option key={s.id} value={s.subject}>
									{s.subject}
								</option>
							))}
						</select>
					</fieldset>
					<fieldset className={styles.fieldset}>
						<label className={styles.label} htmlFor="message">
							Message
						</label>
						<textarea
							className={styles.textarea}
							rows={10}
							{...register("message", {
								required: errorMessage.require,
								min: {
									value: 2,
									message: errorMessage.minLenght,
								},
							})}
						/>
					</fieldset>
					<button type="submit">Envoyer</button>
				</form>
			</section>
		</>
	);
}
