import Link from 'next/link'
import React from 'react'

const index = () => {
  return (
    <div>
      <Link href="/signin">Iniciar sesion</Link>
      <Link href="/signup">Registrarse</Link>
    </div>
  )
}

export default index