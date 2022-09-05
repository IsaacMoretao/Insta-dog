import './Stylle.scss';
import React from 'react';
import { PHOTOS_GET } from '../../../api';

import FeedPhotosItem from './FeedPhotosItem';
import useFetch from '../../../Hooks/useFetch';
import { Error } from '../../Helper/Error';

import { Loading } from '../../Helper/Loading';


export function FeedPhotos({setModalPhoto}) {
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    async function fetchPhotos() {
      const { url, options } = PHOTOS_GET({ page: 1, total: 6, user: 0 });
      const { json } = await request(url, options);
      console.log(json);
    }
    fetchPhotos();
  }, [request]);

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