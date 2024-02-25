import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NaveBare from "./components/NaveBare";
import Name from "./components/Name";
import Image from "./components/Image";
import Price from "./components/Price";
import Description from "./components/Description";
import products from "./products";
import { Card, Button } from "react-bootstrap";

const firstName = "oumaima";

function App() {
  return (
    <div className="App">
      <NaveBare />
      <img
        src="https://tpc.googlesyndication.com/simgad/1191562754906364125"
        alt="jumia-image"
        className="img2"
      />
      <div className="div1">
        <h3>Nos Meilleures Offres</h3>
      </div>
      <div className="horizontal-cards">
        {products.map((product, index) => (
          <Card key={index} style={{ width: "18rem" }}>
            <Image image={product.image} />
            <Card.Body>
              <Name name={product.name} />
              <Price price={product.price} />
              <Description description={product.description} />
            </Card.Body>
          </Card>
        ))}
      </div>
      <div>
        <p>Hello, {firstName ? firstName : "there"}!</p>
        {/* {firstName && (
          // <img
          //   src="https://i.etsystatic.com/23244419/r/il/256acb/5460344806/il_300x300.5460344806_3962.jpg"
          //   alt="Your Image"
          // />
        )} */}
      </div>
    </div>
  );
}

export default App;
