import React from 'react';
import Navi from './Navi';
import CategoryList from './CategoryList';
import ProductList from './ProductList';
import { Col, Container, Row } from "reactstrap";

function App() {

  // let CategoryList = "Category List"
  // let ProductList = "Product List"

  //Actually these are objects.
  let productInfo = { title: "Product List" }
  let categoryInfo = { title: "Category List" }

  return (
    // for react project, must be only one main container tag
    <div>

      <Container>

        <Row>
          <Navi />
        </Row>

        <Row>
          <Col xs="3">
            {/*title is not required word, can use any word for this operation.*/}
            <CategoryList info={categoryInfo} />
          </Col>

          <Col xs="9">
            <ProductList info={productInfo} />
          </Col>

        </Row>

      </Container>

    </div>
  );
}

export default App;
