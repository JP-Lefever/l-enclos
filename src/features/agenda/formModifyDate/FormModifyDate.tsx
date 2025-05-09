import styles from "./formModifyDate.module.css"
import errorMessage from "@/assets/data/errorMessage.json";
import {useForm} from "react-hook-form";
import { ModifyDateProps} from "@/types/definitions";
import {useState} from "react";
import { FilePenLine } from 'lucide-react';
import { Trash2 } from 'lucide-react';
import { CircleCheckBig } from 'lucide-react';
import {editDate} from "@/features/agenda/agenda.action";
import {toast} from "react-toastify";
import {formatedDate2} from "@/lib/helpers/formatedDate";
import {createPortal} from "react-dom";
import DeleteConfirmation from "@/features/agenda/deleteConfirmation/DeleteConfirmation";


export default function FormModifyDate({ dates}: {dates : ModifyDateProps } ) {

const {id, place,  date, city, hour, is_passed, spectacle_id} = dates




    const {register, formState:{errors}, handleSubmit}= useForm<ModifyDateProps>({defaultValues: {
        place : place,
        public : dates.public,
        date : formatedDate2(date),
        city : city,
        hour : hour,
        is_passed : is_passed ? 1 : 0,
        spectacle_id: spectacle_id
        }})

    const [edit, setEdit] = useState(true)

    const handleClickEdit = ()=>{
        setEdit(!edit)
    }

    const[openDeleteModal, setOpenDeleteModal] = useState(false)
    const handleClickDelete = ()=>{
        setOpenDeleteModal(!openDeleteModal)
    }

    const onSubmitEdit = async (data: ModifyDateProps) => {

        const response = await editDate(data, id)

        if(response?.success){
            toast.success(response.message)
            setEdit(!edit)
        } else{toast.error("Une erreur est survenue.")}

    }

    return (<>
        <form onSubmit={handleSubmit(onSubmitEdit)} className={styles.form} >
            <fieldset className={styles.fieldset}>

                <input className={edit ? styles.disabled : styles.editable}  disabled={edit} type="date" readOnly={edit} {...register("date",{required: errorMessage.require})}/>
                {errors.date && <p className={styles.errors}>{errors.date.message as string}</p>}
                <input className={edit ? styles.disabled : styles.editable} disabled={edit} readOnly={edit}  type="text" {...register("place" ,{required: errorMessage.require,
                    pattern: {
                        value : /^[^<>]*$/,
                        message : errorMessage.special
                    }
                } )} />
                {errors.place && <p className={styles.errors}>{errors.place.message as string}</p>}

                <input className={edit ? styles.disabled : styles.editable}   type="text" disabled={edit} readOnly={edit} {...register("public",{required: errorMessage.require,
                    pattern: {
                        value : /^[^<>]*$/,
                        message : errorMessage.special
                    }})}/>
                {errors.public && <p className={styles.errors}>{errors.public.message as string}</p>}



                <input className={edit ? styles.disabled : styles.editable}  type="text" disabled={edit} readOnly={edit} {...register("city",{required: errorMessage.require,
                    pattern: {
                        value : /^[^<>]*$/,
                        message : errorMessage.special
                    }})}/>
                {errors.city && <p className={styles.errors}>{errors.city.message as string}</p>}
            </fieldset>
            <fieldset className={styles.fieldset}>


                <input className={edit ? styles.disabled : styles.editable}  disabled={edit} type="text" readOnly={edit} {...register("hour",{required: errorMessage.require,
                    pattern: {
                        value : /^[^<>]*$/,
                        message : errorMessage.special
                    }})}/>
                {errors.hour && <p className={styles.errors}>{errors.hour.message as string}</p>}


                <select className={edit ? styles.disabled : styles.editable}  disabled={edit}  {...register("is_passed",{required: errorMessage.require})}>
                    <option value="#">Veuillez selectionner une réponse</option>
                    <option value={1}>Date passée</option>
                    <option value={0}>Date à venir</option>
                </select>


                {errors.is_passed && <p className={styles.errors}>{errors.is_passed.message as string}</p>}

                <select className={edit ? styles.disabled : styles.editable}   disabled={edit}  {...register("spectacle_id",{required: errorMessage.require})}>
                    <option value="#">Veuillez selectionner un spectacle</option>
                    <option value={1}>{"Te souviens-tu du jour ou j'ai coupé mes cheveux"}</option>
                    <option value={2}>{"J'ai 17ans pour toujours"}</option>
                </select>
                {errors.spectacle_id && <p className={styles.errors}>{errors.spectacle_id.message as string}</p>}

            </fieldset>
            <section className={styles.sectionButton}>

            {edit  &&
                <button onClick={handleClickEdit} className={styles.buttonModify} type="button" ><FilePenLine size={36}/></button>
            }
            {!edit &&
                <button  className={styles.buttonValidate} type="submit"><CircleCheckBig size={36}/></button>
            }
                <button onClick={handleClickDelete} className={styles.buttonDelete} type="button"><Trash2 size={36}/></button>
                {openDeleteModal && (
                    createPortal(<DeleteConfirmation closeModaleAction ={handleClickDelete} id={id}/>, document.body)
                )}
            </section>
        </form>
        </>
    )
}