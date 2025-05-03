"use client";

import { useForm } from "react-hook-form";
import styles from "./loginForm.module.css";

export default function LoginForm() {
	const { register } = useForm();

	return (
		<>
			<section className={styles.sectionLog}>
				<form className={styles.form}>
					<fieldset className={styles.fieldset}>
						<div className={styles.div}>
							<h2 className={styles.h2}>Connexion</h2>
							<label className={styles.label} htmlFor="email">
								<input
									className={styles.input}
									type="email"
									placeholder="Email"
									{...register("email")}
								/>
							</label>
							<label className={styles.label} htmlFor="password">
								<input
									className={styles.input}
									type="password"
									placeholder="Mot de passe"
									{...register("password")}
								/>
							</label>
							<button className={styles.button} type="submit">
								Se connecter
							</button>
						</div>
					</fieldset>
				</form>
			</section>
		</>
	);
}
