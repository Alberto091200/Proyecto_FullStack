import { Container, Divider, useTheme, useMediaQuery } from '@mui/material';
import OrderCard from 'src/components/OrderCard/OrderCard';

function OrderPage() {
  document.documentElement.style.backgroundColor = "#1F0A4E";
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Container 
      displayGutters
      sx={{
        backgroundColor: '#4618AC',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '150px',
        width: '100%',
        borderRadius: '15px',
        boxShadow: '0px 10px 100px 50px #400857',
        padding: isMobile ? '10px' : '20px',
      }}
    >
      <div
        style={{
          width: '100%', // Hace que el contenido interno ocupe todo el ancho disponible
          marginLeft: '30px',
          fontFamily: 'Montserrat, sans-serif',
          marginRight: '30px',
          marginBottom: '10px',
        }}
      >
        <h2
          style={{
            marginTop:'-5px',
            color: 'white',
            fontSize: isMobile ? '25px' : '30px',
            textAlign: 'center',
          }}
        >
          Pedidos
        </h2>

        <Divider
          orientation="horizontal"
          flexItem
          sx={{
            marginTop: '-10px',
            width: '100%',
            borderWidth: '0.5px',
            backgroundColor: 'white',
            marginBottom:'30px'
          }}
        />

          <OrderCard/>


      </div>
    </Container>
  )
}

export default OrderPage
