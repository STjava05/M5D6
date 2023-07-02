import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from 'react-redux';


import { ListGroup } from 'react-bootstrap';
import { openModal } from './reducers/api';





export default function ModalCommenti({ index }) {
  const dispatch = useDispatch();
  const commenti = useSelector((state) => state.api.reviewArray);


  const handleModal = (index) => {
    dispatch(openModal(index));
  };

  

  return (
    <div className="modal show" style={{ display: 'block', position: 'initial' }}>
      <Modal.Dialog>
        <Modal.Header closeButton onClick={()=>handleModal(index)}>
          <Modal.Title>Commenti</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {commenti&&commenti.map((commento) => (
            <ListGroup key={commento._id} className="d-flex justify-content-center align-items-center">
              <div>
                <p>{commento.comment}</p>
                <p>{commento.rate}</p>
                <p>{commento.author}</p>
              </div>
            </ListGroup>
          ))}
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={()=>handleModal(index)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}
