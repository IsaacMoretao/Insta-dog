
import './Stylle.scss';

export function Button({ children, ...props }){
  return(
    <>

      <button {...props} className='GlobalsButton'>
        {children}
      </button>
     
    </>
  )
}