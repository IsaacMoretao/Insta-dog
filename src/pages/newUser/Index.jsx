import './Stylle.scss';
import React from 'react';
import { Input } from './../../components/subComponents/Input/Index';

import { Button } from './../../components/subComponents/Button/Index';
import { USER_POST } from '../../api';
import { useForm } from '../../Hooks/useForm';

import { Header } from './../../components/Header/Index';
import { UserContext } from '../../useContext';
import { Error } from '../../components/Helper/Error';
import useFetch from './../../Hooks/useFetch';



export function NewCount(){

  const username = useForm();
  const email = useForm('email');
  const password = useForm('password');
  
  const {userLogin} = React.useContext(UserContext);
  const  {loading, error, request } = useFetch();

  async function handleSubmit(event) {

    event.preventDefault();
    const { url, options } = USER_POST({

      username: username.value,
      email: email.value,
      password: password.value,

    });

    const { response } = await request(url, options);
    if(response.ok) userLogin(username.value, password.value)
    
  }

  return(
    <>
      <div>
        <main className='newUser'>
          <div className='Left'></div>
          <div className='Right'>
            <main>
              <strong className='Title'>
                <figure/>Cadastre-se
              </strong>
              <form onSubmit={handleSubmit}>

                <Input label="Usuário" type="text" name="username" {...username} />
                <Input label="Email" type="email" name="email" {...email} />
                <Input label="Senha" type="password" name="password" {...password} />
                {loading ? (
                    <Button>Cadastrando . . .</Button>
                  ) : (
                    <Button>Cadastrar</Button>
                )}
                  <Error error={error} />
                

              </form>
            </main>
        
          </div>
          
        </main>
        
      </div>
  

    </>

  )

}