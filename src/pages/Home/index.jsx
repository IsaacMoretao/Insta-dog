import React from 'react';
import { Feed } from "../../components/Feed/Index";
import { UserContext } from "../../useContext";

export function Home(){
  const { data } = React.useContext(UserContext);

  return(

    <section className='Home'>

      <Feed />
      
    </section>

  )

}