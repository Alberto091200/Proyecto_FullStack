import * as yup from 'yup'

const fields = [
  {
    name: 'name',
    label: 'Username',
  },
  {
    name: 'apellido',
    label: 'Apellido',
  },
  {
  name: 'password',
  label: 'Contraseña',
  type: 'password',
  },
  {
    name: 'email',
    label: 'Email',
  },
  {
    name: 'direccion',
    label: 'Direccion',
  }

]

const schema = yup
  .object({
    username: yup.string().required('Nombre de usuario obligatorio'),
    password: yup.string().required('Contraseña obligatoria'),
  })
  .required()

export { fields, schema }
