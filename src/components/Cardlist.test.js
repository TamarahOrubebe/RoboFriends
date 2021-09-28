import React from "react";
import { shallow } from "enzyme";
import CardList from "./CardList";


it("renders a CardList component", () => {

    const mockRobots = [
        {
            id: 1,
            username: 'Tamarah',
            name: 'Paul Orubebe',
            email: 'paulorubebe@gmail.com'
        }
    ]

    expect(shallow(<CardList robots={mockRobots} />)).toMatchSnapshot();
});
