


import PresMediation from "@/components/mediation/presMediation/PresMediation";
import { AutoPlay } from "@/components/ui/slider/Autoplay";
import PresCompagnie from "@/components/compagnie/presCompagnie/PresCompagnie";
import PresSpectacles from "@/components/spectacle/presSpectacles/PresSpectacles";
import CompanyArticle from "@/components/compagnie/companyArticle/CompanyArticle";
import styles from "./page.module.css"

export default function Home() {


	return (
		<section className={styles.section}>
			<article>
				<AutoPlay />
			</article>
			<article>
				<PresCompagnie />
			</article>
			<article>
				<CompanyArticle/>
			</article>
			<article>
				<PresSpectacles />
			</article>
			<article>
				<PresMediation />
			</article>
		</section>
	);
}
