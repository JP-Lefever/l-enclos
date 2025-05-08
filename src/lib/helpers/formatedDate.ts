import {format} from "date-fns";


const formatedDate = (value : string) =>{
    return format(value, 'dd-MM-yyyy');

}
const formatedDate2 = (value : string) =>{
    return format(value, 'yyyy-MM-dd');

}



export {formatedDate,formatedDate2}

