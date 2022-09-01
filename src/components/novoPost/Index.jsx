import './Stylle.scss';
import React from 'react';
import { useForm } from '../../Hooks/useForm';

import useFetch from './../../Hooks/useFetch';
import { Input } from '../subComponents/Input/Index';
import { Button } from '../subComponents/Button/Index';

import { PHOTO_POST } from '../../api';
import { Error } from '../Helper/Error';
import { useNavigate } from 'react-router-dom';


export function Novopost() {

  const nome = useForm();
  const peso = useForm('number');
  const idade = useForm('number');

  const [ img, setImg ] = React.useState({});
  const { data, error, loading, request } = useFetch();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (data) navigate('/istadog/Conta/Gread');
  }, [data, navigate]);

  function handleSubmit(event){
    
    event.preventDefault();
    const formData = new FormData();
    formData.append('img', img.raw);

    formData.append('nome', nome.value);
    formData.append('peso', peso.value);
    formData.append('idade', idade.value);

    const token = window.localStorage.getItem('token');
    const { url, options } = PHOTO_POST(formData, token);
    request(url, options);

  }

  function handleImgChange({ target }) {

    setImg({

      preview: URL.createObjectURL(target.files[0]),
      raw: target.files[0],

    });

  }

  return (
    <section className='photoPost Container'>

      <form onSubmit={handleSubmit}>

        <Input label="Nome" type="text" name="nome" {...nome} />
        <Input label="Peso" type="number" name="peso" {...peso} />
        <Input label="Idade" type="number" name="idade" {...idade} />

        <input
          className='file'
          type="file"
          name="img"
          id="img"
          onChange={handleImgChange}
        />

        {loading ? (
          <Button disabled>Enviando...</Button>
        ) : (
          <Button>Enviar</Button>
        )}
        <Error error={error} />

      </form>

      <div>

        {img.preview && (
          <figure
            className='preview'
            style={{ backgroundImage: `url('${img.preview}')` }}
          ></figure>
        )}

      </div>

    </section>

  );

}
