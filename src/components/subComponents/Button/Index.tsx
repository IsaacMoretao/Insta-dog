
import './Stylle.scss'

export function Button(  { children, ...props }:any){
  return(
    <>

      <button {...props} className='GlobalsButton'>
        {children}
      </button>
     
    </>
  )
}