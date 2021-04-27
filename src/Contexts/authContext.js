import React, { Component } from "react";
import App from '../App';
const { Provider, Consumer } = React.createContext();

class AuthContextProvider extends Component {
  constructor() {
    super();
    
    this.state = {
      logged: false
    }
  }

  toggleAuth = () => {
    this.setState(prevState => {
      return {
        logged: prevState.logged === false ? true : false
      };
    });
  };

  render() {
    const dataContext = {
      logged: this.state.logged,
      toggleAuth: this.toggleAuth
    }

    return <Provider value={dataContext}>
      <App />
    </Provider>;
  }
}

export { AuthContextProvider, Consumer as AuthContextConsumer };