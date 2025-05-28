
import styles from "./mediationCollege.module.css";
import Image from "next/image";
import {ScrollAnimation, ScrollAnimation2} from "@/components/ui/animation/ScrollAnimation";
import {mediation} from "@/assets/data/placeholder-data-mediation";
import Markdown from "react-markdown";
import TransitionLink from "@/components/ui/transitionLink/TransitionLink";

export default function MediationCollege() {
	const id = 2;
	return (
		<>
			<section className={styles.section}>

				<ScrollAnimation2 className={styles.imageWrapper}>
					<Image
						className={styles.image}
						src={mediation[1].photoDate}
						alt={mediation[1].name}
						fill={true}
					/>
				</ScrollAnimation2>

				<ScrollAnimation>
					<h1 className={styles.h1}>{mediation[1].name}</h1>

						<article className={styles.paragraph}>
							<Markdown>{mediation[1].pres}</Markdown>
						<TransitionLink className={styles.link} href={`/mediation/${id}`}>
							En savoir plus
						</TransitionLink>
						</article>

				</ScrollAnimation>
			</section>
		</>
	);
}
