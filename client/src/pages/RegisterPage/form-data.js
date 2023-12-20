import * as yup from 'yup'

const fields = [
  {
    name: 'name',
    label: '',
    placeholder: 'Nombre'
  },
  {
    name: 'apellido',
    label: '',
    placeholder: 'Apellido'
  },
  {
    name: 'password',
    label: '',
    type: 'password',
    placeholder: 'Contraseña'
  },
  {
    name: 'email',
    label: '',
    placeholder: 'Email'

  },  {
    name: 'direccion',
    label: '',
    placeholder:'Direccion'
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
