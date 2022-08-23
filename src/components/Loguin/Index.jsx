import { useState } from 'react';
import { Input } from '../subComponents/Input/Index';
import { Button } from '../subComponents/Button/Index';
import useForm from '../../Hooks/useForm';

export function Loguins(){

  const username = useForm();
  const password = useForm();

  function handleSubmit(event) {

    event.preventDefault();
    fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
      method: 'POST',
      headers: {
        'content-Type': 'application/json'
      },
      body: JSON.stringify('')
    }).then((Response) => {
      console.log(Response);
      return Response.json();
    }).then(json => {
      console.log(json)
    })
  }

  return(

    <div>
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

        <Button>
          lasdfjh
        </Button>
      </form>
    </div>
  )
}