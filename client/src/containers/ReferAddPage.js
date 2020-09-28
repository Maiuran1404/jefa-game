import React, { Component, Link} from 'react';
import Add from '../components/Add';
import Display from '../components/Display';
import ReferAdd from '../components/ReferAdd';
import Base_Card from '../assets/Base_Card.png';
import Base_Card_2 from '../assets/Base_Card_2.png';
import logo from '../assets/logo.png';
import styled from 'styled-components';

export const Button = styled.a`
    /* display: inline-block; */
    border-radius: 20px;
    background-color: white;
    color: black;
    padding: 1rem 5px;
    margin: 1rem 1rem;
    width: fit-content;
    /* background: #2d3142;
    color: white; */
    /* border: 1px solid black; */
    position: relative;
    /* right: -250px; */
    float: left;
`
const Wrapper = styled.div`
    margin: 0;
    padding: 0;
    background-color: #F1A587;
    height: 100vh;
    font-family: 'Futura';
`

const Container = styled.div`
    background-color: #2e3758;
    color: white;
    width: 40%;
    margin: 0 auto;
    box-sizing: border-box;
    height: 100%;
    /* border: 30px solid #111d4a; */
    padding: 10px;
    border-radius: 50px;
    height: fit-content;
    
`

const Header = styled.div`
    /* background-color: white; */
    width: 0%;
    margin: auto;
    color: #2E3757;
    margin-top: 0;
    padding: 0;
    
`

const Img = styled.img`
    margin: 0 auto;
    /* margin-left: 30%; */
    width: 35%;
`

const Images = styled.div`
    margin: 0 auto;
    margin-left: 25%;
`

const Title = styled.h1`
    font-size: 60px;
    font-weight: 100;
    color: white;
    margin-left: 15%;
`

const LogoImg = styled.img`
    margin: 0;
    padding: 0;
    width: 40px;
    height: 30px;
    float: left;
`

const HeadTitle = styled.h2`
    margin: 0;
    padding: 0;
`




export class AddPage extends Component {

    render() {
        return(
            <Wrapper>

                    <Header>
                    <LogoImg src={logo}/> 
                        <HeadTitle> jefa </HeadTitle>
                        
                    </Header>

                    

                    <Images>
                    <Title> El banco digital  </Title>
                    <Title> &nbsp; para mujeres  </Title>
                    
                        <Img src={Base_Card} />
                        <Img src={Base_Card_2} />
                    </Images>


            
                    <br/>


                    <Container>
                        {/* <Button as={Link} href='/admin'> Admin </Button> */}
                        <ReferAdd {...this.props}/>
                    </Container>
            

            </Wrapper>

            // <Wrapper>
                
            //         <Container>
            //             <Button as={Link} href='/admin'> Admin </Button>
            //             <ReferAdd {...this.props}/>
                        
            //         </Container>
            

            // </Wrapper>
        )
}}

export default AddPage
