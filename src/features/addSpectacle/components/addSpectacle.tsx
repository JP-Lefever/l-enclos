"use client";
import styles from "./addSpectacle.module.css";
import type { partnairProps } from "@/lib/definitions";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function AddSpectacle({
	partnair,
}: { partnair: partnairProps[] }) {
	const { register } = useForm();
	console.log(partnair);

	const [select, setSelect] = useState(1);

	const addSelect = () => {
		setSelect((prev) => prev + 1);
	};

	return (
		<>
			<form>
				<fieldset className={styles.fieldset}>
					<legend className={styles.legend}> Informations générales</legend>
					<label htmlFor="title">Titre du spectacle :</label>
					<textarea {...register("title")} />
					<label htmlFor="age">Age :</label>
					<textarea {...register("age")} />
					<label htmlFor="duration">Durée : </label>
					<textarea {...register("duration")} />
					<div className={styles.div}>
						<label htmlFor="resumé">Résumé du spectacle : </label>
						<textarea rows={10} cols={180} {...register("resumé")} />
					</div>
				</fieldset>
				<fieldset className={styles.fieldset}>
					<legend className={styles.legend}>Distribution</legend>
					<label htmlFor="author">Ecriture : </label>
					<textarea {...register("author")} />
					<label htmlFor="Interpretation">Interpretation : </label>
					<textarea {...register("Interpretation")} />
					<label htmlFor="music">Musiques : </label>
					<textarea {...register("music")} />
					<label htmlFor="illustration">Illustration : </label>
					<textarea {...register("illustration")} />
					<label htmlFor="assistant">Oeil exterieur : </label>
					<textarea {...register("assistant")} />
				</fieldset>
				<fieldset className={styles.fieldset}>
					<legend className={styles.legend}>Technique</legend>
					<label htmlFor="jauge">Jauge : </label>
					<textarea {...register("jauge")} />
					<label htmlFor="Plateau">Plateau : </label>
					<textarea {...register("Plateau")} />
					<label htmlFor="Régie">Régie : </label>
					<textarea {...register("Régie")} />
				</fieldset>
				<fieldset className={styles.fieldset}>
					<legend className={styles.legend}>Partenaires</legend>
					{[...Array(select)].map((select, index) => (
						<select key={select} {...register(`partnair${index + 1}`)}>
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
