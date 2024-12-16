import "./App.css";
import Description from "./components/Description";
import ImageProduct from "./components/ImageProduct";
import Name from "./components/Name";
import NavBare from "./components/NavBare";
import { Card, Button } from "react-bootstrap";
import Price from "./components/Price";
import hello from './download.png'

function App() {
  let firstName = ""
  return (
    <div className="App">
      <h1>CheckPoint1 ReactJS</h1>
      <NavBare />
      {/* <h3>{`Hello ${firstName}`}</h3> */}
      <h3>{firstName ? `Hello ${firstName}` : "Hello there!!!"} </h3>
      <Card style={{ width: "30rem" }}>
        <ImageProduct />
        <Card.Body>
          <Name />
          <Card.Text>
            <Description />
            <Price />
          </Card.Text>
          <Button variant="primary">Add to cart</Button>
        </Card.Body>
      </Card>
      {/* DisplayImg */}
      {/* display from public */}
      {/* <img src="free-photo-of-animal-de-compagnie-chat-mentir-bailler.jpeg" alt="cat" /> */}
      {/* display from src */}
      {/* { firstName? <img src={hello} alt="hello" />: null} */}
      {firstName && <img src={hello} alt="hello" />}
    </div>
  );
}

export default App;
