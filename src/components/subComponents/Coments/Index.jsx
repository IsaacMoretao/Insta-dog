import React from 'react';
import { UserContext } from '../../../useContext';
import { Form } from './Form';

export function Coments(props){

  const [comments, setComments] = React.useState(() => props.comments);
  const { login } = React.useContext(UserContext);


  return(
    <div>

      <ul>
        {comments.map((comment) => (
          <li key={comment.comment_ID}>
            <b>{comment.comment_author}: </b>
            <span>{comment.comment_content}</span>
          </li>
        ))}
      </ul>

      {login && <Form id={props.id} setComments={setComments}/>}
    </div>

  )

}