// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function App() {
  return (
    <div>
      <h1 > saif lahyani </h1>
      <div className='saif' style={{display:"flex", justifyContent:"space-around"}}>
    <Card style={{ width: '18rem' }}> 
    <Card.Img variant="top" src="logo192.png" />
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>
  <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="logo192.png"/>
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>
  <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="logo192.png" />
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>
  </div>
  </div>
  


 
  );
}

export default App;
