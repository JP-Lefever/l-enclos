
import DisplayDate from "@/features/agenda/client/displayDate/DisplayDate";
import {readAllDateComing} from "@/features/agenda/agenda.action";


export default async function AgendaPage(){

    const allSpectacleDate = await readAllDateComing()

    //remplacer par not found
    if(!allSpectacleDate.success){
        return<>
        <section>
            <p>Une erreur est survenue</p>
        </section>
        </>
    }

    return (<>

            <section>

        <DisplayDate datesSpec={allSpectacleDate.data}/>

            </section>
    </>)
}