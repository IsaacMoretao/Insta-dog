import './Stylle.scss';
import React from 'react';
import { Input } from '../../components/subComponents/Input/Index';
import { PASSWORD_LOST } from '../../api';

import { useForm } from '../../Hooks/useForm';
import useFetch from '../../Hooks/useFetch';
import { Button } from '../../components/subComponents/Button/Index';
import { Error } from '../../components/Helper/Error';


export function LoginPassword() {
  const login = useForm();
  const {data, loading, error, request} = useFetch();

  async function handleSubmit(event) {

    event.preventDefault();
    if (login.validate()) {

      const { url, options } = PASSWORD_LOST({
        login: login.value,
        url: window.location.href.replace('perdeu', 'resetar'),
      });
      const { json } = await request(url, options);
      console.log(json);

    }

  }

  return(
    <main className='LoginPassword'>

      <figure className='figure'/>

      <section>

        <h1 className="Title"><figure/>
          Perdeu a senha?
        </h1>

        {data ? (

          <p style={{ color: '#4c1' }}>{data}</p>

        ) : (

          <form onSubmit={handleSubmit}>
            <Input label="Email / Usuário" type="text" name="login" {...login} />
            {loading ? (

              <Button disabled>Enviando...</Button>

            ) : (

              <Button>Enviar Email</Button>

            )}
          </form>

        )}

        <Error error={error} />

      </section>

    </main>
    
  )

}