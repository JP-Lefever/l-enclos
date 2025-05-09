"use client"
import styles from "./formModifyImmersion.module.css"
import {useForm} from "react-hook-form";
import ErrorMessage from "@/assets/data/errorMessage.json"
import {ModifyImmersionProps} from "@/types/definitions";
import {useState} from "react";
import {CircleCheckBig, FilePenLine, Trash2} from "lucide-react";
import {editIntervention} from "@/features/agenda/agenda.action";
import {toast} from "react-toastify";


export default function FormModifyImmersion({immersions} : {immersions: ModifyImmersionProps}) {

  const {id, year, label, is_passed, mediation_id} = immersions;


  const {register, handleSubmit} = useForm<ModifyImmersionProps>({
      defaultValues : {
          year : year,
          label : label,
          is_passed: is_passed ? 1 : 0,
          mediation_id: mediation_id,
      }
  })

  const [edit, setEdit] = useState(true)
  const handleClickEdit = ()=>{
      return setEdit(!edit);
  }

  const onSubmit = async (data : ModifyImmersionProps)=>{

      const response = await editIntervention(data, id)

      if(response?.success){
          toast.success(response.message)
          setEdit(!edit);
      } else {toast.error("une erreur est survenue")}
  }

    return(<>


        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>


            <input className={edit ? styles.disabled : styles.editable} readOnly={edit} disabled={edit} type="text" {...register("year", {required : ErrorMessage.require , pattern :{
                value : /^[^<>]*$/,
                    message : ErrorMessage.special
                }})}/>
            <input className={edit ? styles.disabled : styles.editable} readOnly={edit} disabled={edit} type="text" {...register("label",{required : ErrorMessage.require , pattern :{
                    value : /^[^<>]*$/,
                    message : ErrorMessage.special
                }})}/>
            <select className={edit ? styles.disabled : styles.editable}  disabled={edit} {...register("is_passed")}>
                <option value="#">{"Veuillez choisir si l'intervetion est passée"}</option>
                <option value="0">Non</option>
                <option value="1">Oui</option>
            </select>
            <select className={edit ? styles.disabled : styles.editable}  disabled={edit} {...register("mediation_id")}>
                <option value="#">Veuillez selectionner le public</option>
                <option value="1">Primaire</option>
                <option value="2">Collège</option>
                <option value="3">EPHAD</option>
            </select>

            <section className={styles.sectionButton}>

                {edit  &&
                    <button onClick={handleClickEdit} className={styles.buttonModify} type="button" ><FilePenLine size={36}/></button>
                }
                {!edit &&
                    <button  className={styles.buttonValidate} type="submit"><CircleCheckBig size={36}/></button>
                }
                <button onClick={handleClickEdit} className={styles.buttonDelete} type="button"><Trash2 size={36}/></button>
            </section>
        </form>

    </>)
}