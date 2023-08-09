
import './App.css';
import { useState } from 'react';
import axios from 'axios';
import * as yup from 'yup'


import Schema from './validation/FormSchema';
import Form from './Components/Form';
import Friend from './Components/Friend';

const initialFormValues = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  tos: false
} 

const initialFormErrors = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  tos: ''
} 

function App() {
  const [ formValues, setFormValues ] = useState(initialFormValues)
  const [ formErrors, setFormErrors ] = useState(initialFormErrors)
  const [ users, setUsers] = useState([])


  const validate = (name, value) => {
    yup.reach(Schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: ''}))
      .catch(err => setFormErrors({...formErrors, [name]: err.errors[0]}))
  }

  const handleChange = (name, value) => {
    validate(name, value)
    setFormValues({...formValues, [name]: value})
  }

  const handleSubmit = () => {
    // WIP
    axios.post('https://reqres.in/api/users', formValues)
      .then(res => {
        setUsers([res.data, ...users])
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => setFormValues(initialFormValues))
  }



  return (
    <div className="App">
      <h1>My Form</h1>
      <Form  
        values={formValues}
        change={handleChange}
        errors={formErrors}
        submit={handleSubmit}
      />
      <div className='container'>
      {
        users.map(user => {
          return (
            <Friend user={user}/>
          )
        })
      }
      </div>
    </div>
  );
}

export default App;
