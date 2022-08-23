import './Stylle.scss';





export function Input( {label, type, name, value, onChange, error, onBlur }){
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