import React from "react";
import { shallow } from "enzyme";
import MainPage from "./MainPage";
import CardList from './CardList';

	
let wrapper;



it('renders MainPage without crashing', () => {

	const mockProps = {
		handleFetch: jest.fn(),
		robots: [],
		searchfield: "",
		isPending: false,
	}

	wrapper = shallow(<MainPage {...mockProps} />);
	expect(wrapper).toMatchSnapshot();
})



it('it filters robots correctly', () => {

	const mockProps2 = {
		handleFetch: jest.fn(),
		robots: [
			{
				id: 1,
				name: "John",
				email: "John@gmail.com",
			},
		],
		searchfield: "john",
		isPending: false,
	};

	const wrapper2 = shallow(<MainPage {...mockProps2} />);

	expect(wrapper2.instance().filterRobots()).toEqual([
		{
			id: 1,
			name: "John",
			email: "John@gmail.com"
		}
	]);

	
})




