import { Container, useTheme } from '@mui/material'

function OrderCard() {
  const theme = useTheme()
  const isMobile = theme.breakpoints.down('sm')

  return (
    <Container
      displayGutters
      sx={{
        backgroundColor: '#4618AC',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: isMobile ? '10px' : '20px',
        width: '100%',
        borderRadius: '15px',
        boxShadow: '0px 0px 5px 5px #400857',
        padding: isMobile ? '5px' : '15px',
        marginBottom: '10px',
        color:'white',
      }}
    >
      <p>21/12/23</p>
      <p>Total=40€</p>
      <p>PDF</p>
    </Container>
  )
}

export default OrderCard