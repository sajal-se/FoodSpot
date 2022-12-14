import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Col, Row, Form, Button, Modal } from "react-bootstrap";
import "./FoodList.css";

const AddNewFood = (props) => {
  const strMealRef = useRef("");
  const strCategoryRef = useRef("");
  const strMealThumbRef = useRef("");
  const strIngredientRef = useRef("");
  const navigate = useNavigate();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const submitHandler = (e) => {
    e.preventDefault();

    const food = {
      strMeal: strMealRef.current.value,
      strCategory: strCategoryRef.current.value,
      strMealThumb: strMealThumbRef.current.value,
      strIngredient: strIngredientRef.current.value,
    };

    props.onAddNewFood(food);

    strMealRef.current.value = "";
    strCategoryRef.current.value = "";
    strMealThumbRef.current.value = "";
    strIngredientRef.current.value = "";
    navigate("/new-food");
  };

  return (
    <main>
      <Button variant="primary" onClick={handleShow} className="add-modal-btn">
        Add New Recipe
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Add your new recipe</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
          {}
          <Form onSubmit={submitHandler}>
            <Form.Group className="mb-3" controlId="formGridName">
              <Form.Label>Recipe name: </Form.Label>
              <Form.Control
                type="text"
                ref={strMealRef}
                placeholder="Enter food title"
                required
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGridCategory">
              <Form.Label>Recipe category: </Form.Label>
              <Form.Control
                type="text"
                ref={strCategoryRef}
                placeholder="Enter food category"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridThumb">
              <Form.Label>Meal photo: </Form.Label>
              <Form.Control type="file" ref={strMealThumbRef} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGridIngredient">
              <Form.Label>Recipe ingredients: </Form.Label>
              <Form.Control
                as="textarea"
                rows={5}
                ref={strIngredientRef}
                placeholder="Enter food ingredients"
                required
              />
            </Form.Group>

            <hr />
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      {/* <div className="add-recipe d-flex justify-content-center">
        <Form onSubmit={submitHandler}>
          <Row>
            <Col sm={12} lg={12}>
              <Form.Group className="mb-3" controlId="formGridName">
                <Form.Label>Recipe name: </Form.Label>
                <Form.Control
                  type="text"
                  ref={strMealRef}
                  placeholder="Enter food title"
                  required
                />
              </Form.Group>
            </Col>
            <Col sm={12} lg={12}>
              <Form.Group className="mb-3" controlId="formGridCategory">
                <Form.Label>Recipe category: </Form.Label>
                <Form.Control
                  type="text"
                  ref={strCategoryRef}
                  placeholder="Enter food category"
                  required
                />
              </Form.Group>
            </Col>
            <Col sm={12} lg={12}>
              <Form.Group className="mb-3" controlId="formGridThumb">
                <Form.Label>Meal photo: </Form.Label>
                <Form.Control type="file" ref={strMealThumbRef} />
              </Form.Group>
            </Col>
          </Row>
          <Form.Group className="mb-3" controlId="formGridIngredient">
                <Form.Label>Recipe ingredients: </Form.Label>
            <Form.Control
              as="textarea"
              rows={5}
              ref={strIngredientRef}
              placeholder="Enter food ingredients"
              required
            />
          </Form.Group>
          <Button type="submit" className="submit-btn">
            Submit
          </Button>
        </Form>
      </div> */}
    </main>
  );
};

export default AddNewFood;
