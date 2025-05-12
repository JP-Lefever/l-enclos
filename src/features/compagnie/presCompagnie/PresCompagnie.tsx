import Link from "next/link";
import styles from "./presCompagnie.module.css";
import Image from "next/image";
import {generalesInformations} from "@/assets/data/placeholder-data-homePage";
import {
	ScrollAnimation,
	ScrollAnimation2,
} from "@/components/ui/animation/ScrollAnimation";

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

					<Link className={styles.link} href="/compagnie">
						{generalesInformations[0].button}
					</Link>
				</ScrollAnimation2>
			</section>
		</>
	);
}
