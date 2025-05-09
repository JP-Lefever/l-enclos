import DisplayDate from "@/features/agenda/client/displayDate/DisplayDate";
import {readAllDateComing} from "@/features/agenda/agenda.action";

export default async function AgendaPage(){

    const {data, error} = await readAllDateComing()

    return (<>
        {!error && data &&
        <DisplayDate datesSpec={data}/>
        }
    </>)
}