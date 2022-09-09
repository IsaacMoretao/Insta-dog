import './Stylle.scss';
import React from 'react'
import { User } from 'phosphor-react';

import Logo from '../../assets/dogs.svg'
import { Link } from 'react-router-dom';
import { UserContext } from '../../useContext';


export function Header(){

  const { data } = React.useContext(UserContext);

  return(
    <header className='Header Container'>

      <Link to={'/istadog/'}>
        <img src={Logo} alt="Img-Logo" />
      </Link>

      {data? (
        <>
          <Link to={'/istadog/Conta'}>
            <button>
              {data.nome}
              <User size={25} weight="bold" />
            </button>
            
          </Link>
        </>
        
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