import React from "react";



const types: any = {

  email: {
    regex:  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,

    message: 'Preencha um E-mail valido'
  }

}

export function useForm (type: string | boolean | any) {
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState<any>(null);

  function validate(value: string) {

    if(type === false) return true;

    if(value.length === 0) {
     setError("Preencha um valor.");
      return false;

    } else if (types[type] && types[type].regex.test(value)){
      setError(types[type].message);
      return false;
    } else {
      setError(null)
      return true
    }

  }

  function onChange({ target }:any ) {
    setValue(target.value);
  }

  return {
    value, 
    setValue,
    onChange,
    error,
    validate: () => validate(value),
    onBlur: () => validate(value)
  };

};
export default useForm