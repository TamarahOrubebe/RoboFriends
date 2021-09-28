import React from "react";
import { shallow } from "enzyme";
import SearchBox from "./SearchBox";

it("renders a SearchBox component", () => {
	const mockRobots = [
		{
			id: 1,
			username: "Tamarah",
			name: "Paul Orubebe",
			email: "paulorubebe@gmail.com",
		},
	];

	expect(shallow(<SearchBox />)).toMatchSnapshot();
});
