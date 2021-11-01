import React from "react";
import Card from "./Card";

import { IRobot } from "./MainPage";

interface IProp {
  robots: Array<IRobot>;
}

const CardList = ({ robots }: IProp) => {
  return (
    <div>
      {robots.map((robot, i) => (
        <Card key={i} name={robot.name} email={robot.email} id={robot.id} />
      ))}
    </div>
  );
};

export default CardList;
