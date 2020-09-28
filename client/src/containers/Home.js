import React, { Component, Link} from 'react';
import Display from '../components/Display';
import Header from '../components/Header';
import styled from 'styled-components';

export const Button = styled.a`
  /* display: inline-block; */
  border-radius: 30px;
  padding: 0.5rem 5px;
  margin: 0.5rem 1rem;
  width: 8%;
  background: white;
  color: black;
  /* border: 1px; */
  position: relative;
  /* right: -250px; */
  float: right;
`


class Home extends Component  {

    render(){


        return(
            
            <div className="home">
                
                <div className="header">
                
                    
                    {/* <Button as={Link} href='/'> Join Waitlist </Button> */}
                    <Display />

                </div>


                
            </div>
        )
    }
}

export default Home
