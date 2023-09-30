import { authenticate } from '@/services/user.services'
import { useRouter } from 'next/router'
import React, { useState } from 'react'

const signin = () => {

  const router = useRouter()

  const [signin, setSignin] = useState({
      userName: "",
      password: "",
  })

  function handleOnChange(e: any) {
      setSignin({
          ...signin,
          [e.target.name]: e.target.value
      })  
  }

  const handleOnclick = async () => {
      try {
          const response =  await authenticate(signin)
          localStorage.setItem("token", response.token)
          router.push("/dashboard")
      } catch (error) {
          console.log("Error: ", error); 
      } 
  }

  return (
    <div>
      <input
        type='text'
        placeholder='username'
        value={signin.userName}
        onChange={handleOnChange}
        name='userName'

      />

      <input
        type='text'
        placeholder='password'
        value={signin.password}
        onChange={handleOnChange}
        name='password'
      />

      <button onClick={handleOnclick}>Iniciar sesion</button>

    </div>
  )
}

export default signin