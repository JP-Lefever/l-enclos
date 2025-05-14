
import DisplayDate from "@/features/agenda/client/displayDate/DisplayDate";
import {readAllDateComing} from "@/features/agenda/agenda.action";
import {notFound} from "next/navigation";


export default async function AgendaPage(){

    const allSpectacleDate = await readAllDateComing()


    if(!allSpectacleDate.success){
       notFound()
    }

    return (<>

            <section>

        <DisplayDate datesSpec={allSpectacleDate.data}/>

            </section>
    </>)
}