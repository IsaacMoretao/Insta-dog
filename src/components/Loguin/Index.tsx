
import { useState } from 'react';
export function Loguins(){

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  function handleSubmit(event: any) {
    event.preventDefault();
    fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
      method: 'POST',
      headers: {
        'content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password})
    }).then((Response) => {
      console.log(Response);
      return Response.json();
    }).then(json => {
      console.log(json)
    })
  }

  return(

    <div>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={({target}) => setUsername (target.value)}
        />
        <input
          type="text"
          value={password}
          onChange={({target}) => setPassword (target.value)}
        />
        <button>Entrar</button>
      </form>
    </div>
  )
}