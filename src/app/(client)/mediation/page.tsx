import MediationPrimaire from "@/components/ui/mediationPrimaire/MediationPrimaire";
import styles from "./page.module.css";

export default function MediationPage() {
	return (
		<>
			<section className={styles.section}>
				<h1 className={styles.h1}>Mediations</h1>
			</section>
			<section>
				<MediationPrimaire />
			</section>
		</>
	);
}
