import './Form.css'

const Form = (props) => {

  const { change, submit, errors } = props
  const { firstName, lastName, email, password, tos } = props.values

  const onChange = evt => {
    const { name, value, checked, type } = evt.target
    const typeToUse = type === 'checkbox' ? checked : value
    change(name, typeToUse)
  }

  const onSubmit = evt => {
    evt.preventDefault()
    submit()
  }

  return (
    <div className='form-container'>
      <form onSubmit={onSubmit}>
        <p>{errors.firstName}</p>
        <p>{errors.lastName}</p>
        <p>{errors.password}</p>
        <p>{errors.email}</p>
        <p>{errors.tos}</p>
        <label className='text-inputs'>First Name
          <input
            type="text"
            name="firstName"
            onChange={onChange}
            value={firstName}
          />
        </label >
        <br/>
        <label className='text-inputs'>Last Name
          <input
            type="text"
            name="lastName"
            onChange={onChange}
            value={lastName}
          />  
        </label>
        <br/>
        <label className='text-inputs'>Email
          <input
            type="email"
            name="email"
            onChange={onChange}
            value={email}
          />  
        </label>
        <br/>
        <label className='text-inputs'>Password
          <input
            type="password"
            name="password"
            value={password}
            onChange={onChange}
          />  
        </label>
        <br/>
        <label className='tos'>Terms of Service
          <input
            type="checkbox"
            name="tos"
            checked={tos}
            onChange={onChange}
          />  
        </label>
        <br/>
        <input className='submit' type='submit' value='create a new friend'/>
      </form>
    </div>
  )
}

export default Form