import MediationPrimaire from "@/features/mediation/mediationPrimaire/MediationPrimaire";
import styles from "./page.module.css";
import MediationCollege from "@/features/mediation/mediationCollege/MediationCollege";
import MediationEphad from "@/features/mediation/mediationEphad/MediationEphad";
import {ButtonMediation}  from "@/components/ui/buttons/Buttons"
import {Metadata} from "next";

export const metadata : Metadata = {
	title : "Compagnie L'Enclos | Médiations culturelles",
	description : "Action culturelle proposé pour les publics primaire, collège et EPHAD",
	icons : "/images/logo.png",
}


export default function MediationPage() {
	return (
		<>
			<section className={styles.section}>
				<h1 className={styles.h1}>Mediations</h1>
			</section>
			<ButtonMediation />

				<section id="primaire" >
					<MediationPrimaire />
				</section>


				<section id="college" >
					<MediationCollege />
				</section>


				<section id="ephad">
					<MediationEphad />
				</section>

		</>
	);
}
