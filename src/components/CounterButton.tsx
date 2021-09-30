import React, { Component } from 'react';



interface Mystate{
    count: number
}

interface IProps{
    color: string
}
class CounterButton extends Component<IProps, Mystate> {

    state: Mystate = {
        count: 0
    }

    constructor(props: IProps) {
        super(props);

        this.state = {
            count: 0
        }
    }



    shouldComponentUpdate(nextProps: IProps, nextState: Mystate) {

        if (this.state.count !== nextState.count) {
            return true;
        } else {
            return false;
        } 
    
    }


    render() {
        return (
            <button
                className="ma3"
                id='counter'
                color={this.props.color}
                onClick={() => this.setState(state =>  ({ count: this.state.count + 1 }))}>
                Count: {this.state.count}
            </button>
        );
    }
}


export default CounterButton;