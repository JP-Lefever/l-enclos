"use server"
import DetailMediation from "@/components/mediation/detailMediation/DetailMediation";
import { mediation } from "@/assets/data/placeholder-data-mediation";
import {readAllInterventions} from "@/features/agenda/agenda.action";
import {notFound} from "next/navigation";

export default async function DetailMediationPage(props: {
	params: Promise<{ slug: string }>;
}) {
	const params = await props.params;
	const slug = params.slug;
	const date = await readAllInterventions();

	if(!date.success){
		return notFound()
	}
console.log(date.data);
	return (
		<>
			<section>
				<DetailMediation slug={slug} mediation={mediation} date ={date.data} />
			</section>
		</>
	);
}
