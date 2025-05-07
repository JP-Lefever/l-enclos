

 const formatedDate = (value : string) =>{
    const date = new Date(value)
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    return `${day}/${month}/${year}`
}



 export {formatedDate}

