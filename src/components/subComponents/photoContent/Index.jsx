import './Stylle.scss';
import React from "react";
import { Link } from 'react-router-dom';

import { X, Eye }  from 'phosphor-react';
import { Coments } from './../Coments/Index';
import { UserContext } from '../../../useContext';

import { PHOTO_DELETE } from '../../../api';
import useFetch from '../../../Hooks/useFetch';
import { Image } from './../../Helper/Image/Index';



export function PhotoContent({ data, setModalPhoto }) {
  const { loading, request } = useFetch();
  const user = React.useContext(UserContext);
  const {photo, comments } = data;

  function handleOutsideClick() {
    setModalPhoto(null);

  }
  async function handleClick() {
    const { url, options } = PHOTO_DELETE(photo.id);
    const { response } = await request(url, options);
    if (response.ok) window.location.reload();
  }

  return(

    <div className='PhotoContent'>
      <main>

        <figure>
          <Image src={photo.src} alt={photo.title}/>
        </figure>

        <aside>

          <div className='Aside'>

            <header>
              <button onClick={handleOutsideClick}>
                <X size={32} color="#1f1f1f" weight="bold" />
              </button>
            </header>

            <p>
              {user.data && user.data.username === photo.author ? (
                <button
                  className='ButtonDelete'
                  onClick={handleClick}
                  id={photo.id}>
                    Deletar
                </button>

              ) : (
                <Link
                  to={`/Insta-dog/Conta/perfil/${photo.author}`}>
                    @{photo.author}
                </Link>

              ) }
              
              <span><Eye size={25} />{photo.acessos}</span>
            </p>

            <h1 className='Title'><figure style={{zIndex: '10'}}/>
              <Link to={`/foto/${photo.id}`}>
                {photo.title}
              </Link>
            </h1>

            <ul>
              <li>| {photo.peso} kg</li>
              <li>| {photo.idade} anos</li>
            </ul>

            <Coments id={photo.id} comments={comments} />

          </div>
        </aside>
      </main>
    </div>
  )

}