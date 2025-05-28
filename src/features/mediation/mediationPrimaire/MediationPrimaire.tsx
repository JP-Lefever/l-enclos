
import styles from "./mediationPrimaire.module.css";
import Image from "next/image";
import {ScrollAnimation, ScrollAnimation2} from "@/components/ui/animation/ScrollAnimation";
import {mediation} from "@/assets/data/placeholder-data-mediation";
import Markdown from "react-markdown";
import TransitionLink from "@/components/ui/transitionLink/TransitionLink";

export default function MediationPrimaire() {
	const id = 1;
	return (
		<>
			<section className={styles.section}>
				<ScrollAnimation className={styles.imageWrapper}>
					<Image
						className={styles.image}
						src={mediation[0].photoDate}
						alt={mediation[0].name}
						fill={true}
					/>
				</ScrollAnimation>

				<ScrollAnimation2>
					<h1 className={styles.h1}>{mediation[0].name}</h1>
					<article className={styles.paragraph}>
						<Markdown>{mediation[0].pres}</Markdown>
						<TransitionLink className={styles.link} href={`/mediation/${id}`}>
							En savoir plus
						</TransitionLink>
					</article>
				</ScrollAnimation2>
			</section>
		</>
	);
}
