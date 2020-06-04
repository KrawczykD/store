import React from 'react';
import { css } from "@emotion/core";
import PacmanLoader from "react-spinners/PacmanLoader";
import './Spiner.css'

const override = css`
  display: block;
  margin: 50vh auto;
  border-color: red;
`;

class AwesomeComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        loading: true,
      };
    }

    componentWillReceiveProps(props) {
        this.setState({loading: props.spinnerState})
      }
   
    render() {
      return (
        <div className="sweet-loading">
          <PacmanLoader
            css={override}
            size={30}
            color={"#000000"}
            loading={this.state.loading}
          />
        </div>
      );
    }
  }


export default AwesomeComponent;