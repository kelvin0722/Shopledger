import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LoginForm from './components/LoginForm';


class App extends Component {
 
  constructor(props){
    super(props);
    this.state={
      users: []
    };

    this.url = 'http://localhost:3001/users';
    this.request = new Request(this.url,
    { 
      method: 'get',
      mode: 'cors',
      header: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "http://localhost:3000",
                "Access-Control-Allow-Credentials": "true",
                "Access-Control-Allow-Headers": "Content-Type, Authorization, x-id,Content-Length, X-Requested-With",
                "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS"
              }
    }
    );
    
      
  }
  componentDidMount(){
    fetch(this.request)
    .then(res=>res.json())
    .then(fetched_users=>{
      this.setState({
        users:this.state.users.concat(JSON.stringify(fetched_users))
      });
  }
    )   
    }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to ShopLedger</h2>
        </div> 
        <div className="ui raised segment" >
        <LoginForm/>
        </div>
        <div>
         <h1>Users</h1>
         {this.state.users.map(
           
         )}
          
        </div>
        
      </div>
    );
  }
}

export default App;
