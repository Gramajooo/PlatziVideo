import React, { Component } from "react";

class Stateful extends Component{
    constructor(props){
        super(props);
        this.state = {
            hello: 'polacos'
        }
    }
    render(){
        return(
            <h1>Holis {this.state.hello}</h1>
        )
    }
}

export default Stateful;