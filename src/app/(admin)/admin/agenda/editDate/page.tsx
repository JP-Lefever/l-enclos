import ModifyDate from "@/features/agenda/admin/modifyDate/ModifyDate";
import {readAllDate, readAllInterventions} from "@/features/agenda/agenda.action";

export  default async function EditDatePage(){

    const {data: dates, error: datesError} = await readAllDate()

    const {data: interventions, error: interventionsError} = await readAllInterventions()


    return (<>
        {!datesError && !interventionsError && dates && interventions &&
    <ModifyDate dates={dates} immersions={interventions} />
        }
    </>)
}