import React from 'react';
import { useForm } from '../../Hooks/useForm';
import useFetch from '../../Hooks/useFetch';
import { Navigate } from 'react-router-dom'

import { Button } from '../../components/subComponents/Button/Index';
import { Input } from '../../components/subComponents/Input/Index';
import { PASSWORD_RESET } from '../../api'
import { Error } from '../../components/Helper/Error';

export function Reset(){
  const [login, setLogin] = React.useState('');
  const [key, setkey] = React.useState('');
  const password = useForm();
  const { error, loading, request } = useFetch();
  const navigate = useNavigate();

  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const key = params.get('key');
    const login = params.get('login');
    if (key) setkey(key);
    if (login) setLogin(login);

  }, []);

  async function handleSubmit(event) {
    event.preventDefault();
    if (password.validate()){
      const {url, options} = PASSWORD_RESET({
        login,
        key,
        password: password.value
      })
      const {response} = await request(url, options);
      if (response.ok) navigate('/login');
    }

  }


  return(
    <div>
      <h1 className='Title'><figure/>Crie uma nova senha</h1>
      <form onSubmit={handleSubmit}>

        <Input
          label='Nova Senha'
          type='password' 
          name='password'
          {...password}/>
        {loading ? (
          <Button desabled></Button>

        ) : (
          <Button>Reset</Button>

        )}
      
      </form>
      <Error error={error} />
    </div>
  )
}