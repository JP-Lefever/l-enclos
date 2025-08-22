

import DisplayImmersion from "@/features/agenda/client/displayImmersion/DisplayImmersion";
import {readAllInterventions} from "@/features/agenda/agenda.action";
import {notFound} from "next/navigation";


export default async function immersionsDatePage(){

    const datesImmersion = await readAllInterventions()

    if (!datesImmersion.success){
        notFound()
    }

     return (<>

        <section>

            <DisplayImmersion data={datesImmersion.data}/>

        </section>
    </>)
}