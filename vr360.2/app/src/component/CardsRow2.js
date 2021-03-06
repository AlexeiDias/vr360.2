import React, { Component } from 'react'
import { Card, CardDeck, } from 'react-bootstrap'
import { MDBContainer, MDBIframe } from "mdbreact";
import styled from 'styled-components'

const Styles = styled.div`
    .cardDeck {
        margin-top:30px;
        }
        .imageText {
        font-size: 50px;
        text-align: center;
        padding-top: 0px;
    }
   
`;





export default class CardsRow2 extends Component {
    render() {
        return (
          <Styles>
          <CardDeck className="cardDeck">
    <Card>
    <MDBContainer className="text-center">
        <MDBIframe src='https://my.matterport.com/show/?m=LgdXpU1keku' />
      </MDBContainer>
      <Card.Body>
        <Card.Title>Turismo virtual</Card.Title>
        <Card.Text>
          Conheça lugares maravilhosos como se estivesse lá.
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted"></small>
      </Card.Footer>
    </Card>
    {/* <Card>
    <MDBContainer className="text-center">
        <MDBIframe src='https://my.matterport.com/show/?m=tFTySRT43ym&brand=0' />
      </MDBContainer>
      <Card.Body>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
          This card has supporting text below as a natural lead-in to additional
          content.{' '}
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">Last updated 3 mins ago</small>
      </Card.Footer>
    </Card> */}
    {/* <Card>
    <MDBContainer className="text-center">
        <MDBIframe src='https://my.matterport.com/show/?m=HPwSn5mzJ2F' />
      </MDBContainer>
      <Card.Body>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
          This is a wider card with supporting text below as a natural lead-in to
          additional content. This card has even longer content than the first to
          show that equal height action.
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">Last updated 3 mins ago</small>
      </Card.Footer>
    </Card> */}
  </CardDeck>
  </Styles>             
                  
                  
             
                 )
              }
          }