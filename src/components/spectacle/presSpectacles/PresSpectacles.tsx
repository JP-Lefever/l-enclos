
import styles from "./presSpectacles.module.css";
import {generalesInformations} from "@/assets/data/placeholder-data-homePage";
import {
	ScrollAnimation2,
} from "@/components/ui/animation/ScrollAnimation";
import TransitionLink from "@/components/ui/transitionLink/TransitionLink";

export default function PresSpectacles() {
	return (
		<>
			<section className={styles.section}>
					<article className={styles.article}/>
					<ScrollAnimation2 className={styles.content}>
						<h1 className={styles.h1}>{generalesInformations[1].title}</h1>
						<TransitionLink className={styles.link} href="/spectacles">
							{generalesInformations[1].button}
						</TransitionLink>
					</ScrollAnimation2>

			</section>
		</>
	);
}
