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








export default class CardsRow1 extends Component {
    render() {
        return (
         
    
          <Styles>
        <CardDeck className="cardDeck">
  <Card>
  <MDBContainer className="text-center">
      <MDBIframe src='https://my.matterport.com/show/?m=WMDJGMLtsa2&brand=0' />
    </MDBContainer>
    {/* <MDBContainer className="text-center">
      <MDBIframe src='https://www.youtube.com/embed/bVtooZHm8FU' />
    </MDBContainer> */}
    <Card.Body>
      <Card.Title><a href='https://thedutchflathotel.com/' target="_blank">Dutch Flat Hotel</a></Card.Title>
      <Card.Text>
      Um dos hoteis mais antigos da California - EUA. Desde 1852
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted"></small>
    </Card.Footer>
  </Card>
  <Card>
  <MDBContainer className="text-center">
      <MDBIframe src='https://my.matterport.com/show/?m=MwSJpTXtdSg&brand=0' />
    </MDBContainer>
    {/* <MDBContainer className="text-center">
      <MDBIframe src='https://my.matterport.com/show/?m=nvigrEgwRHz&brand=0' />
    </MDBContainer> */}
    <Card.Body>
      <Card.Title>Sua Imobiliária aqui</Card.Title>
      <Card.Text>
      Divulgue seu business neste espaço
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted"></small>
    </Card.Footer>
  </Card>
  <Card>
  <MDBContainer className="text-center">
      <MDBIframe src='https://my.matterport.com/show/?m=1eZ63ihud36&brand=0' />
    </MDBContainer>
    {/* <MDBContainer className="text-center">
      <MDBIframe src='https://my.matterport.com/show/?m=mRe8kYkJx7z' />
    </MDBContainer> */}
    <Card.Body>
      <Card.Title>Memórias Virtuais</Card.Title>
      <Card.Text>
        Eternize momentos especiais e visite sua memorias.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted"></small>
    </Card.Footer>
  </Card>
</CardDeck>
</Styles>    
        
                
                
           
               )
            }
        }