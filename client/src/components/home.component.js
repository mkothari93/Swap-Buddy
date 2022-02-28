import React, { Component } from "react";
import "../Home.css";
import { Nav, Navbar, NavDropdown, Card, ListGroup, ListGroupItem } from "react-bootstrap";
export default class Home extends Component {
  render() {
    return (
       <main> 
    <div className="container"> 
    <div className="row">
    <div className="col-sm-12 col-md-6 col-lg-4 m-3" id="card">
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
  <Card.Body>
    <Card.Title>book</Card.Title>
    <Card.Text>
     Harry Potter series 
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>New Condition</ListGroupItem>
    <ListGroupItem>New York,New York</ListGroupItem>
  </ListGroup>
</Card>
</div>
{/* card 2 */}
<div className="col-sm-12 col-md-6 col-lg-4 m-3" id="card">
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
  <Card.Body>
    <Card.Title>funiture</Card.Title>
    <Card.Text>
Wooden Porch swing
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>fair condition</ListGroupItem>
    <ListGroupItem>New York</ListGroupItem>
  </ListGroup>
</Card>
</div>

{/* card 3 */}
    <div className="col-sm-12 col-md-6 col-lg-4 m-3" id="card">
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
  <Card.Body>
    <Card.Title>toys</Card.Title>
    <Card.Text>
      Girls bike
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>Never Used</ListGroupItem>
    <ListGroupItem>California</ListGroupItem>
  </ListGroup>
</Card>
</div>
{/* card 4 */}
<div className="col-sm-12 col-md-6 col-lg-4 m-3" id="card">
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
  <Card.Body>
    <Card.Title>Video game</Card.Title>
    <Card.Text>
     Mario Cart game for the Switch
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>New condition</ListGroupItem>
    <ListGroupItem>Hayesville, North Carolina</ListGroupItem>
  </ListGroup>
</Card>
</div>
{/* card 5 */}
<div className="col-sm-12 col-md-6 col-lg-4 m-3" id="card">
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
  <Card.Body>
    <Card.Title>baby</Card.Title>
    <Card.Text>
      6 month girl baby clothes
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>fair condition</ListGroupItem>
    <ListGroupItem>Asheville, North Carolina</ListGroupItem>
  </ListGroup>
</Card>
</div>
{/* card 6 */}
<div className="col-sm-12 col-md-6 col-lg-4 m-3" id="card">
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
  <Card.Body>
    <Card.Title>toys</Card.Title>
    <Card.Text>
   Apples to Apples card games
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>Hardly used</ListGroupItem>
    <ListGroupItem>Charlotte, North Carolina</ListGroupItem>
  </ListGroup>
</Card>
</div>

{/* card 7 */}
    <div className="col-sm-12 col-md-6 col-lg-4 m-3" id="card">
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
  <Card.Body>
    <Card.Title>Funiture</Card.Title>
    <Card.Text>
   Grey sectional couch
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>good condition</ListGroupItem>
    <ListGroupItem>Atlanta,Georgia</ListGroupItem>
  </ListGroup>
</Card>
</div>
{/* card 8 */}
<div className="col-sm-12 col-md-6 col-lg-4 m-3" id="card">
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
  <Card.Body>
    <Card.Title>Home Decor</Card.Title>
    <Card.Text>
    Christmas wreath
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>new condition </ListGroupItem>
    <ListGroupItem>Haven, Georgia</ListGroupItem>
  </ListGroup>
</Card>
</div>
</div>
</div>
</main> 
    );
  
}
}