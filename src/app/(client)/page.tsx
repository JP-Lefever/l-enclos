import {
	ScrollAnimation,
	ScrollAnimation2,
} from "@/components/ui/animation/ScrollAnimation";

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
			<ScrollAnimation>
				<PresCompagnie />
			</ScrollAnimation>

			<ScrollAnimation2>
				<PresSpectacles />
			</ScrollAnimation2>

			<ScrollAnimation>
				<PresMediation />
			</ScrollAnimation>
		</>
	);
}
