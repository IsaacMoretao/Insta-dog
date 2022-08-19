import './Stylle.scss';
import { User } from 'phosphor-react';
import { Link } from 'react-router-dom';


export function Header(){
  return(
    <header className='Header'>

      <Link to={'/istadog/'}>
        <img src="" alt="Img-Logo" />
      </Link>
      
      <Link to={'/istadog/Loguin'}>
        <button>
          Login/Criar
          <User size={25} weight="bold" />
        </button>
      </Link>


    </header>
  )
}