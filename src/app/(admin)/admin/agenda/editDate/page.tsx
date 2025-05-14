import ModifyDate from "@/features/agenda/admin/modifyDate/ModifyDate";
import {readAllDate, readAllInterventions} from "@/features/agenda/agenda.action";

export  default async function EditDatePage(){


    const datesResult= await readAllDate()

    const datesImmersions = await readAllInterventions()


    //remplacer par not found
    if (!datesResult.success || !datesImmersions.success){
        return <>
        <section>
            <p>Une erreur est survenue</p>
        </section>
        </>
    }

    return (<>

    <ModifyDate dates={datesResult.data} immersions={datesImmersions.data} />

    </>)
}