import React from "react";
import {createRoot} from "react-dom/client";
import App from "./components/app";

import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";


<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>;

const root = createRoot(document.getElementById("root"));

root.render(<App />);