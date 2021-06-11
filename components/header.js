import React, { useState } from 'react'
import styles from '../styles/Header.module.css';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import CustomAnimationText from '../components/customanimationtext'

function Header() {
  const [show, setShow] = useState(false);
  let url = '';
  let type = 'RSS Feed';
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleURLChange = (e) => { url = e.target.value }
  const handleTypeChange = (e) => { type = e.target.value }

  const handleSave = async () => {
    if (type === 'RSS Feed') {
      fetch('/api/feed', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url }),
      })
      handleClose();
    } else if (type === 'Link') {
      fetch('/api/link', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url }),
      })
      handleClose();
    } else if (type === 'PDF') {
      fetch('/api/pdf', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url }),
      })
      handleClose();
    } else if (type === 'Youtube') {
      fetch('/api/youtube', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url }),
      })
      handleClose();
    }
  }

  return (
    <div className={styles.header}>
      <div className="d-flex justify-content-between">
        <CustomAnimationText text='README'/>
        <div>
          <button className={styles.plusButton} onClick={handleShow}>
            <i className={`bi-plus fs-3 ${styles.navIcon}`}></i>
          </button>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header>
              <Modal.Title>Add new</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form.Group>
                <Form.Control size="sm" as="select" onChange={handleTypeChange}>
                  <option>RSS Feed</option>
                  <option>Link</option>
                  <option>PDF</option>
                  <option>Youtube</option>
                </Form.Control>
              </Form.Group>

              <Form.Group controlId="formBasicEmail" size="sm">
                <Form.Control type="text" onChange={handleURLChange} placeholder="Enter URL" />
              </Form.Group>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
          </Button>
              <Button variant="primary" onClick={handleSave}>
                Save
          </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default Header;
