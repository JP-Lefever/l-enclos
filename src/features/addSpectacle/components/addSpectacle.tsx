"use client";
import styles from "./addSpectacle.module.css";
import type { creationProps, partnairProps } from "@/lib/definitions";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { addSpectacle } from "../action";

export default function AddSpectacle({
	partnair,
}: { partnair: partnairProps[] }) {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<creationProps>();

	const [select, setSelect] = useState(1);

	const addSelect = () => {
		setSelect((prev) => prev + 1);
	};

	const onSubmit = async (data: creationProps) => {
		console.log(data);
		const { posterPhoto, mainPhoto, ...rest } = data;

		const formData = new FormData();
		formData.append("poster", posterPhoto[0]);
		formData.append("mainPhoto", mainPhoto);

		const uploadPhoto = await fetch("/api/upload", {
			method: "POST",
			body: formData,
		});
		const responseUpload = await uploadPhoto.json();

		// const responseDb = await addSpectacle(rest, responseUpload);
	};

	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)}>
				<fieldset className={styles.fieldset}>
					<legend className={styles.legend}> Informations générales</legend>

					<label htmlFor="title">Titre du spectacle :</label>
					<textarea
						{...register("title", {
							required: "champ requis",
							pattern: {
								value: /^[^<>]*$/,
								message: "Caractères <> interdits",
							},
							maxLength: {
								value: 255,
								message: "Maximum 255 caractères",
							},
						})}
					/>
					<p>{errors.title?.message}</p>

					<label htmlFor="age">Age :</label>
					<textarea
						{...register("age", {
							required: "champ requis",
							pattern: {
								value: /^[^<>]*$/,
								message: "Caractères <> interdits",
							},
							maxLength: {
								value: 255,
								message: "Maximum 255 caractères",
							},
						})}
					/>
					<label htmlFor="duration">Durée : </label>
					<textarea
						{...register("duration", {
							required: "champ requis",
							pattern: {
								value: /^[^<>]*$/,
								message: "Caractères <> interdits",
							},
							maxLength: {
								value: 255,
								message: "Maximum 255 caractères",
							},
						})}
					/>
					<div className={styles.div}>
						<label htmlFor="resumé">Résumé du spectacle : </label>
						<textarea
							className={styles.textarea}
							rows={10}
							{...register("resumé", {
								required: "champ requis",
								pattern: {
									value: /^[^<>]*$/,
									message: "Caractères <> interdits",
								},
							})}
						/>
					</div>
				</fieldset>
				<fieldset className={styles.fieldset}>
					<legend className={styles.legend}>Distribution</legend>
					<label htmlFor="author">Ecriture : </label>
					<textarea
						{...register("author", {
							required: "champ requis",
							pattern: {
								value: /^[^<>]*$/,
								message: "Caractères <> interdits",
							},
							maxLength: {
								value: 255,
								message: "Maximum 255 caractères",
							},
						})}
					/>
					<label htmlFor="Interpretation">Interpretation : </label>
					<textarea
						{...register("Interpretation", {
							required: "champ requis",
							pattern: {
								value: /^[^<>]*$/,
								message: "Caractères <> interdits",
							},
							maxLength: {
								value: 255,
								message: "Maximum 255 caractères",
							},
						})}
					/>
					<label htmlFor="music">Musiques : </label>
					<textarea
						{...register("music", {
							required: "champ requis",
							pattern: {
								value: /^[^<>]*$/,
								message: "Caractères <> interdits",
							},
							maxLength: {
								value: 255,
								message: "Maximum 255 caractères",
							},
						})}
					/>
					<label htmlFor="video">Video : </label>
					<textarea
						{...register("video", {
							pattern: {
								value: /^[^<>]*$/,
								message: "Caractères <> interdits",
							},
							maxLength: {
								value: 255,
								message: "Maximum 255 caractères",
							},
						})}
					/>
					<label htmlFor="light">Lumière : </label>
					<textarea
						{...register("light", {
							pattern: {
								value: /^[^<>]*$/,
								message: "Caractères <> interdits",
							},
							maxLength: {
								value: 255,
								message: "Maximum 255 caractères",
							},
						})}
					/>
					<label htmlFor="illustration">Illustration : </label>
					<textarea
						{...register("illustration", {
							required: "champ requis",
							pattern: {
								value: /^[^<>]*$/,
								message: "Caractères <> interdits",
							},
							maxLength: {
								value: 255,
								message: "Maximum 255 caractères",
							},
						})}
					/>
					<label htmlFor="poster">Affiche et plaquette : </label>
					<textarea
						{...register("poster", {
							pattern: {
								value: /^[^<>]*$/,
								message: "Caractères <> interdits",
							},
							maxLength: {
								value: 255,
								message: "Maximum 255 caractères",
							},
						})}
					/>
					<label htmlFor="assistant">Oeil exterieur : </label>
					<textarea
						{...register("assistant", {
							pattern: {
								value: /^[^<>]*$/,
								message: "Caractères <> interdits",
							},
							maxLength: {
								value: 255,
								message: "Maximum 255 caractères",
							},
						})}
					/>
				</fieldset>
				<fieldset className={styles.fieldset}>
					<legend className={styles.legend}>Technique</legend>
					<label htmlFor="jauge">Jauge : </label>
					<textarea
						{...register("jauge", {
							required: "champ requis",
							pattern: {
								value: /^[^<>]*$/,
								message: "Caractères <> interdits",
							},
							maxLength: {
								value: 255,
								message: "Maximum 255 caractères",
							},
						})}
					/>
					<label htmlFor="plateau">Plateau : </label>
					<textarea
						{...register("plateau", {
							required: "champ requis",
							pattern: {
								value: /^[^<>]*$/,
								message: "Caractères <> interdits",
							},
							maxLength: {
								value: 255,
								message: "Maximum 255 caractères",
							},
						})}
					/>
					<label htmlFor="regie">Régie : </label>
					<textarea
						{...register("regie", {
							required: "champ requis",
							pattern: {
								value: /^[^<>]*$/,
								message: "Caractères <> interdits",
							},
							maxLength: {
								value: 255,
								message: "Maximum 255 caractères",
							},
						})}
					/>
				</fieldset>
				<fieldset className={styles.fieldset}>
					<legend className={styles.legend}>Partenaires</legend>
					{[...Array(select)].map((select, index) => (
						<select
							className={styles.select}
							key={select}
							{...register(`partnair${index}`)}
						>
							<option value="">Choisissez un partenaire</option>
							{partnair.map((p) => (
								<option key={p.name} value={p.name}>
									{p.name}
								</option>
							))}
						</select>
					))}
					<button onClick={addSelect} type="button">
						Ajouter un partenaire
					</button>
				</fieldset>
				<fieldset className={styles.fieldset}>
					<legend className={styles.legend}>Photos</legend>
					<label htmlFor="posterPhoto">Affiche spectacle</label>
					<input type="file" {...register("posterPhoto")} />
					<label htmlFor="mainPhoto">
						Photo principale de la page du spectacle
					</label>
					<input type="file" {...register("mainPhoto")} />
				</fieldset>
				<button className={styles.button} type="submit">
					Ajouter
				</button>
			</form>
		</>
	);
}
