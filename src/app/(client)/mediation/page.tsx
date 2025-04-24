import MediationPrimaire from "@/components/ui/mediationPrimaire/MediationPrimaire";
import styles from "./page.module.css";
import MediationCollege from "@/components/ui/mediationCollege/MediationCollege";
import MediationEphad from "@/components/ui/mediationEphad/MediationEphad";
import ButtonMediation from "@/components/ui/buttonMediation/ButtonMediation";

export default function MediationPage() {
	return (
		<>
			<section className={styles.section}>
				<h1 className={styles.h1}>Mediations</h1>
			</section>
			<ButtonMediation />
			<section id="primaire" className={styles.sectionPrim}>
				<MediationPrimaire />
			</section>
			<section id="college" className={styles.sectionColl}>
				<MediationCollege />
			</section>
			<section id="ephad" className={styles.sectionEph}>
				<MediationEphad />
			</section>
		</>
	);
}
