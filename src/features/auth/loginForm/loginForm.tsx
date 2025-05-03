"use client";

import { useForm } from "react-hook-form";
import styles from "./loginForm.module.css";
import type { UsersProps } from "@/types/definitions";
import { getSession, signIn } from "next-auth/react";
import getRole from "@/lib/utils/slug";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function LoginForm() {
	const { register, handleSubmit } =
		useForm<Pick<UsersProps, "email" | "password">>();
	const router = useRouter();

	const onSubmit = async (data: Pick<UsersProps, "email" | "password">) => {
		const { email, password } = data;
		const response = await signIn("credentials", {
			redirect: false,
			email,
			password,
		});
		console.log(data);
		if (response?.ok) {
			const session = await getSession();
			const role = session && getRole(session.user.role_id);

			if (role === "admin") {
				toast.success(`Bienvenue ${session?.user.firstname}`);
				router.push("/admin");
			} else {
				toast.error("Mot de pass ou identifiant incorrect");
			}
		}
	};

	return (
		<>
			<section className={styles.sectionLog}>
				<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
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
