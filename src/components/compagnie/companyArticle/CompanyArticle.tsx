
import styles from "./companyArticle.module.css";
import {generalesInformations} from "@/assets/data/placeholder-data-homePage";
import {
	ScrollAnimation2,
} from "@/components/ui/animation/ScrollAnimation";
import TransitionLink from "@/components/ui/transitionLink/TransitionLink";

export default function CompanyArticle() {
	return (
		<>
			<section className={styles.section}>
					<article className={styles.article}/>
					<ScrollAnimation2 className={styles.content}>
						<h1 className={styles.h1}>{generalesInformations[0].title}</h1>
						<TransitionLink className={styles.link} href="/compagnie">
							{generalesInformations[0].button}
						</TransitionLink>
					</ScrollAnimation2>

			</section>
		</>
	);
}
