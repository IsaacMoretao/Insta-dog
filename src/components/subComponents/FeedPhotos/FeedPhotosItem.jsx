import './Stylle.scss';

const FeedPhotosItem = ({ photo }) => {
  return (
    <li className='FeedPhotosItem'>
      <img src={photo.src} alt={photo.title} />
      <span>{photo.acessos}</span>
    </li>
  );
};

export default FeedPhotosItem;
