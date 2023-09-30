import { registration } from '@/services/user.services'
import { useRouter } from 'next/router'
import React, { useState } from 'react'

const signup = () => {

    const router = useRouter()

    const [signup, setSignup] = useState({
        userName: "",
        password: "",
    })

    function handleOnChange(e: any) {
        setSignup({
            ...signup,
            [e.target.name]: e.target.value
        })  
    }

    const handleOnclick = async () => {
        try {
            const response =  await registration(signup)
            router.push("/signin")
        } catch (error) {
            console.log("Error: ", error); 
        } 
    }



  return (
    <div>

        <input
            type='text'
            placeholder='username'
            name='userName'
            value={signup.userName}
            onChange={handleOnChange}
        />

        <input
            type='text'
            placeholder='password'
            name='password'
            value={signup.password}
            onChange={handleOnChange}
        />

        <button onClick={handleOnclick}>Crear cuenta</button>

    </div>
  )
}

export default signup
