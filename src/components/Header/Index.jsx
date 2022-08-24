import './Stylle.scss';
import React from 'react'
import { User } from 'phosphor-react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../useContext';


export function Header(){

  const { data, userLogout } = React.useContext(UserContext);

  return(
    <header className='Header'>

      <Link to={'/istadog/'}>
        <img src="" alt="Img-Logo" />
      </Link>

      {data? (
        <Link to={'/istadog/Conta'}>
          <button>
            {data.nome}
            <User size={25} weight="bold" />
          </button>
          <button onClick={userLogout}>Sair</button>
        </Link>
        
      ) : (
        <Link to={'/istadog/Loguin'}>
          <button>
            Login/Criar
            <User size={25} weight="bold" />
          </button>
        </Link>
      )}
      
      


    </header>
  )
}