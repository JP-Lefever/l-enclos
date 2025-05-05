import Link from "next/link";
import styles from "./mediationEphad.module.css";
import Image from "next/image";
import {ScrollAnimation, ScrollAnimation2} from "@/components/ui/animation/ScrollAnimation";
import {mediation} from "@/assets/data/placeholder-data-mediation";
import Markdown from "react-markdown";

export default function MediationEphad() {
	const id = 3;
	return (
		<>
			<section className={styles.section}>
				<ScrollAnimation2 className={styles.imageWrapper}>
					<Image
						className={styles.image}
						src={mediation[2].photoPres}
						alt={mediation[2].name}
						fill={true}
					/>
				</ScrollAnimation2>

				<ScrollAnimation className={styles.sec} >
					<h1 className={styles.h1}>{mediation[2].name}</h1>
					<article className={styles.paragraph}>
					<Markdown>{mediation[2].pres}</Markdown>
						<Link className={styles.link} href={`/mediation/${id}`}>
							Voir les ateliers
						</Link>
					</article>
				</ScrollAnimation>
			</section>
		</>
	);
}
