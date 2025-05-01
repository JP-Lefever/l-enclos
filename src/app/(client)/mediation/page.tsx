import MediationPrimaire from "@/features/mediation/mediationPrimaire/MediationPrimaire";
import styles from "./page.module.css";
import MediationCollege from "@/features/mediation/mediationCollege/MediationCollege";
import MediationEphad from "@/features/mediation/mediationEphad/MediationEphad";
import ButtonMediation from "@/components/ui/buttonMediation/ButtonMediation";
import {
	ScrollAnimation2,
	ScrollAnimation,
} from "@/components/ui/animation/ScrollAnimation";

export default function MediationPage() {
	return (
		<>
			<section className={styles.section}>
				<h1 className={styles.h1}>Mediations</h1>
			</section>
			<ButtonMediation />
			<ScrollAnimation>
				<section id="primaire" className={styles.sectionPrim}>
					<MediationPrimaire />
				</section>
			</ScrollAnimation>
			<ScrollAnimation2>
				<section id="college" className={styles.sectionColl}>
					<MediationCollege />
				</section>
			</ScrollAnimation2>
			<ScrollAnimation>
				<section id="ephad" className={styles.sectionEph}>
					<MediationEphad />
				</section>
			</ScrollAnimation>
		</>
	);
}
