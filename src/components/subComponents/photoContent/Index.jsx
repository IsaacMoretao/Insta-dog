import './Stylle.scss';
import React from "react";
import { Link } from 'react-router-dom';
import { X }  from 'phosphor-react';
import { Coments } from './../Coments/Index';

export function PhotoContent({ data, setModalPhoto }) {

  const {photo, comments } = data;

  function handleOutsideClick() {
    setModalPhoto(null);

  }

  return(

    <div className='PhotoContent'>
      <main>

        <figure>
          <img src={photo.src} alt={photo.title} />
        </figure>

        <aside>

          <div className='Aside'>

            <header>
              <button onClick={handleOutsideClick}>
                <X size={32} color="#1f1f1f" weight="bold" />
              </button>
            </header>

            <p>
              <Link to={`/perfil/${photo.author}`}>@{photo.author}</Link>
              <span>{photo.acessos}</span>
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

            <Coments setModalPhoto={setModalPhoto}/>

          </div>
        </aside>
      </main>
    </div>
  )

}