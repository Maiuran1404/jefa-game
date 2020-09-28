import React, { Component, Fragment } from 'react';
import axios from 'axios';
import Card from './Card';
import styled from 'styled-components';

const LogoTitle = styled.h3`
  margin-right: 85%;
  font-family: "Spartan", sans-serif;
  text-decoration: none;
  font-weight: 300;
  margin-top: 2%;
  color: white;
`

const Banner = styled.h3`
  margin-right: 85%;
  font-family: "Spartan", sans-serif;
  text-decoration: none;
  font-weight: 100;
  margin-top: 2%;
`

const Container = styled.div`
  margin-top: 5%;
  display: grid;
  grid-template-columns: repeat(4, auto);
  grid-template-rows: repeat(4, auto);
`

const Input = styled.input`
  margin-top: 0px;
  padding: 10px;
  width: 25%;
  height: 50px;
  border-radius: 40px;
  padding: 8px 10px;
  margin: 1px 0;
  box-sizing: border-box;
  border: 0.1px solid white;
  background: white;
  text-align: center;
  box-shadow: 3px 3px #F1F1F1;
`

const Button = styled.button`
  margin: 0 auto;
  margin-left: 3%;
`

const Thread = styled.th`
  font-weight: normal;
`

const HeadThread = styled.th`
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 10px;
`

const Table = styled.table`
  margin-left: 20%;
`

export class Display extends Component {

    constructor() {
        super();
        this.state = {
            members: [],
        };

        this.handleRemove = this.handleRemove.bind(this);
        this.getMembers = this.getMembers.bind(this);
    }

    componentDidMount(){
      this.getMembers();
    }
    getMembers = () => {
      axios.get('/api')
        .then((res) => {
          const data = res.data;
          this.setState({
            members: data
          })
        })
        .catch((err) => {
          console.log(err)
        })
    }

    handleRemove = (_id) => {
      axios.delete('/api/' + _id)
        .then((res) => {
          console.log('Deleted member')
        })
        .then(() => {
          this.getMembers();
        })
        .catch((err) => {
          console.log(err)
        })
    }



    render() {


      return(
        <Fragment>
                <LogoTitle> Jefa - Admin </LogoTitle>
                  
            <br/>
            <br/>

            <Table>
                  <tr>
                    <HeadThread> Email </HeadThread>
                    <HeadThread> Date </HeadThread>
                    <HeadThread> Referral Code </HeadThread>
                    <HeadThread> Referral Count </HeadThread>
                    <HeadThread> Id </HeadThread>
                    <HeadThread> Delete </HeadThread>
                  </tr>
                  
                {this.state.members.map((member) => (
              
                  <tr>
                    <Thread> {member.email} </Thread>
                    <Thread> {member.date} </Thread>
                    <Thread> {member.referralCode}</Thread>
                    <Thread> {member.referralCountTotal} </Thread>
                    <Thread> {member._id} </Thread>
                    <Thread> <button key={member._id} onClick={() => this.handleRemove(member._id)}> Delete </button></Thread>
                  </tr>
                ))}
                              
            </Table>


              
            
        </Fragment>

        );
    }
}

export default Display
