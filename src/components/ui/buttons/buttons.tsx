import styles from "./buttons.module.css"

const ButtonsAgenda = ({setIsOpenDate, setIsOpenInter} : {  setIsOpenDate : (s:boolean)=>void,  setIsOpenInter : (s:boolean)=>void})=>{

    const handleClickDate = ()=> {
        setIsOpenDate(true)
        setIsOpenInter(false)
    }

    const handleClickInter = ()=>{
        setIsOpenDate(false)
        setIsOpenInter(true)
    }
    return <>
    <section className={styles.AgendaButtons}>
        <button onClick={handleClickDate} className={styles.buttonDate} type="button">Date spectacle</button>
        <button onClick={handleClickInter} className={styles.buttonDate} type="button">Date immersion</button>
    </section>
    </>
}

export  {ButtonsAgenda}