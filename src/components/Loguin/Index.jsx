import React from 'react';
import { useForm } from '../../Hooks/useForm';
import { Input } from '../subComponents/Input/Index';
import { Button } from '../subComponents/Button/Index';
import { UserContext } from '../../useContext';
import { Header } from './../Header/Index';


export function Loguins(){
  const username = useForm();
  const password = useForm();

  const { userLogin, error, loading } = React.useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  }

  return(

    <div>
      <Header/>
      <form action="" onSubmit={handleSubmit}>
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
        ):(
          <Button>Enviar</Button>
        )}


        {error && <p>{error}</p>}
      </form>
    </div>
  )
}