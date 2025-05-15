"use server"
import type {ModifyDateProps, Result} from "@/types/definitions"
import SpectacleRepo from "@/features/spectacle/spectacle.repository";


const readAllDate = async () : Promise<Result<ModifyDateProps[]>> => {

    const res = await SpectacleRepo.readDateComing()

    if (!res.success) {
        return {success: false, error : res.error}
    }
    return {success: true, data: res.data}
}

const readAllDatePassed = async () : Promise<Result<ModifyDateProps[]>> => {

    const res = await SpectacleRepo.readDatePassed()

    if (!res.success) {
        return {success: false, error : res.error}
    }
    return {success: true, data: res.data}
}

export {readAllDate, readAllDatePassed}