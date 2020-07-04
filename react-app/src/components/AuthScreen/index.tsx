import * as React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { Route } from 'react-router-dom'
import styled from 'styled-components'
import AnimatedSwitch from '../AnimatedSwitch'
import SignInForm from './SignInForm'

// import SignUpForm from './SignUpForm'

const Style = styled.div`
  background: radial-gradient(#3b5998, rgb(17, 48, 50));
  background-size: cover;
  background-blend-mode: multiply;
  color: white;

  .AuthScreen-intro {
    height: 265px;
  }

  .AuthScreen-icon {
    width: 125px;
    height: auto;
    margin-left: auto;
    margin-right: auto;
    padding-top: 70px;
    display: block;
  }

  .AuthScreen-title {
    width: 100%;
    text-align: center;
    color: white;
  }

  .AuthScreen-text-field {
    width: 100%;
    position: relative;
  }

  .AuthScreen-text-field > div::before {
    border-color: white !important;
  }

  .AuthScreen-error {
    position: absolute;
    color: red;
    font-size: 15px;
    margin-top: 20px;
  }

  .AuthScreen-alternative {
    position: absolute;
    bottom: 10px;
    left: 10px;

    a {
      color: var(--secondary-bg);
    }
  }

  .Screen {
    height: calc(100% - 265px);
  }

  form {
    padding: 20px;

    > div {
      padding-bottom: 35px;
    }
  }

  legend {
    font-weight: bold;
    color: white;
  }

  label {
    color: white !important;
  }

  input {
    color: white;

    &::placeholder {
      color: var(--primary-bg);
    }
  }

  button {
    width: 100px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    background-color: #fafafa !important;

    &[disabled] {
      color: #1877F2;
    }

    &:not([disabled]) {
      color: black;
    }
  }
`

export default ({ history, location }: RouteComponentProps) => (
  <Style className="AuthScreen Screen">
    <div className="AuthScreen-intro">
      <img src="https://download.logo.wine/logo/Facebook_Messenger/Facebook_Messenger-Logo.wine.png" className="AuthScreen-icon" />
      <h2 className="AuthScreen-title">Messenger Clone</h2>
    </div>
    <AnimatedSwitch>
      <Route exact path="/sign-in" component={SignInForm} />
      {/* <Route exact path="/sign-up" component={SignUpForm} /> */}
    </AnimatedSwitch>
  </Style>
)
