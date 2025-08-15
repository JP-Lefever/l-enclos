
import { cardData } from "@/assets/data/placeholder-data-spectacle";

import {notFound} from "next/navigation";
import {readAllDatePassed, readAllDateSpec} from "@/features/agenda/agenda.action";
import DetailSpectacle from "@/components/spectacle/detailSpectacle/DetailSpectacle";

export default async function detailSpectaclePage(props: {
	params: Promise<{ slug: string }>;
}) {
	const params = await props.params;
	const slug = params.slug;
	const dates = await readAllDateSpec()
	const datesPassed = await readAllDatePassed()

	if(!dates.success || !datesPassed.success ) {
		notFound();
	}

	return (
		<>
			<main>
				<DetailSpectacle dates={dates.data} datesPassed={datesPassed.data} slug={slug} cardData={cardData} />
			</main>
		</>
	);
}
