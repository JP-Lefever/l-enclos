"use client";

import styles from "./contactForm.module.css";
import { useForm } from "react-hook-form";
import { subjectOptions } from "@/assets/data/placeholder-data-contact";
import errorMessage from "../../../assets/data/errorMessage.json";
import type { ContactProps } from "@/types/definitions";
import { addMessage } from "@/features/contact/contact.action";
import { toast } from "react-toastify";

export default function AdminContact() {
	const { register, handleSubmit, formState:{errors}, reset } = useForm<ContactProps>();
	const onSubmit = async (data: ContactProps) => {
		const response = await addMessage(data);

		if (response?.success) {
			toast.success("Le message a bien été envoyé");
			reset();
		} else {
			toast.error(response.error);
		}
	};

	return (
		<>
			<div className={styles.divContact}>
				<section className={styles.sectionInfo}>
					<h2 className={styles.h2}>
						<span className={styles.span}>La </span>
						<span className={styles.span}>compagnie </span>
						<span>{"L'Enclos"}</span>
					</h2>
					<article className={styles.articleInfo}>
						<p>
							64 boulevard Silvio Trentin <br /> 31200, Toulouse
						</p>

						<p className={styles.mail}>cie.lenclos@posteo.net</p>
					</article>
				</section>
				<section className={styles.sectionForm}>
					<h2 className={styles.h3}>{"N'hésitez pas à nous écrire"}</h2>
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
							{errors.lastname && (<p className={styles.errors}>{errors.lastname.message}</p>)}
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
							{errors.firstname && (<p className={styles.errors}>{errors.firstname.message}</p>)}
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
							{errors.email && (<p className={styles.errors}>{errors.email.message}</p>)}
						</fieldset>
						<fieldset className={styles.fieldset}>
							<select
								className={styles.option}
								{...register("subject", { required: errorMessage.require })}
							>
								{subjectOptions.map((s) => (
									<option key={s.id} value={s.subject}>
										{s.subject}
									</option>
								))}
							</select>
							{errors.subject && (<p className={styles.errors}>{errors.subject.message} </p>)}
						</fieldset>
						<fieldset className={styles.fieldset}>
							<label className={styles.labelArea} htmlFor="message">
								Message
							</label>
							<textarea
								className={styles.textarea}
								{...register("message", {
									required: errorMessage.require,
									min: {
										value: 2,
										message: errorMessage.minLenght,
									},
								})}
							/>
							{errors.message && (<p className={styles.errors}>{errors.message.message}</p>)}
						</fieldset>
						<button className={styles.button} type="submit">
							Envoyer
						</button>
					</form>
				</section>
			</div>
		</>
	);
}
