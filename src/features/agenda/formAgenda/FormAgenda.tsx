"use client"
import styles from "./formAgenda.module.css"
import {useForm} from "react-hook-form";
import errorMessage from "@/assets/data/errorMessage.json"
import {DateProps} from "@/types/definitions";
import {addNewDate} from "@/features/agenda/formAgenda/formAgenda.action";
import {toast} from "react-toastify";


export default function FormAgenda() {

    const {register, formState:{errors}, handleSubmit,reset}= useForm<DateProps>()

    const onSubmit = async (data:Omit<DateProps, "id">) => {
    console.log(data)
        const response = await addNewDate(data)

        if (response?.success){
            toast.success(response.message)
            reset()
        } else{toast.error("Une erreur est survenue.")}
    }

    return <>
        <section className={styles.section}>
                <legend className={styles.legend}>
                    Ajouter une date de spectacle
                </legend>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                <fieldset className={styles.fieldset}>
                    <label htmlFor="place">Théatre/lieu</label>
                    <input type="text" {...register("place" ,{required: errorMessage.require,
                    pattern: {
                        value : /^[^<>]*$/,
                        message : errorMessage.special
                    }
                    } )} />
                    {errors.place && <p className={styles.errors}>{errors.place.message as string}</p>}
                    <label htmlFor="public">Public</label>
                    <input type="text" {...register("public",{required: errorMessage.require,
                        pattern: {
                            value : /^[^<>]*$/,
                            message : errorMessage.special
                        }})}/>
                    {errors.public && <p className={styles.errors}>{errors.public.message as string}</p>}
                    <label htmlFor="date">Date</label>
                    <input type="date" {...register("date",{required: errorMessage.require})}/>
                    {errors.date && <p className={styles.errors}>{errors.date.message as string}</p>}
                    <label htmlFor="city">Ville</label>
                    <input type="text" {...register("city",{required: errorMessage.require,
                        pattern: {
                            value : /^[^<>]*$/,
                            message : errorMessage.special
                        }})}/>
                    {errors.city && <p className={styles.errors}>{errors.city.message as string}</p>}
                </fieldset>
                <fieldset className={styles.fieldset}>

                    <label htmlFor="hour">Horaire des représentations</label>
                    <input type="text" {...register("hour",{required: errorMessage.require,
                        pattern: {
                            value : /^[^<>]*$/,
                            message : errorMessage.special
                        }})}/>
                    {errors.hour && <p className={styles.errors}>{errors.hour.message as string}</p>}
                    <label htmlFor="isPassed">La date est elle déjà passée ?</label>
                    <select className={styles.select} {...register("isPassed",{required: errorMessage.require})}>
                        <option value="#">Veuillez selectionner une réponse</option>
                        <option value={1}>Oui</option>
                        <option value={0}>Non</option>
                    </select>
                    {errors.isPassed && <p className={styles.errors}>{errors.isPassed.message as string}</p>}
                    <label htmlFor="spectacleId">Spectacle concerné</label>
                    <select className={styles.select} {...register("spectacleId",{required: errorMessage.require})}>
                        <option value="#">Veuillez selectionner un spectacle</option>
                        <option value={1}>{"Te souviens-tu du jour ou j'ai coupé mes cheveux"}</option>
                        <option value={2}>{"J'ai 17ans pour toujours"}</option>
                    </select>
                    {errors.spectacleId && <p className={styles.errors}>{errors.spectacleId.message as string}</p>}
                    <button className={styles.button} type="submit">Ajouter une date</button>
                </fieldset>


            </form>

        </section>

    </>
}