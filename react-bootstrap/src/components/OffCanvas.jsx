import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

function Canvas({shows,setShows}) {


  const handleClose = () => setShows(false);
  const handleShow = () => setShows(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Canvas
      </Button>

      <Offcanvas show={shows} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Canvas;