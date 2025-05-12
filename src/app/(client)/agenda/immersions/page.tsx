

import DisplayImmersion from "@/features/agenda/client/displayImmersion/DisplayImmersion";
import {readAllInterventions} from "@/features/agenda/agenda.action";


export default async function immersionsDatePage(){

    const {data, error} = await readAllInterventions()

     return (<>

        <section>
            {!error && data &&
            <DisplayImmersion data={data}/>
            }
        </section>
    </>)
}