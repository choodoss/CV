import React, { useState } from "react";
import OneBlock from "../Block/Block";

const Figure = ({ figure }) => {

    const [position, setPosition] = useState({ x: 0, y: 0 });

    // const moveLeft = () => {
    //     setPosition((prevPosition) => ({ ...prevPosition, x: prevPosition.x - 1 }));
    // };

    // const moveRight = () => {
    //     setPosition((prevPosition) => ({ ...prevPosition, x: prevPosition.x + 1 }));
    // };

    // const moveDown = () => {
    //     setPosition((prevPosition) => ({ ...prevPosition, y: prevPosition.y + 1 }));
    // };

    const renderFigure = () => {
        return figure.map((row, rowIndex) =>
            row.map((block, colIndex) => {
                if (block === 1) {
                    const key = `${rowIndex}-${colIndex}`;
                    const x = colIndex + position.x;
                    const y = rowIndex + position.y;
                    return (
                        <OneBlock key={key} style={{ top: `${y * 30}px`, left: `${x * 30}px` }} />
                    );
                } else {
                    return null;
                }
            })
        );
    };

    return <div>{renderFigure()}</div>;
};

export default Figure;
