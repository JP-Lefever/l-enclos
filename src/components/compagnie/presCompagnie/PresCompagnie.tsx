
import styles from "./presCompagnie.module.css";
import Image from "next/image";
import {generalesInformations} from "@/assets/data/placeholder-data-homePage";
import {
	ScrollAnimation,
	ScrollAnimation2,
} from "@/components/ui/animation/ScrollAnimation";
import TransitionLink from "@/components/ui/transitionLink/TransitionLink";

export default function PresCompagnie() {
	return (
		<>
			<section className={styles.section}>
				<ScrollAnimation>
					<Image
						className={styles.image}
						src={generalesInformations[0].image}
						alt={generalesInformations[0].title}
						width={1080}
						height={860}
					/>
				</ScrollAnimation>

				<ScrollAnimation2>
					<h1 className={styles.h1}>
						{generalesInformations[0].title}
					</h1>
					<p className={styles.paragraph}>
						{generalesInformations[0].paragraph}
					</p>

					<TransitionLink className={styles.link} href="/compagnie">
						{generalesInformations[0].button}
					</TransitionLink>
				</ScrollAnimation2>
			</section>
		</>
	);
}
