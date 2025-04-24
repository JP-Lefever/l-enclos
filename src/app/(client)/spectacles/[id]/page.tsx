import DetailSpectacle from "@/components/ui/detailSpectacle/DetailSpectacle";
import { cardData } from "@/lib/placeholder-data";

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
