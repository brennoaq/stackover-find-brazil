import React, { Component } from 'react';
import axios from 'axios';
// import { Container } from './styles';



export default class Users extends Component {
    state = {
        users: []
      };
      handleButtonPress = async event => {
        
        const response = await axios.get("Aqui vai a rota do firebase ", this.state);
        console.log(response)
        // if (response.status === 200) {
        //     this.setState({
                
        //     });
        //   }
      };

  render() {
    return <div >
        <button onClick={this.handleButtonPress}>Log-in</button>
        <span>
            {this.state.users}
        </span>
    </div>;
  }
}
