import React from 'react';
import { Navbar, Nav, InputGroup, Form, FormControl } from 'react-bootstrap';
import { Route, withRouter } from 'react-router-dom'
import Feed from './Feed';
import Location from './Location'
import {sclass, el} from './vanilla';
import { Link } from 'react-router-dom'


function Home(props) {
  const { match } = props

  const nav = (link) =>{
      sclass('active')[0].classList.remove('active')
      sclass(link)[0].classList.add('active')
      el(link).click();
  }

  return (
    <div className="app-container">
      <Navbar bg="light" expand="lg" className="fixed-top navbar-libra">
        <Navbar.Brand href="#home">
          <img src="https://upload.wikimedia.org/wikipedia/commons/4/4b/Libra_logo.svg" className="logo" alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Form inline>
            <InputGroup>
              <FormControl
                placeholder="Search"
                aria-label="Username"
                aria-describedby="search-btn"
                id="search-bar"
              />
              <InputGroup.Prepend>
                <InputGroup.Text id="search-btn"><i class="fa fa-search"></i></InputGroup.Text>
              </InputGroup.Prepend>
            </InputGroup>
          </Form>
          <Nav className="ml-auto mr-5">

                <Nav.Link className="active home" onClick={()=>{
                  nav('home')
                }}>
                   Home
                </Nav.Link>

              <Nav.Link onClick={()=>{nav('about')}} className="about">
                 About
              </Nav.Link>

              <Link id="home" to="/" className="d-none" />
              <Link id="about" to="/about" className="d-none" />


            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown> */}

          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Route exact path="/" component={Feed} />
      <Route path="/location/:location" component={Location} />
    </div>
  );
}

export default withRouter(Home);

