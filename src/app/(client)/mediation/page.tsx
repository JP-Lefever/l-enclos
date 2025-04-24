import MediationPrimaire from "@/components/ui/mediationPrimaire/MediationPrimaire";
import styles from "./page.module.css";
import MediationCollege from "@/components/ui/mediationCollege/MediationCollege";
import MediationEphad from "@/components/ui/mediationEphad/MediationEphad";

export default function MediationPage() {
	return (
		<>
			<section className={styles.section}>
				<h1 className={styles.h1}>Mediations</h1>
			</section>
			<section className={styles.sectionPrim}>
				<MediationPrimaire />
			</section>
			<section className={styles.sectionColl}>
				<MediationCollege />
			</section>
			<section className={styles.sectionEph}>
				<MediationEphad />
			</section>
		</>
	);
}
