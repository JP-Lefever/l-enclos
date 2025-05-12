import styles from "./page.module.css"
import DisplayDate from "@/features/agenda/client/displayDate/DisplayDate";
import {readAllDateComing} from "@/features/agenda/agenda.action";
import {ButtonsDates} from "@/components/ui/buttons/Buttons";

export default async function AgendaPage(){

    const {data, error} = await readAllDateComing()

    return (<>

            <section>
        {!error && data &&
        <DisplayDate datesSpec={data}/>
        }
            </section>
    </>)
}