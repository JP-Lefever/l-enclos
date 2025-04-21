import { useForm } from "react-hook-form";

export default function addSpectacle() {
	const { register } = useForm();

	return (
		<>
			<form>
				<fieldset>
					<legend> Informations générales</legend>
					<label htmlFor="title">Titre du spectacle :</label>
					<input type="text" {...register("title")} />
					<label htmlFor="age">Age :</label>
					<input type="text" {...register("age")} />
					<label htmlFor="resumé">Résumé du spectacle : </label>
					<input type="textarea" {...register("resumé")} />
					<label htmlFor="duration">Durée : </label>
					<input type="text" {...register("duration")} />
				</fieldset>
				<fieldset>
					<legend>Distribution</legend>
					<label htmlFor="author">Ecriture : </label>
					<input type="text" {...register("author")} />
					<label htmlFor="Interpretation">Interpretation : </label>
					<input type="text" {...register("Interpretation")} />
					<label htmlFor="music">Musiques : </label>
					<input type="text" {...register("music")} />
					<label htmlFor="illustration">Illustration : </label>
					<input type="text" {...register("illustration")} />
					<label htmlFor="assistant">Oeil exterieur : </label>
					<input type="text" {...register("assistant")} />
				</fieldset>
				<fieldset>
					<legend>Technique</legend>
					<label htmlFor="jauge">Jauge : </label>
					<input type="text" {...register("jauge")} />
					<label htmlFor="Plateau">Plateau : </label>
					<input type="text" {...register("Plateau")} />
					<label htmlFor="Régie">Régie : </label>
					<input type="text" {...register("Régie")} />
				</fieldset>
				<fieldset>
					<legend>Partenaires</legend>
				</fieldset>
				<fieldset>
					<legend>Photos</legend>
				</fieldset>
			</form>
		</>
	);
}
