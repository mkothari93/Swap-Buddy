import React from "react";
import PostList from "../components/PostList";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Nav,
  Navbar,
  NavDropdown,
  Card,
  ListGroup,
  ListGroupItem,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import Auth from "../utils/auth";
import { useQuery } from "@apollo/client";
import { QUERY_POSTS, QUERY_ME_BASIC } from "../utils/queries";

const Home = () => {
  // use useQuery hook to make query request
  const { loading, data } = useQuery(QUERY_POSTS);

  const posts = data?.getAllPosts || [];
  console.log(posts);

  const loggedIn = Auth.loggedIn();

  if (loggedIn) {
    return (
      <div className="container">
        <div className="row justify-content-center">
          {loading ? (
            <div style={{ color: "white" }}>Loading...</div>
          ) : (
            <PostList posts={posts} />
          )}
        </div>
      </div>
    );
  } else
    return (
      <main>
        <h1 style={{ color: "white" }} className="text-center mt-5">Got stuff?? Trade it!</h1>
        <h3 style={{ color: "white" }} className="text-center m-4">Swap Buddy is here to help you trade your items with other users in your area.</h3>
        <h4 style={{ color: "white" }} className="text-center mb-3">Start swapping today by logging in..</h4>
        <div className="d-flex flex-wrap justify-content-around m-3">
          <div className="col-xs-12 col-sm-8 col-md-5 col-lg-3 m-3">
            <Card id="card">
              {/* <Card.Img variant="top" src="holder.js/100px180?text=Image cap" /> */}
              <Card.Body>
                <Card.Title>Canon EOS 5D Mark IV Camera</Card.Title>
                <Card.Text>
                  The camera is in mint condition. Only body is for trade.
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>
                  Posted on March 2, 2022 at 10:00am
                </ListGroupItem>
                <ListGroupItem>Chicago, IL</ListGroupItem>
              </ListGroup>
            </Card>
          </div>
          <div className="col-xs-12 col-sm-8 col-md-5 col-lg-3 m-3">
            <Card id="card">
              {/* <Card.Img variant="top" src="holder.js/100px180?text=Image cap" /> */}
              <Card.Body>
                <Card.Title>PlayStation 4</Card.Title>
                <Card.Text>
                  Always sounds like a plane taking off but it works fine.
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>
                  Posted on January 2, 2022 at 10:00am
                </ListGroupItem>
                <ListGroupItem>Tampa, FL</ListGroupItem>
              </ListGroup>
            </Card>
          </div>
          <div className="col-xs-12 col-sm-8 col-md-5 col-lg-3 m-3">
            <Card id="card">
              {/* <Card.Img variant="top" src="holder.js/100px180?text=Image cap" /> */}
              <Card.Body>
                <Card.Title>Firefly Lane by Kristin Hannah</Card.Title>
                <Card.Text>
                  Great read, looking to trade for another book.
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>
                  Posted on Feburary 7, 2022 at 10:00am
                </ListGroupItem>
                <ListGroupItem>Austin, TX</ListGroupItem>
              </ListGroup>
            </Card>
          </div>
          <div className="col-xs-12 col-sm-8 col-md-5 col-lg-3 m-3">
            <Card id="card">
              {/* <Card.Img variant="top" src="holder.js/100px180?text=Image cap" /> */}
              <Card.Body>
                <Card.Title>Unconcious Putting by Dave Stockton</Card.Title>
                <Card.Text>
                  Hopefully this book will save you some frustration on the course.
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>
                  Posted on March 2, 2022 at 6:31pm
                </ListGroupItem>
                <ListGroupItem>Monerey, CA</ListGroupItem>
              </ListGroup>
            </Card>
          </div>
          <div className="col-xs-12 col-sm-8 col-md-5 col-lg-3 m-3">
            <Card id="card">
              {/* <Card.Img variant="top" src="holder.js/100px180?text=Image cap" /> */}
              <Card.Body>
                <Card.Title>Airpods</Card.Title>
                <Card.Text>
                  Hopefully you can clean the earpiece
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>
                  Posted on Feburary 8, 2022 at 7:00am
                </ListGroupItem>
                <ListGroupItem>Boise, ID</ListGroupItem>
              </ListGroup>
            </Card>
          </div>
          <div className="col-xs-12 col-sm-8 col-md-5 col-lg-3 m-3">
            <Card id="card">
              {/* <Card.Img variant="top" src="holder.js/100px180?text=Image cap" /> */}
              <Card.Body>
                <Card.Title>BookSearch Engine App</Card.Title>
                <Card.Text>
                  Please make this work, I'll pay you.
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>
                  Posted on March 1, 2022 at 8:00am
                </ListGroupItem>
                <ListGroupItem>Bloomingdale, IL</ListGroupItem>
              </ListGroup>
            </Card>
          </div>
          <div className="col-xs-12 col-sm-8 col-md-5 col-lg-3 m-3">
            <Card id="card">
              {/* <Card.Img variant="top" src="holder.js/100px180?text=Image cap" /> */}
              <Card.Body>
                <Card.Title>Occulus Quest 2</Card.Title>
                <Card.Text>
                  I keep getting motion sickness and my walls have holes in it. Please trade me.
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>
                  Posted on January 18, 2022 at 10:00am
                </ListGroupItem>
                <ListGroupItem>Tallahasee, FL</ListGroupItem>
              </ListGroup>
            </Card>
          </div>
          <div className="col-xs-12 col-sm-8 col-md-5 col-lg-3 m-3">
            <Card id="card">
              {/* <Card.Img variant="top" src="holder.js/100px180?text=Image cap" /> */}
              <Card.Body>
                <Card.Title>Kitchen Towels</Card.Title>
                <Card.Text>
                  Tired of this style. I would like to trade for something in season.
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>
                  Posted on January 2, 2022 at 10:00am
                </ListGroupItem>
                <ListGroupItem>San Francisco, CA</ListGroupItem>
              </ListGroup>
            </Card>
          </div>
          <div className="col-xs-12 col-sm-8 col-md-5 col-lg-3 m-3">
            <Card id="card">
              {/* <Card.Img variant="top" src="holder.js/100px180?text=Image cap" /> */}
              <Card.Body>
                <Card.Title>Mechanical Keyboard</Card.Title>
                <Card.Text>
                  I thought I liked how loud it is but now it is just annoying. 
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>
                  Posted on March 2, 2022 at 5:00pm
                </ListGroupItem>
                <ListGroupItem>Savannah, GA</ListGroupItem>
              </ListGroup>
            </Card>
          </div>
        </div>
      </main>
    );
};

export default Home;
