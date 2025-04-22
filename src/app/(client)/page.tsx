import {
	ScrollAnimation,
	ScrollAnimation2,
} from "@/components/ui/animation/ScrollAnimation";
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
			<ScrollAnimation>
				<section className={styles.sectionPres}>
					<PresCompagnie />
				</section>
			</ScrollAnimation>
			<ScrollAnimation2>
				<section className={styles.sectionSpec}>
					<PresSpectacles />
				</section>
			</ScrollAnimation2>
			<ScrollAnimation>
				<section className={styles.sectionMed}>
					<PresMediation />
				</section>
			</ScrollAnimation>
		</>
	);
}
