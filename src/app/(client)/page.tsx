


import PresMediation from "@/components/mediation/presMediation/PresMediation";

import { AutoPlay } from "@/components/ui/slider/Autoplay";
import PresCompagnie from "@/components/compagnie/presCompagnie/PresCompagnie";
import PresSpectacles from "@/components/spectacle/presSpectacles/PresSpectacles";
import CompanyArticle from "@/components/compagnie/companyArticle/CompanyArticle";


export default function Home() {


	return (
		<>
			<section>
				<AutoPlay />
			</section>
			<section>
				<PresCompagnie />
			</section>
			<section>
				<CompanyArticle/>
			</section>
			<section>
				<PresSpectacles />
			</section>

			<section>
				<PresMediation />
			</section>
		</>
	);
}
