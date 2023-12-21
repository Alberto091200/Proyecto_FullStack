import { Container, Divider } from '@mui/material';

function OrderPage() {
  document.documentElement.style.backgroundColor = "#1F0A4E";

  return (
    <Container 
      displayGutters
      sx={{
        backgroundColor: '#4618AC',
        display: 'flex',
        flexDirection:'column',
        justifyContent: 'center',
        alignItems:'center',
        marginTop: '150px',
        maxWidth: 'auto',
        borderRadius: '15px',
        boxShadow: '0px 10px 100px 50px #400857',
      }}
    >
      <div
        style={{
          width: 'auto',
          marginLeft: '30px',
          fontFamily: 'Montserrat, sans-serif',
          marginRight: '30px',
          marginBottom: '30px'
        }}
      >
        <h2
          style={{
            color: 'white',
            fontSize: '40px',
          }}>
          Pedidos
        </h2>

        <Divider
          orientation="horizontal"
          flexItem
          sx={{
            marginTop:'-20px',
            width:'1000px',
            borderWidth: '0.5px',
            backgroundColor: 'white',
          }}
        />

        {/* Contenedor para el primer pedido */}
        <Container 
          displayGutters
          sx={{
            backgroundColor: '#4618AC',
            display: 'flex',
            flexDirection:'column',
            justifyContent: 'center',
            alignItems:'center',
            marginTop: '30px', // Ajusta la distancia entre pedidos
            maxWidth: 'auto',
            borderRadius: '15px',
            boxShadow: '0px 5px 30px 10px #400857', // Ajusta el tamaño de la sombra
            padding: '30px',
            marginBottom: '10px', // Ajusta la distancia entre pedidos
          }}
        >
          <p>Pedido1</p>
        </Container>

        {/* Contenedor para el segundo pedido */}
        <Container 
          displayGutters
          sx={{
            backgroundColor: '#4618AC',
            display: 'flex',
            flexDirection:'column',
            justifyContent: 'center',
            alignItems:'center',
            marginTop: '30px', // Ajusta la distancia entre pedidos
            maxWidth: 'auto',
            borderRadius: '15px',
            boxShadow: '0px 5px 30px 10px #400857', // Ajusta el tamaño de la sombra
            padding: '30px',
            marginBottom: '10px', // Ajusta la distancia entre pedidos
          }}
        >
          <p>Pedido2</p>
        </Container>

      </div>
    </Container>
  );
}

export default OrderPage;
