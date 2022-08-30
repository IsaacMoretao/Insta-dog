import './Stylle.scss';
import { NavLink } from 'react-router-dom';
import { SquaresFour, ChartBar, Plus, SignOut } from 'phosphor-react';
export function UserHeader(){

  return(

    <header className='UserHeader'>

      <strong className='Title'>
        <figure/>Minha conta
      </strong>

      <nav>
      
        <NavLink to='/istadog/Gread' >
          <SquaresFour size={32} />
        </NavLink>

        <NavLink to='/istadog/Statics'>
          <ChartBar size={32} />
        </NavLink>

        <NavLink to='/istadog/novoPost'>
          <Plus size={32} />
        </NavLink>

        <button >
          <SignOut size={32} />
        </button>

      </nav>
    </header>

  )

}