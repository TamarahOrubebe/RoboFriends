import React, { Component } from 'react';
import './App.css';
import { connect } from "react-redux";
import { changeSearchField, getRobots } from '../actions';
import MainPage from '../components/MainPage';



const mapStateToProps = (state) => {
	return {
    searchfield: state.searchRobots.searchfield,
    robots: state.fetchRobots.robots,
    error: state.fetchRobots.error,
    isPending: state.fetchRobots.isPending,

	};
};

const mapDispatchToProps = (dispatch) => {
	return {
    handleSearch: (event) => dispatch(changeSearchField(event.target.value)),
    handleFetch: () => dispatch(getRobots())
	};
};


class App extends Component {

  render() {
    return <MainPage {...this.props} />;
  }
  
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
