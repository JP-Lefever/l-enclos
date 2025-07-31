import DetailMediation from "@/features/mediation/detailMediation/DetailMediation";
import { mediation } from "@/assets/data/placeholder-data-mediation";

export default async function DetailMediationPage(props: {
	params: Promise<{ slug: string }>;
}) {
	const params = await props.params;
	const slug = params.slug;

	return (
		<>
			<section>
				<DetailMediation slug={slug} mediation={mediation} />
			</section>
		</>
	);
}
