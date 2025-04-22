import styles from "./page.module.css";
import PresCompagnie from "@/components/ui/presCompagnie/PresCompagnie";
import PresMediation from "@/components/ui/presMediation/PresMediation";
import PresSpectacles from "@/components/ui/presSpectacles/PresSpectacles";
import AutoPlay from "@/components/ui/slider/Autoplay";

export default function Home() {
	return (
		<>
			<section>
				<AutoPlay />
			</section>
			<section className={styles.sectionPres}>
				<PresCompagnie />
			</section>
			<section className={styles.sectionSpec}>
				<PresSpectacles />
			</section>
			<section className={styles.sectionMed}>
				<PresMediation />
			</section>
		</>
	);
}
