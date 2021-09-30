import React, { Component } from 'react';


interface IProps{

}

interface MyState{
    hasError: boolean
}



class ErrorBoundary extends Component<IProps, MyState> {


    state: MyState = {
        hasError: false
    }

    
    constructor(props: IProps) {
        super(props);

        this.state = {
            hasError: false
        }
        
    }



    componentDidCatch(error: object, info: object) {

        this.setState({ hasError: true });
    }

    render() {

        if (this.state.hasError) {
            return <h1>Oooooops, that's bad</h1>
        } else {
            return this.props.children;
        }
          
    }
}


export default ErrorBoundary;