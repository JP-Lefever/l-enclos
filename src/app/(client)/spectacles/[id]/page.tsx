import DetailSpectacle from "@/features/spectacle/detailSpectacle/DetailSpectacle";
import { cardData } from "@/assets/data/placeholder-data-spectacle";

export default async function detailSpectaclePage(props: {
	params: Promise<{ id: string }>;
}) {
	const params = await props.params;
	const id = params.id;
	return (
		<>
			<main>
				<DetailSpectacle id={id} cardData={cardData} />
			</main>
		</>
	);
}
