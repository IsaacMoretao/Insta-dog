import React from 'react'
import { useForm } from '../../Hooks/useForm'
import { Input } from '../subComponents/Input/Index'

import { Button } from '../subComponents/Button/Index'
import { UserContext } from '../../useContext'
import LoginImg from '../../assets/LoguinImg.png'

import './Stylle.scss'
import { Link } from 'react-router-dom'
import { Error } from '../Helper/Error'

export function Loguins() {
  const username = useForm()
  const password = useForm()

  const { userLogin, error, loading } = React.useContext(UserContext)

  async function handleSubmit(event) {
    event.preventDefault()

    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value)
    }
  }

  return (
    <div className="Loguins">
      <form onSubmit={handleSubmit}>
        <span className="Title">
          <figure /> Login{' '}
        </span>
        <Input
          label={'Usuário'}
          type={'password'}
          name={'Usename'}
          {...username}
        />

        <Input
          label={'Senha'}
          type={'password'}
          name={'password'}
          {...password}
        />

        {loading ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button>Enviar</Button>
        )}
        <Error error={error} />
      </form>
      <div className="subForm">
        <Link to={'/Insta-dog/Login/restaurar_senha'}>Perdeu a senha?</Link>
        <span>
          <div />
          Cadastre-se
        </span>
        <p>Ainda não possui conta? Cadastre-se no site.</p>

        <Link
          to={'/Insta-dog/Login/novoUsuario'}
          className="GlobalsButton"
          style={{ width: '80px' }}
        >
          Entrar
        </Link>
      </div>
    </div>
  )
}
