import { Button, Stack } from '@mui/material'

import { useForm } from 'react-hook-form'

import { yupResolver } from '@hookform/resolvers/yup'
import { useEffect } from 'react'

import * as fields from './input-fields'

function Form({
  inputs,
  validationSchema,
  onSubmit,
  errorsFromResponse = [],
  submitLabel,
  defaultValues,
}) {
  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validationSchema), defaultValues })

  useEffect(() => {
    if (!Array.isArray(errorsFromResponse)) return

    errorsFromResponse.forEach(({ field, msg }) => {
      setError(field, { type: 'response', message: msg }, { shouldFocus: true })
    })
  }, [errorsFromResponse])

  return (
    <Stack
      component="form"
      onSubmit={handleSubmit(data => onSubmit(data, { setError, reset }))}
      spacing={2}
      display={'flex'}
      alignItems={'center'}
  
    >
      {inputs.map(({ name, type, ...rest }) => {
        const Input = fields[type] || fields.input

        const { ref, ...registerProps } = register(name)

        return (
          <Input
            key={name}
            type={type}
            errors={errors[name]}
            inputRef={ref}
            {...registerProps}
            {...rest}
            sx={{
              width:'90%',
              '& input': {
                  color: 'white',
              },
              "& fieldset": { 
                  border: 'none',
                  fontSize: '50px'
              },
              backgroundColor: '#360f8c',
              borderRadius: '5px',
              outline: 'none',
              '&:hover': {
                  backgroundColor: '#2a0875',
                  border: 0,
                  boxShadow: "inset 0 0 0 2px white"
              }
          }}

          />
        )
      })}

      <Button type="submit"
        sx={{
          backgroundColor: 'yellow',
          color: 'black',
          width: '50%',
          margin: 'auto',
          marginTop: '5%',
          borderRadius: '1px',
          fontFamily: 'Montserrat, sans-serif',
          fontSize: '17px',
          fontWeight: '800',
          display: 'flex',
          
          '&:hover': {
              backgroundColor: '#e3bf14',
          },
      }}
      >{submitLabel}</Button>
    </Stack>
  )
}

export default Form
