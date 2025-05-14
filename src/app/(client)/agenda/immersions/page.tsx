

import DisplayImmersion from "@/features/agenda/client/displayImmersion/DisplayImmersion";
import {readAllInterventions} from "@/features/agenda/agenda.action";


export default async function immersionsDatePage(){

    const datesImmersion = await readAllInterventions()

    if (!datesImmersion.success){
        return <>
        <section>
            <p>Dates introuvalbes</p>
        </section>
        </>
    }

     return (<>

        <section>

            <DisplayImmersion data={datesImmersion.data}/>

        </section>
    </>)
}