import React, { Component } from 'react'
import '../App.css'

var Recaptcha = require('react-recaptcha');


export default class LandingPage extends Component {
  render() {
    return (
      <div style={main}>
        
        <div style={box}>
            <a>Email</a>
            <input placeHolder="example@test.lol" style={input}/>  

            <a>Username</a>
            <input placeHolder="superman" style={input}/>

            <a>Password</a>
            <input placeHolder="try 'password'" type="password" style={input}/>

            <a>Password (again)</a>
            <input placeHolder="just kidding.. don't" type="password" style={input}/>

            <button style={button}>
                sign-up
            </button>

            <a href="" style={{fontSize: 15,}}>I have an account</a>

            <div style={separator}/>
            <div style={terms} flexDirection="row">
                <input type="checkbox"/> I definately reviewed the <a href="" style={{color: 'blue'}}>Terms and Conditions</a>
            </div>
            
            <Recaptcha
                sitekey={sitekey}
                render="explicit"
                verifyCallback={()=> alert('Gucci')}
            />
        </div>
      </div>
    );
  }
}
const sitekey = "6LcuMkMUAAAAAEhOnaMbF_y7CCHPFG501Y2z7KrM"

const separator = {
    height: 0.5,
    width: '60%',
    backgroundColor: 'black',
    opacity: 0.2,
    // boxShadow: '0px 0px 3px black',
    
}

const terms = {
    fontSize: 10,
}

const main = {
    display: 'flex',
    flexDirection: 'column',
    justiFyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
}


const box = {
    width: 300,
    height: 510,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    border: '1px solid rgba(0,0,0,0)',
    boxShadow: '0px 1px 10px grey',
    padding: 10,
    borderRadius: 5,
    fontFamily: 'georgia',
    backgroundColor: 'white'

}

const input = {
    width: '80%',
    borderRadius: 3,
    height: 25,
    fontSize: 15,
    padding: 5,
}
 
const button = {
    height: 30,
    width: '80%',
    borderRadius: 5,
    fontSize: 15,
    // boxShadow: '0px 0px 10px black',
    

}