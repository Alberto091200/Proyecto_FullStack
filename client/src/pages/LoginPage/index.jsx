import { Container, Stack, Typography } from '@mui/material'
import { Form } from 'components'
import { fields, schema } from './form-data'
import { useState } from 'react'
import { login } from 'services/auth-service'
import { toast } from 'react-toastify'
import { useAuth } from 'hooks'
import { useNavigate } from 'react-router-dom'

function LoginPage() {
  document.documentElement.style.backgroundColor = "#1F0A4E";


  const navigate = useNavigate()
  const [, dispatch] = useAuth()
  const [errorsFromResponse, setErrorsFromResponse] = useState([])

  const onSubmit = user => {
    login(user)
      .then(decodedJWT => {
        const { username, isAdmin } = decodedJWT

        const type = isAdmin ? 'admin' : 'login'

        dispatch({ type, username })
        navigate('/', {})
      })
      .catch(err => {
        const { data, status } = err.response

        if (Array.isArray(data) && status === 400) {
          setErrorsFromResponse(err.response.data)
        } else {
          toast.error(data.message)
        }
      })
  }

  return (
     
    <Container
      displayGutters
      sx={{
          backgroundColor: '#4618AC',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          marginTop: '200px',
          width: '600px',
          height: '400px',
          borderRadius: '15px',
          boxShadow:'0px 10px 100px 50px #400857'
      }}
    >
    
      <Stack spacing={3}>
        <Typography
          variant="h5"
          component="h1"
          sx={{
            color: "white",
            fontFamily: 'Barlow, sans-serif',
            textAlign:'center',
            marginTop:'1%',
            marginBottom:'2%',
            fontSize:'30px',
            fontWeight: '500',
          }}
        >
          Entrar{' '}
        </Typography>

        <Form
          inputs={fields}
          onSubmit={onSubmit}
          validationSchema={schema}
          errorsFromResponse={errorsFromResponse}
          submitLabel="Entrar"
        />
      </Stack>
    </Container>
  )
}

export default LoginPage
