import './Stylle.scss';
import React from 'react';
import { UserContext } from '../../useContext';
import { Feed } from '../../components/Feed/Index';

 function MinhaConta(){
  const { data } = React.useContext(UserContext);

  if (data)
  return(
    
    <section className='Container'>
      <main className='MinhaConta'>

        <h1 >
          {data.nome}
        </h1>
        <Feed user={data.id}/>

      </main>
    </section>
  )
}
export default MinhaConta