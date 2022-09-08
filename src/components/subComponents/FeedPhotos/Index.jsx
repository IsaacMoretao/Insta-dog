import './Stylle.scss';
import React from 'react';
import { PHOTOS_GET } from '../../../api';

import FeedPhotosItem from './FeedPhotosItem';
import useFetch from '../../../Hooks/useFetch';
import { Error } from '../../Helper/Error';

import { Loading } from '../../Helper/Loading';


export function FeedPhotos({ page, user, setModalPhoto, setInfinite }) {
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    async function fetchPhotos() {
      const total = 6;
      const { url, options } = PHOTOS_GET({ page, total, user });
      const { response, json } = await request(url, options);
      if(response && response.ok && json.length < total) setInfinite(false)
      console.log(json);
    }
    fetchPhotos();
  }, [request, user, page, setInfinite]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data)
  return(
    <ul className='FeedPhotos'>
      {data.map((photo) => (
        <FeedPhotosItem
          key={photo.id}
          setModalPhoto={setModalPhoto}
          photo={photo}
        />
      ))}
    </ul>
  );
  else return null;

}