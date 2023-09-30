import { useRouter } from 'next/router'
import React, {useEffect } from 'react'




const LayoutAuth = ({children}: any) => {

    const router = useRouter()

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (!token || token.length === 0) {
            router.push('/')
        }
    })


  return (
    <div>
        {children}
    </div>
  )
}

export default LayoutAuth