import React, { useState } from "react";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";

const AddProducts = () => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredShortDesc, setEnteredShortDesc] = useState("");
  const [enteredDescription, setEnteredDescription] = useState("");
  const [enteredCategory, setEnteredCategory] = useState("");
  const [enteredPrice, setEnteredPrice] = useState("");
  const [enteredProductImg, setEnteredProductImg] = useState(null);

  const AddProduct = async (e) => {
    e.preventDefault();

    const product = {
      title: enteredTitle,
      shortDesc: enteredShortDesc,
      description: enteredDescription,
      category: enteredCategory,
      price: enteredPrice,
      imgUrl: enteredProductImg,
    };

    console.log(product);
  };

  return (
    <section>
      <Container>
        <Row>
          <Col lg="12">
            <h4 className="mb-5">Add Product</h4>
            <Form onSubmit={AddProduct}>
              <FormGroup className="form__group">
                <span>Product Title</span>
                <input
                  type="text"
                  placeholder="Double sofa"
                  value={enteredTitle}
                  onChange={(e) => setEnteredTitle(e.target.value)}
                  required
                />
              </FormGroup>
              <FormGroup className="form__group">
                <span>Short Description</span>
                <input
                  type="text"
                  placeholder="lorem...."
                  value={enteredShortDesc}
                  onChange={(e) => setEnteredShortDesc(e.target.value)}
                  required
                />
              </FormGroup>
              <FormGroup className="form__group">
                <span>Description</span>
                <input
                  type="text"
                  placeholder="Description...."
                  value={enteredDescription}
                  onChange={(e) => setEnteredDescription(e.target.value)}
                  required
                />
              </FormGroup>

              <div className="d-flex align-items-center justify-content-between gap-5">
                <FormGroup className="form__group w-50">
                  <span>Price</span>
                  <input
                    type="number"
                    placeholder="$100"
                    value={enteredPrice}
                    onChange={(e) => setEnteredPrice(e.target.value)}
                  />
                </FormGroup>
                <FormGroup className="form__group w-50">
                  <span>Category</span>
                  <select
                    className="w-100 p-2"
                    value={enteredCategory}
                    onChange={(e) => setEnteredCategory(e.target.value)}
                    required
                  >
                    <option value="chair">Chair</option>
                    <option value="sofa">Sofa</option>
                    <option value="mobile">Mobile</option>
                    <option value="watch">Watch</option>
                    <option value="wireless">Wireless</option>
                  </select>
                </FormGroup>
              </div>

              <div>
                <FormGroup className="form__group">
                  <span>Product Image</span>
                  <input
                    type="file"
                    onChange={(e) => setEnteredProductImg(e.target.files[0])}
                    required
                  />
                </FormGroup>
              </div>

              <button className="buy__btn" type="submit">
                Add Product
              </button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AddProducts;
