


import PresMediation from "@/components/mediation/presMediation/PresMediation";

import { AutoPlay } from "@/components/ui/slider/Autoplay";
import PresCompagnie from "@/components/compagnie/presCompagnie/PresCompagnie";
import PresSpectacles from "@/components/spectacle/presSpectacles/PresSpectacles";


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
				<PresSpectacles />
			</section>

			<section>
				<PresMediation />
			</section>
		</>
	);
}
