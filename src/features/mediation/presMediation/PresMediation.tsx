import Link from "next/link";
import styles from "./presMediation.module.css";
import Image from "next/image";
import {generalesInformations} from "@/assets/data/placeholder-data-homePage";
import {
	ScrollAnimation,
	ScrollAnimation2,
} from "@/components/ui/animation/ScrollAnimation";

export default function PresMediation() {
	return (
		<>
			<section className={styles.section}>
				<ScrollAnimation className={styles.figure}>
					<Image
						className={styles.image}
						src={generalesInformations[2].image}
						alt={generalesInformations[2].title}
						width={1080}
						height={860}
					/>
				</ScrollAnimation>

				<ScrollAnimation2 className={styles.article}>
					<h1 className={styles.h1}>{generalesInformations[2].title}</h1>

						<p className={styles.paragraph}>
							{generalesInformations[2].paragraph}
						</p>
						<Link className={styles.link} href="/mediation">
							{generalesInformations[2].button}
						</Link>

				</ScrollAnimation2>
			</section>
		</>
	);
}
