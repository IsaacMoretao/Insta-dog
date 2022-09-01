import './Stylle.scss';
import { FeedModal } from "../subComponents/FeedModal/Index";
import { FeedPhotos } from "../subComponents/FeedPhotos/Index";

export function Feed(){

  return(

    <div className='Feed Container'>
      <FeedModal/>
      <FeedPhotos/>
    </div>

  )

}