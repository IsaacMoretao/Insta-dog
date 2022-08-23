import { Input } from '../subComponents/Input/Index';
import { Button } from '../subComponents/Button/Index';
import useForm from '../../Hooks/useForm';

import { TOKEN_POST, USER_GET } from '../../api';
import { react } from '@vitejs/plugin-react';


export function Loguins(){
  const username = useForm();
  const password = useForm();

  react.UseEffact(() =>{
    const token = window.localStorage.getItem('token');
    if(token) {
      getUser();
    }

  }, [])

  async function getUser(token) {

    const {url, options} = USER_GET(token);
    const response = fetch(url, options)
    const json = await response.json();
    console.log(json)

  }

  async function handleSubmit(event) {
    event.preventDefault();

    if(username.validate() && password.validate()){
      const { url, Options } = TOKEN_POST({
        username: username.value,
        password: password.value,
      });

      const response = await fetch(url, Options);
      const json = await response.json();
      window.localStorage.setItem('token', json.token);
      getUser(json.token)

    }

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
          Enviar
        </Button>
      </form>
    </div>
  )
}