import './Stylle.scss'
import { Header } from "../../components/Header";
import { Input } from './../../components/subComponents/Input/Index';
import { Button } from './../../components/subComponents/Button/Index';
import { useForm } from '../../Hooks/useForm';

export function Password(){

  const UserName = useForm();
  const email = useForm('email');
  const password = useForm();

  function handleSubmit(event) {
    event.preventDefault()
  }

  return(
    <>
      <main className='Password'>

        <div className='Left'/>

        <div className='Right'>
          <strong ClassName='Title'> <figure /> Perdeu a Senha ?</strong>
          
          <Input
            label="E-mail"
            type="text"
            name="UserName"
          />
          <Button>Enviar E-mail</Button>
        </div>

      </main>

    </>
  )
}