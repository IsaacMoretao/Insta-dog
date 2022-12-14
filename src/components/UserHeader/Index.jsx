import './Stylle.scss';
import React from 'react';
import { NavLink } from 'react-router-dom';

import {
  SquaresFour,
  ChartBar,
  Plus,
  SignOut,
  Layout,
  House
} from 'phosphor-react'
import { UserContext } from '../../useContext'
import { useLocation } from 'react-router-dom'

export function UserHeader() {
  const [title, setTitle] = React.useState('')
  const { userLogout } = React.useContext(UserContext)
  const [display, setDisplay] = React.useState('none')

  const location = useLocation()

  function handleDisplay() {
    if (display == 'none') {
      setDisplay('flex')
    } else if (display == 'flex') {
      setDisplay('none')
    } else {
      console.log('[ERROR] handleDisplay is not working [ERROR]')
    }
  }

  React.useEffect(() => {
    const { pathname } = location
    switch (pathname) {
      case '/Insta-dog/Conta/novoPost':
        setTitle('Novo Post')
        break
      case '/Insta-dog/Conta/Gread':
        setTitle('Grade')
        break
      case '/Insta-dog/Conta/MinhaConta':
        setTitle('Minha Conta')
        break
      default:
        setTitle('Undfined')
    }
  }, [location])

  return (
    <>
      <header className="UserHeader Container">
        <strong className="Title">
          <figure />
          {title}
        </strong>

        <nav>
          <NavLink to="/Insta-dog/Conta/Gread">
            <Layout size={32} />
          </NavLink>

          <NavLink to="/Insta-dog/Conta/MinhaConta">
            <House size={32} />
          </NavLink>

          <NavLink to="/Insta-dog/Conta/novoPost">
            <Plus size={32} />
          </NavLink>

          <button onClick={userLogout}>
            <SignOut size={32} />
          </button>
        </nav>
        <button className="Hamburguer" onClick={handleDisplay}>
          <SquaresFour size={32} />
        </button>
      </header>

      <nav className="OptionsSubHeader" style={{ display: `${display}` }}>
        <NavLink to="/Insta-dog/Conta/Gread">
          <Layout size={32} />
        </NavLink>

        <NavLink to="/Insta-dog/Conta/Statics">
          <ChartBar size={32} />
        </NavLink>

        <NavLink to="/Insta-dog/Conta/novoPost">
          <Plus size={32} />
        </NavLink>

        <button onClick={userLogout}>
          <SignOut size={32} />
        </button>
      </nav>
    </>
  )
}
