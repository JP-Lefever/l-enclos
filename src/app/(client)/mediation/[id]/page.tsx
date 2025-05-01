import DetailMediation from "@/features/mediation/detailMediation/DetailMediation";
import { mediation } from "@/lib/placeholder-data-mediation";

export default async function DetailMediationPage(props: {
	params: Promise<{ id: string }>;
}) {
	const params = await props.params;
	const id = params.id;
	return (
		<>
			<section>
				<DetailMediation id={id} mediation={mediation} />
			</section>
		</>
	);
}
