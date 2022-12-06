import './index.css';
import './App.css';
import {Container, Row, Col} from 'react-bootstrap';
import Footer from './Components/Footer';
import Header from './Components/Header';
import CardImagen from './Components/Cards';

function App() {
  return (
    <div className='body'>
      <Header titulo="Galería de Imágenes con React"></Header>
      <hr className="linea" />
      <Container className="text-center">
        <Row>
          <Col>
            <CardImagen img="https://i.ibb.co/GRJdqrr/1.jpg" title="LIGHT DI GIOIA 100ML EDP" text="ARMANI">

            </CardImagen>
          </Col>
          <Col>
            <CardImagen img="https://i.ibb.co/FzZ2C75/2.jpg" title="BLUE SEDUCTION HOMBRE EDT 100ML" text="ANTONIO BANDERAS">
            </CardImagen>
          </Col>
          <Col>
            <CardImagen img="https://i.ibb.co/Jk2mPRJ/3.jpg" title="THE SECRET TEMPTATION EDT 100ML" text="ANTONIO BANDERAS">
            </CardImagen>
          </Col>
        </Row>
      </Container>
      <div className='footer'>
        <hr className="linea" />
        <Footer pies="Todos los derechos reservados"></Footer>
      </div>
    </div>

  );
}

export default App;
