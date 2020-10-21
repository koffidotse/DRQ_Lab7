import React from 'react';
import { Content } from './components/content';
import { Footer } from './components/footer';
import { Header } from './components/header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Create } from './components/create';
import { Read } from './components/read';


export class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/read">Read</Nav.Link>
              <Nav.Link href="/create">Create</Nav.Link>
            </Nav>
          </Navbar>
          <Route path='/' component={Content} exact />
          <Route path='/create' component={Create} exact />
          <Route path='/read' component={Read} exact />
        </div>
      </Router>
    );

  }
}

export default App;
