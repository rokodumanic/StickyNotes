import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function Example({open, close, newNote}) {
  const [show, setShow] = useState(false);
  const [noteTitle, setNoteTitle] = useState("");
  const [noteContents, setNoteContents] = useState("");

  const handleClose = () => {
    setShow(false)
    close();
    };

  const handleContent = (e) => {
    setNoteContents(e.target.value)
    console.log(noteContents);
  }

  const handleSubmit = (e) => {
    if(noteTitle!=="" || noteContents!==""){
      saveNote();
    }
    handleClose();
  }

  const handleTitle = (e) => {
    setNoteTitle(e.target.value)
    console.log(noteTitle);
  }

  const saveNote=()=>{
    newNote({title:noteTitle, content:noteContents});
    console.log("submitted");
  }

  useEffect (() => {
    if(open){setShow(true)}
    }, [open]);

    
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add a new StickyNote</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>StickyNote Title</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Title"
                    onChange={handleTitle}
                    value={noteTitle}
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>StickyNote contents</Form.Label>
                  <Form.Control as="textarea"
                   rows={3}
                    onChange={handleContent}
                    value={noteContents}/>
                </Form.Group>
            </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example;


/* import React, { Component } from "react";

function PopUp({toggle}){
    
return(
<div class="modal fade" id="myModal" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
    );
}

export default PopUp; */