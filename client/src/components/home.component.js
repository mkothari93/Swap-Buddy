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
    <Card.Title>Book</Card.Title>
    <Card.Text>
     Harry Potter Series 
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
    <Card.Title>Funiture</Card.Title>
    <Card.Text>
Wooden Porch Swing
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>Fair Condition</ListGroupItem>
    <ListGroupItem>New York</ListGroupItem>
  </ListGroup>
</Card>
</div>

{/* card 3 */}
    <div className="col-sm-12 col-md-6 col-lg-4 m-3" id="card">
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
  <Card.Body>
    <Card.Title>Toys</Card.Title>
    <Card.Text>
      Girls Bike
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
    <Card.Title>Video Game</Card.Title>
    <Card.Text>
     Mario Cart Game for The Switch
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>New Condition</ListGroupItem>
    <ListGroupItem>Hayesville, North Carolina</ListGroupItem>
  </ListGroup>
</Card>
</div>
{/* card 5 */}
<div className="col-sm-12 col-md-6 col-lg-4 m-3" id="card">
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
  <Card.Body>
    <Card.Title>Baby</Card.Title>
    <Card.Text>
      6 Month Girl Baby Clothes
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>Fair Condition</ListGroupItem>
    <ListGroupItem>Asheville, North Carolina</ListGroupItem>
  </ListGroup>
</Card>
</div>
{/* card 6 */}
<div className="col-sm-12 col-md-6 col-lg-4 m-3" id="card">
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
  <Card.Body>
    <Card.Title>Toys</Card.Title>
    <Card.Text>
   Apples to Apples Card Games
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>Hardly Used</ListGroupItem>
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
   Grey Sectional Couch
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>Good Condition</ListGroupItem>
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
    Christmas Wreath
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>New Condition </ListGroupItem>
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