import * as yup from 'yup'

const fields = [
  {
    name: 'email',
    label: 'Email',
  },
  {
    name: 'password',
    label: 'Contraseña',
    type: 'password',
  },
]

const schema = yup
  .object({
    email: yup.string().required('Email obligatorio'),
    password: yup.string().required('Contraseña obligatoria'),
  })
  .required()

export { fields, schema }
