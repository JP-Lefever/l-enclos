import ModifyDate from "@/features/agenda/admin/modifyDate/ModifyDate";
import {readAllDate, readAllInterventions} from "@/features/agenda/agenda.action";
import { notFound } from "next/navigation";

export const revalidate = 0;

export  default async function EditDatePage(){


    const datesResult= await readAllDate()

    const datesImmersions = await readAllInterventions()


    if (!datesResult.success || !datesImmersions.success){
        notFound()
    }

    return (<>

    <ModifyDate dates={datesResult.data} immersions={datesImmersions.data} />

    </>)
}