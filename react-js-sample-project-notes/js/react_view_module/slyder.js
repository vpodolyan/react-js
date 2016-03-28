import React from 'react';

export default  class Slyder extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            isVisibleData: false
        }

        this.changeVisible = this.changeVisible.bind(this);

    }


    changeVisible (event) {
        event.preventDefault();

        this.setState({
            isVisibleData: !this.state.isVisibleData
        });
    }

    render () {

        const isVisibleData = this.state.isVisibleData,
              data = this.props.data;

        const buttonText =   isVisibleData ?  "hide" : "read more";

        return (
            <div className = "Slyder" >
                <p className =  {"slyder-data " + (isVisibleData ? "" : "display-none")}>{data}</p>
                <a href = ""
                   className = "slyder-button"
                   onClick = {this.changeVisible} >
                   {buttonText}
                </a>   
            </div>
        );
    }
}

Slyder.propTypes =  {
    data : React.PropTypes.string.isRequired
}; 
