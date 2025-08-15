
import styles from "./presSpectacles.module.css";
import Image from "next/image";
import {generalesInformations} from "@/assets/data/placeholder-data-homePage";
import {
	ScrollAnimation,
	ScrollAnimation2,
} from "@/components/ui/animation/ScrollAnimation";
import TransitionLink from "@/components/ui/transitionLink/TransitionLink";

export default function PresSpectacles() {
	return (
		<>
			<section className={styles.section}>

					<ScrollAnimation>
						<Image
							className={styles.image}
							src={generalesInformations[1].image}
							alt={"La compagnie l'Enclos"}
							width={1080}
							height={860}
						/>
					</ScrollAnimation>

					<ScrollAnimation2 className={styles.article}>
						<h1 className={styles.h1}>{generalesInformations[1].title}</h1>
						<p className={styles.paragraph}>
							{generalesInformations[1].paragraph}
						</p>

						<TransitionLink className={styles.link} href="/spectacles">
							{generalesInformations[1].button}
						</TransitionLink>
					</ScrollAnimation2>

			</section>
		</>
	);
}
