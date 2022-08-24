import { useState } from "react";
import { Button, Container, Row, Col, Card, Alert } from "react-bootstrap";
import Form from "react-bootstrap/Form";

export default function BoostrapForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    hobbie: "",
  });

  const [viewResults, setViewResults] = useState(false);

  const [showToast, setShowToast] = useState(false);


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.firstName && formData.lastName) {
      setViewResults(true);
      setShowToast(false);
      console.table(formData);
    } else {
      setShowToast(true);
    }
  };

  const handleReset = (e) => {
    console.log("Form deleted!");
    setViewResults(false);
    setFormData({
      firstName: "",
      lastName: "",
      hobbie: "",
    });
  };

  return (
    <Container>
      <Row>
        <Col className="m-5">
          <Card>
            <Form className="m-2" >
              <Form.Group className="mb-3" controlId="formData.firstName">
                <Form.Label>First Name:</Form.Label>
                <Form.Control
                  type="text"
                  name="firstName"
                  placeholder="Enter your first name"
                  onChange={handleChange}
                  value={formData.firstName}
                  disabled={viewResults}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formData.lastName">
                <Form.Label>Last Name:</Form.Label>
                <Form.Control
                  type="text"
                  name="lastName"
                  placeholder="Enter your last name"
                  onChange={handleChange}
                  value={formData.lastName}
                  disabled={viewResults}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formData.hobbie">
                <Form.Label>Hobbie:</Form.Label>
                <Form.Control
                  type="text"
                  name="hobbie"
                  placeholder="Enter your favourite hobbie"
                  onChange={handleChange}
                  value={formData.hobbie}
                  disabled={viewResults}
                />
              </Form.Group>

              <Button
                className="m-5"
                variant="primary"
                type="reset"
                size="lg"
                onClick={handleReset}
              >
                Reset
              </Button>

              <Button
                variant="primary"
                type="submit"
                size="lg"
                onClick={handleSubmit}
              >
                Submit
              </Button>
            </Form>
          </Card>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          {viewResults && (
            <Card>
              <div className="m-3 lead">
                <Card>
                  <h2 className="bg-dark text-white text-center">Results</h2>
                </Card>
                <p>Your Name: {formData.firstName}</p>
                <p>Your Last Name: {formData.lastName}</p>
                <p>Your Hobbie: {formData.hobbie}</p>
              </div>
            </Card>
          )}
        </Col>
      </Row>
      <footer>
        {showToast && (
          <Alert
            variant="warning"
            onClose={() => setShowToast(false)}
            dismissible
          >
          You must complete the form
          </Alert>
        )}
      </footer>
    </Container>
  );
}
