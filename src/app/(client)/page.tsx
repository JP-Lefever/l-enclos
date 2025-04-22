import styles from "./page.module.css";
import PresCompagnie from "@/components/ui/presCompagnie/PresCompagnie";
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
		</>
	);
}
