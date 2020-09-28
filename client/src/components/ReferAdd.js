import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import cogoToast from 'cogo-toast';
import Modal from 'react-modal';
import Recaptcha from 'react-google-invisible-recaptcha';

export const Button = styled.button`
  /* display: inline-block; */
  border-radius: 3px;
  padding: 0.5rem 5px;
  margin: 0.5rem 1rem;
  width: fit-content;
  background: #2d3142;
  color: black;
  border: 1px solid black;
  position: relative;
  /* right: -250px; */
  float: left;
`


const Form = styled.form`
  padding: 10px;
  float:  center;
`

const FormTitle = styled.h2`
  padding: 10px;
  padding-left: 28%; 
  font-weight: 500;
  margin: 0 auto;
`

const Container = styled.div`
  margin: 0 auto;
`

const Input = styled.input`
  /* width: 100%; */
  border-radius: 5px;
  padding: 8px 10px;
  margin: 8px 0px;
  width: 40%;
  margin-left: 26%;
  /* box-sizing: border-box; */
  &:focus{
    background-color: white;
  }
`


const Submit = styled.button`
  font-weight: 200;
  font-size: 18px;
  border-radius: 15px;
  padding: 0.5rem 5px;
  margin: 0.5rem 1rem;
  width: fit-content;
  background: white;
  color: black;
  /* border: 1px solid black; */
  position: relative;
`

const modalStyle = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};


export class ReferAdd extends Component {

    constructor(props){  
        super(props);  

        this.state = {  
            email: '',
            rank: '',
            firstname: '',
            lastname: '',
            referralCode: '',
            referralSource: '',
            referrerReferralCode: '',
            referrerEmail: '',
            referralCountTotal: 0,
            postCountTotal: 0,
            shareURL: '',
            twitterShareURL: '',
            facebookShareURL: '',
            whatsappShareURL: '',
            modalIsOpen: false,
            messageSent: false
          }

    
        // this.handleSubmit = this.handleSubmit.bind(this);
        // this.generateReferral = this.generateReferral.bind(this);
      }  

      componentDidMount(){
        this.generateReferral();
      }

    
      handleChange = ({ target }) => {
        const { name, value } = target; 
        this.setState({
          [name]: value
        })
      }

      setOpen = (param) => {
        this.setState({
            modalIsOpen: param
        })
      }

      generateReferral(){
        let random =  Math.random().toString(36).substr(2, 7);
        let shareurl = 'https://jefa.herokuapp.com/refer/' + random;
        // let code = this.props.match.params.code;
        this.setState({
          referralCode: random,
          // referrerReferralCode: code,
          shareURL: shareurl
        });
      }

      sendMessage = () => {
        this.recaptcha.execute();
      }
  
    onResolved = () => {
        this.setState({messageSent: true})
        // Process Data //
        console.log(this.state);
      }
    
      handleSubmit = (e) => {
        
        
        e.preventDefault();

        // this.generateReferral();

        console.log('Here boii' + this.state.referrerReferralCode);
        
        
        axios.put('/api/add/' + this.props.match.params.code);

        let re = /^[ ]*([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})[ ]*$/i;

        if (re.test(this.state.email)){
          const payload = {
            email: this.state.email,
            rank: this.state.rank,
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            referralCode: this.state.referralCode,
            referralSource: this.state.referralSource,
            referrerReferralCode: this.state.referrerReferralCode,
            referrerEmail: this.state.referrerEmail,
            referralCountTotal: this.state.referralCountTotal,
            postCountTotal: this.state.postCountTotal,
            shareURL: this.state.shareURL,
            twitterShareURL: this.state.twitterShareURL,
            facebookShareURL: this.state.facebookShareURL,
            whatsappShareURL: this.state.whatsappShareURL,
          };
      
          axios({
            url: '/api/add',
            method: 'POST',
            data: payload
          }) 
          .then(() => {
            console.log('Data has been sent')
            this.reset();
          })
          .catch((err) => {
            console.log(err)
          })
          cogoToast.success("Success!");
          this.setOpen(true);
        } else {
          cogoToast.error("Error!");
          this.setOpen(false);
        }
      }
    
      reset = () => {
        this.setState({
          email: '',
        })
      }
    
    

    render() {
        return(
            <Container>
              
              

              <Form onSubmit={this.handleSubmit}>
              <FormTitle> Refered member - Waitlist </FormTitle>
            
              <br/>

              

                  <Input 
                    type="text"
                    name="email"
                    placeholder="email "
                    value={this.state.email}
                    onChange={this.handleChange}/>

                  
                  
                <Submit onClick={this.sendMessage}>Submit</Submit>
                <Recaptcha
                    ref={ ref => this.recaptcha = ref }
                    sitekey="6LccVtEZAAAAANBW-lRvMR3yTCkPbLrIKLztcAR1"
                    onResolved={ this.onResolved }
                />

              </Form>

              <Modal isOpen={this.state.modalIsOpen} onRequestClose={() => this.setOpen(false)} style={modalStyle}>
                <h2> Advance your position on the waiting list by inviting friends. </h2>
                <body> Earn $ 1 for each friend you invite. </body>
                <body> People in front of you </body>
                <h2> 3123 </h2>
                <a href={this.state.shareURL}>Share your referral: {this.state.shareURL}!</a>
                <button onClick={() => this.setOpen(false)}> Close </button>
              </Modal>

            </Container>
          );
    }
}

export default ReferAdd;
