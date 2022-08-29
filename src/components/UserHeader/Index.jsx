import './Stylle.scss'
import { Link } from 'react-router-dom';
import { SquaresFour, ChartBar, Plus,SignOut } from 'phosphor-react'
export function UserHeader(){

  return(

    <header className='UserHeader'>
      <strong className='Title'>
        <figure/>Minha conta
      </strong>
      <nav>
      
        <Link to={'/istadog/Conta/Grade'} >
          <SquaresFour size={32} />
        </Link>

        <Link to={'/istadog/Conta/Estatisticas'}>
          <ChartBar size={32} />
        </Link>

        <Link to={'/istadog/Conta/novoPost'}>
          <Plus size={32} />
        </Link>

        <Link to={'/istadog/Conta'}>
          <SignOut size={32} />
        </Link>

      </nav>
    </header>

  )

}