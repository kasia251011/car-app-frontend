"use strict";
exports.__esModule = true;
var material_1 = require("@mui/material");
var car_for_card_png_1 = require("../../assets/car_for_card.png");
require("./styles.scss");
var CarParamsCard = function () {
    return (React.createElement(material_1.Box, { className: "car-params-card" },
        React.createElement(material_1.Box, { className: "input-container" },
            React.createElement(material_1.Typography, { variant: "h2", className: "label" }, "First Car"),
            React.createElement(material_1.Box, { className: "inputs" },
                React.createElement(material_1.Box, null,
                    React.createElement(material_1.Typography, { variant: "h3" }, "Year of manufacture"),
                    React.createElement(material_1.InputBase, null)),
                React.createElement(material_1.Box, null,
                    React.createElement(material_1.Typography, { variant: "h3" }, "Mileage"),
                    React.createElement(material_1.InputBase, null)),
                React.createElement(material_1.Box, null,
                    React.createElement(material_1.Typography, { variant: "h3" }, "Price"),
                    React.createElement(material_1.InputBase, null)),
                React.createElement(material_1.Box, null,
                    React.createElement(material_1.Typography, { variant: "h3" }, "Horsepower"),
                    React.createElement(material_1.InputBase, null)),
                React.createElement(material_1.Box, null,
                    React.createElement(material_1.Typography, { variant: "h3" }, "Type of fuel"),
                    React.createElement(material_1.InputBase, null)),
                React.createElement(material_1.Box, null,
                    React.createElement(material_1.Typography, { variant: "h3" }, "Gear box"),
                    React.createElement(material_1.InputBase, null)))),
        React.createElement(material_1.Box, { className: "image-container" },
            React.createElement("img", { src: car_for_card_png_1["default"] }))));
};
exports["default"] = CarParamsCard;
