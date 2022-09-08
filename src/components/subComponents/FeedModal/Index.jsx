import React from 'react';
import useFetch from './../../../Hooks/useFetch';
import { PHOTO_GET } from '../../../api';

import { Error } from '../../Helper/Error';
import { Loading } from '../../Helper/Loading';
import { PhotoContent } from '../../subComponents/photoContent/Index'


export function FeedModal({photo, setModalPhoto}) {
  const {data, error, loading, request} = useFetch();

   React.useEffect(() => {
    const {url, options} = PHOTO_GET(photo.id);
    request(url, options)
   },[photo, request]);



  return(
    <div >

      { error && <Error error={error} /> }

      { loading && <Loading error={error} /> }

      { data && <PhotoContent data={data} setModalPhoto={setModalPhoto} /> }

    </div>

  )

}