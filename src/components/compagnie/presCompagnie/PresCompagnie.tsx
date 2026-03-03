
import styles from "./presCompagnie.module.css";
import {generalesInformations} from "@/assets/data/placeholder-data-homePage";
import {
	ScrollAnimation,
	ScrollAnimation2,
} from "@/components/ui/animation/ScrollAnimation";

export default function PresCompagnie() {
	return (
		<>
			<section className={styles.section}>

				<ScrollAnimation2>
					<h1 className={styles.h1}>
						{generalesInformations[0].title}
					</h1>
					<h2 className={styles.h2}>
						{generalesInformations[0].subtitle}
					</h2>
					<p className={styles.paragraph}>
						{generalesInformations[0].paragraph}
					</p>

				</ScrollAnimation2>
			</section>
		</>
	);
}
