import React from 'react'
import { Loguins } from '../../components/Loguin/Index'
import { UserContext } from '../../useContext'
import './Stylle.scss'

export function Loguin() {
  const { login } = React.useContext(UserContext)

  if (login === true) return <Navigate to="/Insta-dog/Conta" />
  return (
    <>
      <main className="Loguin">
        <figure className="figure" />
        <Loguins />
      </main>
    </>
  )
}
