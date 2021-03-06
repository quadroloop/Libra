import React from 'react';
import { Navbar, Nav, InputGroup, Form, FormControl } from 'react-bootstrap';
import { Route, withRouter } from 'react-router-dom'
import Feed from './Feed';
import Location from './Location'
import {sclass, el, isMounted} from './vanilla';
import { Link } from 'react-router-dom'
import libra_logo from '../assets/libra-logo.svg';


function Home(props) {
  const { match } = props

  const nav = (link) =>{
      sclass('active')[0].classList.remove('active')
      sclass(link)[0].classList.add('active')
      el(link).click();
  }

  // all-in-one search function;

  const search = () => {
    // search feeds fage
    let query = el('search-bar').value.split(" ").join("").toLowerCase();
    if(sclass('feed-item').length > 0){
      let feedItems = sclass('feed-item')
      let liveFeeds = sclass('new-feed-card');

      for(var i=0; i< feedItems.length; i++){
         if(feedItems[i].innerText.replace(/(\r\n|\n|\r)/gm,"").replace(/\s+/g, '').toLowerCase().includes(query)){
           feedItems[i].style = "display:flex;flex-direction: row";
           feedItems[i].classList.add('match');
         }else{
          feedItems[i].style.display = "none";
          feedItems[i].classList.remove('match');
         }
        }

         for(var x=0; x< liveFeeds.length; x++){
          if(liveFeeds[x].innerText.replace(/(\r\n|\n|\r)/gm,"").replace(/\s+/g, '').toLowerCase().includes(query)){
            liveFeeds[x].style = "display:block";
            liveFeeds[x].classList.add('nmatch');
          }else{
           liveFeeds[x].style.display = "none";
           liveFeeds[x].classList.remove('nmatch');
          }
        }


    }else{
       let relatedHazards = sclass('hazard-item');

       for(var s=0; s< relatedHazards.length; s++){
          if(relatedHazards[s].innerText.replace(/(\r\n|\n|\r)/gm,"").replace(/\s+/g, '').toLowerCase().includes(query)){
            relatedHazards[s].style = "display:block";
            relatedHazards[s].classList.add('match');
          }else{
          relatedHazards[s].style.display = "none";
          relatedHazards[s].classList.remove('match');
          }
       }
    }

    // handle no results
    if(isMounted('no-results')){
      if(sclass('match').length === 0){
        if(sclass('nmatch').length === 0 || isMounted('r-hazard')){
           el('no-results').innerHTML = `No results found for: '${el('search-bar').value}'`;
        }else{
           el('no-results').innerHTML = `<i class="fa fa-arrow-left mr-2"></i>
           <span class="text-primary">${sclass('nmatch').length}</span>
           results found in latest feed.`;
        }
        el('no-results').style.display = "block";
      }else{
       el('no-results').style.display = "none";
      }
     }
  }


  return (
    <div className="app-container">
      <Navbar bg="light" expand="lg" className="fixed-top navbar-libra">
        <Navbar.Brand href="/">
          <img src={libra_logo} className="logo" alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <InputGroup>
              <FormControl
                placeholder="Search"
                aria-label="Username"
                aria-describedby="search-btn"
                id="search-bar"
                onKeyUp={()=>{search()}}
              />
              <InputGroup.Prepend>
                <InputGroup.Text id="search-btn"><i class="fa fa-search"></i></InputGroup.Text>
              </InputGroup.Prepend>
            </InputGroup>
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
              <a id="about" href="https://github.com/quadroloop/Libra" className="d-none" />


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

