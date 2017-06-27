import React from "react";
import { render } from "react-dom";

require("normalize.css");
require("spectacle/lib/themes/default/index.css");


//==============================================
// Change the week you'd like to view here.
//
import Presentation from "./week1";
//
//==============================================


render(<Presentation/>, document.getElementById("root"));
