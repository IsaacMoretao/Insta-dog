import './Stylle.scss';

export function Input( {type, name, value, onChange, error, onBlur }){
  return(
    <div className='bodyInput'>

      <label htmlFor={name}>{name}</label>

      <input
        id={name}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}

      />
      {error && <p>{error}</p>}

    </div>

  )
}