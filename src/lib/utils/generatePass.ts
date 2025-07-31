import argon from "argon2";



export const generatePass = (pass : string) => {

    return  argon.hash(pass);

   

}