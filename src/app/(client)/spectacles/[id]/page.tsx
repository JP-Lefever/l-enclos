import DetailSpectacle from "@/features/spectacle/detailSpectacle/DetailSpectacle";
import { cardData } from "@/assets/data/placeholder-data-spectacle";
import {readAllDate, readAllDatePassed} from "@/features/spectacle/spectacle.action"
import {notFound} from "next/navigation";

export default async function detailSpectaclePage(props: {
	params: Promise<{ id: string }>;
}) {
	const params = await props.params;
	const id = params.id;
	const dates = await readAllDate()
	const datesPassed = await readAllDatePassed()

	if(!dates.success || !datesPassed.success ) {
		notFound();
	}
console.log(cardData);
	return (
		<>
			<main>
				<DetailSpectacle dates={dates.data} datesPassed={datesPassed.data} id={id} cardData={cardData} />
			</main>
		</>
	);
}
