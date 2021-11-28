import React from "react";
import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import ReactStars from "react-stars";

function Add({ handleAdd }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [posterURL, setPosterURL] = useState("");
  const [rating, setRating] = useState(0);
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        add
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder=""
            onChange={(e) => setTitle(e.target.value)}
          />
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            placeholder=""
            onChange={(e) => setDescription(e.target.value)}
          />
          <Form.Label>poster</Form.Label>
          <Form.Control
            type="text"
            placeholder=""
            onChange={(e) => setPosterURL(e.target.value)}
          />
          <Form.Label>Rating</Form.Label>
          <br />
          <ReactStars
            count={5}
            onChange={(e) => setRating(e)}
            size={24}
            color2={"#ffd700"}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              handleAdd({ title, description, posterURL, rating });
              handleClose();
            }}
          >
            {" "}
            {/* movie */}
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Add;
