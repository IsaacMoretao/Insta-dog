import './Stylle.scss';
import React from 'react';

export function Image({alt, ...props}) {
  const [skeleton, setSkeleton] = React.useState(true)

  function handleLoad({ target }){
    setSkeleton(false);
    target.style.opacity = 1;

  }

  return(
    <div className='wrapper'>
       {skeleton && <div
       className='skeleton'
       style={{opacity: `${skeleton}`}}></div>}
      <img onLoad={handleLoad} className='Image' alt="" {...props}/>
    </div>

  )

}
