import React, { Component } from "react";
import "../containers/App.css";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import Scroll from "./Scroll";
import ErrorBoundary from "./ErrorBoundary";
import CounterButton from "./CounterButton";



class MainPage extends Component {


    componentDidMount() {
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
                <CounterButton />
                <SearchBox onSearch={handleSearch} />
                <Scroll id="scroll">

                    {isPending? <h1>Loading</h1> : <ErrorBoundary>
                        <CardList robots={this.filterRobots()} />
                    </ErrorBoundary> }
                    
                </Scroll>
            </div>
        );
    }
}
export default MainPage;
