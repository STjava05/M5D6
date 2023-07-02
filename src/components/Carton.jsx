
import { Button, Card, Col, Row } from 'react-bootstrap';

import { useDispatch, useSelector } from 'react-redux';
import ModalCommenti from './modalCommenti';
import { fetchCommenti, openModal, setSelected } from './reducers/api';



export default function Carton() {
  const dispatch = useDispatch();
  const apiArray = useSelector(state => state.api.apiArray);
 
  const handleOpenModal = (index) => {
   dispatch(openModal(index))
    dispatch(fetchCommenti(apiArray[index].asin))
  }

  const handleClick = (index) => {
    dispatch(setSelected(index))
  }

  return (
    <div>
      <Row>
        {apiArray && apiArray.map((carte, index) => (
          <Col key={index} className={carte.selected ? "select" : ""}>
            <Card style={{ width: '18rem' }}className='carte'>
              <Card.Img variant="top" src={carte.img} onClick={()=>handleClick(index)} />
              <Card.Body>
                <Card.Title>{carte.title}</Card.Title>
                <Card.Text>{carte.category}</Card.Text>
                <Card.Text>{carte.price}</Card.Text>
                <Button variant="secondary" onClick={()=> handleOpenModal(index)}>commenti</Button>
              </Card.Body>
              {carte.modal && <ModalCommenti index={index}  />}
            </Card>
          </Col>
        ))}
      </Row>

    </div>
  );
}
