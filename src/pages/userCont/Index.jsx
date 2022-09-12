import React from 'react';
import './Stylle.scss';
import { useParams } from 'react-router';
import { Feed } from '../../components/Feed/Index';

 function UserCont(){
  const { user } = useParams();

  return(
    <section className='Container mainSection'>
      <h1 className='Title'>
        <figure/>{user}
      </h1>
      <Feed user={user}/>
    </section>
  )
}
export default UserCont