"use client"
import styles from "./formIntervention.module.css"
import {useForm} from "react-hook-form";
import errorMessage from "@/assets/data/errorMessage.json"
import { InterventionAdminProps} from "@/types/definitions";
import {addNewIntervention} from "@/features/agenda/formIntervention/formIntervention.action";
import {toast} from "react-toastify";



export default function FormIntervention() {

    const {register, formState:{errors}, handleSubmit, reset}= useForm<InterventionAdminProps>()

    const onSubmit = async (data:InterventionAdminProps) => {
       const response= await addNewIntervention(data)

        if(response?.success){
            toast.success(response.message)
            reset()
        }else{toast.error("Une erreur est survenue.")}

    }

    return <>
        <section className={styles.section}>
            <legend className={styles.legend}>
                Ajouter une Intervention
            </legend>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                <fieldset className={styles.fieldset}>
                    <label htmlFor="year">Année de l'intervention</label>
                    <input type="text" {...register("year" ,{required: errorMessage.require,
                        pattern: {
                            value : /^[^<>]*$/,
                            message : errorMessage.special
                        }
                    } )} />
                    {errors.year && <p className={styles.errors}>{errors.year.message as string}</p>}
                    <label htmlFor="label">Libéllé</label>
                    <input type="text" {...register("label",{required: errorMessage.require,
                        pattern: {
                            value : /^[^<>]*$/,
                            message : errorMessage.special
                        }})}/>
                    {errors.label && <p className={styles.errors}>{errors.label.message as string}</p>}

                </fieldset>
                <fieldset className={styles.fieldset}>

                    <label htmlFor="isPassed">{"L'intervention est-elle déjà passée ?"}</label>
                    <select className={styles.select} {...register("isPassed",{required: errorMessage.require})}>
                        <option value="#">Veuillez selectionner une réponse</option>
                        <option value={1}>Oui</option>
                        <option value={0}>Non</option>
                    </select>
                    {errors.isPassed && <p className={styles.errors}>{errors.isPassed.message as string}</p>}
                    <label htmlFor="mediationId">Public concerné</label>
                    <select className={styles.select} {...register("mediationId",{required: errorMessage.require})}>
                        <option value="#">Veuillez selectionner le public concerné</option>
                        <option value={1}>{"Primaire"}</option>
                        <option value={2}>{"College"}</option>
                        <option value={3}>{"Ephad"}</option>
                    </select>
                    {errors.mediationId && <p className={styles.errors}>{errors.mediationId.message as string}</p>}
                    <button className={styles.button} type="submit">Ajouter une date</button>
                </fieldset>


            </form>

        </section>

    </>
}