import { studentApi } from "@/api/studentApi"
import { UserAuthenticated, UserRequest } from "@/interfaces/user.interface"


const registration = async (user: UserRequest) => {

    try {
        const response = await studentApi.post(
            '/api/user/registration',
            user
        )

        console.log("respuesta: "+JSON.stringify(response));
        return response.data
    } catch(e){
        throw e

    }

}


const authenticate = async (user: UserRequest) => {

    try {
        const response = await studentApi.post<UserAuthenticated>(
            '/api/user/authenticate',
            user
        )

        console.log("respuesta: "+JSON.stringify(response));
        return response.data
    } catch(e){
        throw e

    }

}

export {
    registration,
    authenticate
}