import react from "react";
import "./App.css";
import Name from "./Name";
import Price from "./Price";
import Description from "./Description";
import Images from "./Images";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  const firstName = "";
  return (
    <div className="App">
      <Card style={{ width: "20rem" }}>
        <Images />
        <Card.Body>
          <Card.Title>
            <Name />
          </Card.Title>

          <Card.Text>
            <Description />
          </Card.Text>
          <Card.Text>
            <Price />
          </Card.Text>
          <Button variant="primary">buy</Button>
        </Card.Body>
      </Card>
      {firstName ? <h1>hello {firstName}</h1> : <h1>Hello, there!</h1>}
      <img
        src="https://cdn-icons-png.flaticon.com/512/219/219986.png"
        style={{ width: "70px", Height: "70px" }}
      />
    </div>
  );
}

export default App;
