import Enviar from '../../../assets/enviar.svg';
import React from 'react';
import useFetch from '../../../Hooks/useFetch';

import { COMMENT_POST } from '../../../api';
import { Error } from './../../Helper/Error';


export function Form({ id, setComments }) {
  const [comment, setComment] = React.useState('');
  const { request, error } = useFetch();



    async function handleSubmit(event) {
      event.preventDefault();
      const { url, options } = COMMENT_POST(id, { comment });
      const { response, json } = await request(url, options);
      console.log(json);
      
      if (response.ok) {
        setComment('');
        setComments((comments) => [...comments, json]);
      }
    }

  

  return(
    <>
      <form onSubmit={handleSubmit}>
        
        <textarea
          id='comment'
          name='comment'
          placeholder='Commente...'
          value={comment}
          onChange={({ target }) => setComments(target.value)}
        />
        <button>
          <img src={Enviar} alt="" />
        </button>
        <Error error={error}/>
      </form>
    </>
  )
}