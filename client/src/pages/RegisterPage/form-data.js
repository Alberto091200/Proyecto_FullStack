import * as yup from 'yup'

const fields = [
  {
    name: 'name',
    label: 'Nombre',
  },
  {
    name: 'apellido',
    label: 'Apellido'
  },
  {
    name: 'password',
    label: 'Contraseña',
    type: 'password',
  },
  {
    name: 'email',
    label: 'Email'
  },  {
    name: 'direccion',
    label: 'Direccion',
  }
]

const schema = yup
  .object({
    name: yup.string().required('Nombre de usuario obligatorio'),
    apellido: yup.string(),
    password: yup.string().required('Contraseña obligatoria'),
    email: yup.string().required('Email obligatorio'),
    direccion: yup.string().required('Direccion obligatoria'),
  })
  .required()

export { fields, schema }
