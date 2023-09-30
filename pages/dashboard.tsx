import LayoutAuth from '@/layout/LayoutAuth'
import { useRouter } from 'next/router';
import React from 'react'

const dashboard = () => {

    const router = useRouter();

    const logout = () => {
        localStorage.removeItem("token")
        router.push("/signin")
    }

  return (
    <LayoutAuth>
        <div>Dashboard</div>
        <button onClick={logout}>log out</button>
    </LayoutAuth>
  )
}

export default dashboard