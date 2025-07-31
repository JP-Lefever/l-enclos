

import PresCompagnie from "@/features/compagnie/presCompagnie/PresCompagnie";
import PresMediation from "@/features/mediation/presMediation/PresMediation";
import PresSpectacles from "@/features/spectacle/presSpectacles/PresSpectacles";
import { AutoPlay } from "@/components/ui/slider/Autoplay";


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
