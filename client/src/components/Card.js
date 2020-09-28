import React, { Component, Link } from 'react';
import { motion } from "framer-motion";
import '../App.scss';
import styled from 'styled-components';

export const Button = styled.a`
  /* display: inline-block; */
  border-radius: 3px;
  padding: 0.5rem 5px;
  margin: 0.5rem 1rem;
  width: fit-content;
  background: pink;
  color: black;
  border: 1px solid black;
  position: relative;
  /* right: -250px; */
  float: right;
`

const Clickable = styled.div`
  &:hover{
    cursor: pointer;
  }
`

const OfferTitle = styled.h2`
  text-align: center;
`

const Price = styled.h4`
  color: #111d4a;
`

// Our custom easing
let easing = [0.6, -0.05, 0.01, 0.99];

// animate: defines animation
// initial: defines initial state of animation or stating point.
// exit: defines animation when component exits

// Custom variant
const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
    transition: { duration: 0.6, ease: easing }
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing
    }
  }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};


class Card extends Component {


  


    render(){

        return (
            <Clickable className="cardList">
              {
              this.props.instrument && this.props.address &&
          
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              backgroundColor="#fff000"
              className='card'
              onClick={(e) => {e.preventDefault(); window.location.href=`/${this.props.id}`;}}
              >

                            <div className="Card-body">
                        <div className="heading">
                        <span className="company">{this.props.instrument} </span>
                        <div className="labels">
                            {/* {props.new ? <span className="label new">new! </span> : null}
                            {featured ? <span className="label">featured </span> : null} */}
                        </div>
                        </div>
                        <OfferTitle>{this.props.address}</OfferTitle>
                        <Price>€{this.props.price} EUR/ hour</Price>
                            <div className="footer">
                                <li>{this.props.owner}</li>
                                {/* <li>{this.props.number}</li> */}
                                {/* <li>{this.props.email}</li> */}
                            </div>
                            {/* <button as={Link} href={this.props.id}> Book </button> */}
                            {console.log('ID' + this.props.id)}
                        </div>
                        <div className="Card-footer">
                            
                        </div>
            </motion.div>
            }
            </Clickable>
          
        );
    }
}

export default Card;