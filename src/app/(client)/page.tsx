


import PresMediation from "@/components/mediation/presMediation/PresMediation";
import PresSpectacles from "@/features/spectacle/presSpectacles/PresSpectacles";
import { AutoPlay } from "@/components/ui/slider/Autoplay";
import PresCompagnie from "@/components/compagnie/presCompagnie/PresCompagnie";


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
