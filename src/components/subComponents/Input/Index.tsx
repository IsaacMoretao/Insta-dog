import './Stylle.scss';

import { useForm } from './../../../Hooks/useForm';
import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from 'react';

type InputType = {
  label: string,
  type: string,
  name: string,
  value: any,
  

}

export function Input(props: InputType, { onChange, error, onBlur }:any){
  return(
    <div className='bodyInput'>

      <label htmlFor={props.name}>{props.name}</label>

      <input
        id={props.name}
        type={props.type}
        value={props.value}
        onChange={onChange}
        onBlur={onBlur}

      />
      {error && <p>{error}</p>}

    </div>

  )
}