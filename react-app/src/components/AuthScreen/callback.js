import React, { Component } from 'react'
import { withRouter } from "react-router-dom";

import { handleAuthentication } from "../../services/auth"

class Callback extends Component {
  componentDidMount() {
    handleAuthentication(()=>this.props.history.push("/chats"))
  }
  
  render() {
    return (
      <p>Loading... </p>
    )
  }
}

export default withRouter(Callback);