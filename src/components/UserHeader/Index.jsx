import './Stylle.scss';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';

import { SquaresFour, ChartBar, Plus, SignOut } from 'phosphor-react';
import { UserContext } from '../../useContext';
import { useLocation } from 'react-router-dom';

export function UserHeader(){

  const [title, setTitle] = React.useState('');
  const { userLogout } = React.useContext(UserContext);
  const location = useLocation();

  React.useEffect(() => {
    const { pathname } = location;
    switch (pathname) {
      case '/istadog/Conta/novoPost':
        setTitle('Poste Sua Foto');
        break;
      case '/istadog/Conta/Statics':
        setTitle('Estatísticas');
        break;
      default:
        setTitle('Minha Conta');
    }
  }, [location]);

  return(

    <header className='UserHeader'>

      <strong className='Title'>
        <figure/>{title}
      </strong>

      <nav>
      
        <NavLink to='/istadog/Conta/Gread' >
          <SquaresFour size={32} />
        </NavLink>

        <NavLink to='/istadog/Conta/Statics'>
          <ChartBar size={32} />
        </NavLink>

        <NavLink to='/istadog/Conta/novoPost'>
          <Plus size={32} />
        </NavLink>

        <button onClick={userLogout}>
          <SignOut size={32} />
        </button>

      </nav>
    </header>

  )

}