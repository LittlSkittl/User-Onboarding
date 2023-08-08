import * as yup from 'yup'

const Schema = yup.object().shape({
  firstName: yup
    .string()
    .required('Must enter a first name')
    .min(2, 'Name must be greater than 2 characters'),
  lastName: yup
    .string()
    .required('Must enter a last name'),
  email: yup
    .string()
    .email('Must be a valid email')
    .required('You must enter a email'),
  password: yup
    .string()
    .required("You must enter a password")
    .min(8, "Your password must be at least 8 characters ling"),
  tos: yup   
    .boolean()
    .oneOf([true], 'You must agree to the terms of service')
})

export default Schema