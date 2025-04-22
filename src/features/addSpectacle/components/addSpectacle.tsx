"use client";

import styles from "./addSpectacle.module.css";
import type { creationProps, partnairProps } from "@/lib/definitions";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { addSpectacle } from "../action";
import { array } from "zod";
import { toast } from "react-toastify";

export default function AddSpectacle({
	partnair,
}: { partnair: partnairProps[] }) {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<creationProps>();

	const [select, setSelect] = useState(1);

	const addSelect = () => {
		setSelect((prev) => prev + 1);
	};

	const onSubmit = async (data: creationProps) => {
		const { posterPhoto, mainPhoto, ...rest } = data;

		const formData = new FormData();
		formData.append("posterPhoto", posterPhoto[0]);
		formData.append("mainPhoto", mainPhoto[0]);

		const uploadPhoto = await fetch("/api/upload", {
			method: "POST",
			body: formData,
		});
		const responseUpload = await uploadPhoto.json();

		const responseDb = await addSpectacle(rest, responseUpload);

		if (responseDb?.success) {
			toast.success(responseDb.message);
			reset();
		}
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
					<p className={styles.error}>{errors.title?.message}</p>

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
					<p className={styles.error}>{errors.age?.message}</p>
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
					<p className={styles.error}>{errors.duration?.message}</p>
					<div className={styles.div}>
						<label htmlFor="resume">Résumé du spectacle : </label>

						<textarea
							className={styles.textarea}
							rows={10}
							{...register("resume", {
								required: "champ requis",
								pattern: {
									value: /^[^<>]*$/,
									message: "Caractères <> interdits",
								},
							})}
						/>
						<p className={styles.error}>{errors.resume?.message}</p>
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
					<p className={styles.error}>{errors.author?.message}</p>
					<label htmlFor="directedBy">Mis en scène : </label>
					<textarea
						{...register("directedBy", {
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
					<p className={styles.error}>{errors.directedBy?.message}</p>
					<label htmlFor="interpretation">Interpretation : </label>
					<textarea
						{...register("interpretation", {
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
					<p className={styles.error}>{errors.interpretation?.message}</p>
					<label htmlFor="sceno">Scenographie : </label>
					<textarea
						{...register("sceno", {
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
					<p className={styles.error}>{errors.sceno?.message}</p>
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
					<p className={styles.error}>{errors.music?.message}</p>
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
					<p className={styles.error}>{errors.video?.message}</p>
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
					<p className={styles.error}>{errors.light?.message}</p>
					<label htmlFor="illustration">Illustration : </label>
					<textarea
						{...register("illustration", {
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
					<p className={styles.error}>{errors.illustration?.message}</p>
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
					<p className={styles.error}>{errors.poster?.message}</p>
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
					<p className={styles.error}>{errors.assistant?.message}</p>
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
					<p className={styles.error}>{errors.jauge?.message}</p>
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
					<p className={styles.error}>{errors.plateau?.message}</p>
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
					<p className={styles.error}>{errors.regie?.message}</p>
				</fieldset>
				<fieldset className={styles.fieldset}>
					<legend className={styles.legend}>Partenaires</legend>
					{[...Array(select)].map((_, index) => (
						<select
							className={styles.select}
							key={(partnair.length++).toString()}
							{...register(`partnair${index}`)}
						>
							<option value="">Choisissez un partenaire</option>
							{partnair.map((p) => (
								<option key={p.name} value={p.id}>
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
