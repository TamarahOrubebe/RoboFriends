import React, { Component } from "react";
import "../containers/App.css";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import Scroll from "./Scroll";
import ErrorBoundary from "./ErrorBoundary";
import CounterButton from "./CounterButton";

export interface IRobot{
    name: string,
    id: number,
    email: string
}

interface IProps{
    robots: Array<IRobot>,
    searchfield: string,
    handleFetch: VoidFunction,
    handleSearch: VoidFunction,
    isPending: boolean
}


interface IState{

}


class MainPage extends Component<IProps, IState> {

   
    componentDidMount(): void {
        this.props.handleFetch();
    }

  

    filterRobots = () => {
        return this.props.robots.filter((robot) => {
            return robot.name.toLowerCase().includes(this.props.searchfield.toLowerCase());
        });
    }
    

    render() {

      const {handleSearch, isPending } = this.props;

       
				

        return (
            <div className="tc">
                <h1 className="light-green f1">ROBOTIC FRIENDS</h1>
                <CounterButton color="red" />
                <SearchBox onSearch={handleSearch} />
                <Scroll>

                    {isPending? <h1>Loading</h1> : <ErrorBoundary>
                        <CardList robots={this.filterRobots()} />
                    </ErrorBoundary> }
                    
                </Scroll>
            </div>
        );
    }
}
export default MainPage;
