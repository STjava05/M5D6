import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import dropLink from './dropLink';
import Dropdown from 'react-bootstrap/Dropdown';
import { useDispatch } from 'react-redux';
import { setCategory, setSearch } from './reducers/api';
import { useRef, useEffect, useState } from 'react';



function NavBar() {
  const dispatch = useDispatch();
  const inputRef = useRef(null);
  const [theme, setTheme] = useState('light-mode');

  const cambiaTema = () => {
    if (theme === 'light-mode') {
      setTheme('dark-mode');
    } else {
      setTheme('light-mode');
    }
  }
  useEffect(() => {
    document.body.className = theme;
    
    
  
  }, [theme]);


  const handleSelect = (e) => {
    dispatch(setCategory(e));

  }
  const handleSearch = () => {
    dispatch(setSearch(inputRef.current.value));

  }
  return (
    <Navbar expand="lg" className="bg-body-tertiary mb-5 w-100">
      <Container fluid>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Browser</Nav.Link>
            <NavDropdown onSelect={(event) => handleSelect(event)} title="Link" id="navbarScrollingDropdown">
              {dropLink.map((item, index) => (
                <Dropdown.Item key={index} eventKey={item.evento}>
                  {item.nome}</Dropdown.Item>
              ))
              }
              <NavDropdown.Divider />
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control type="search" placeholder="Search"
              className="me-2" aria-label="Search" ref={inputRef} onChange={handleSearch} />
            <Button onClick={cambiaTema}>tema</Button>
            {/* <i onClick={cambiaTema} class="bi bi-brightness-low-fill"></i> */}
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;