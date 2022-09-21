import React from "react";
//import "./Course.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
//import Button from 'react-bootstrap/Button';
import { Button, Card, Container, Stack } from "react-bootstrap";

const Course = (props) => {
  const { name, price, instructor, image } = props.course;
  return (
    <Container fluid>
      <Stack direction="horizontal" gap={5}>
        <Card
          style={{
            width: "18rem",
            border: "0.1rem solid orange",
            marginTop: "1rem",
            display: "grid",
          }}
        >
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Card.Title>
              Couse Title: <span className="course-name">{name}</span>
            </Card.Title>
            <Card.Text>
              <p>
                Instructor: <b>{instructor}</b>
              </p>
              <p> Price: {price} SEK</p>
            </Card.Text>
            <Button
              variant="warning"
              onClick={() => props.handleCourse(props.course)}
            >
              <FontAwesomeIcon icon={faShoppingCart} /> Enroll Now
            </Button>
          </Card.Body>
        </Card>
      </Stack>
    </Container>
  );
};

export default Course;
