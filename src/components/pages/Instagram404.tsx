import React from "react";
import { Link } from "react-router-dom";

import Footer from "../footer";

class Instagram404 extends React.Component {
    render() {
        return (
            <div className="Instagram404">
                <h1>Sorry, this page isn't available.</h1>
                <p>The link you followed may be broken, or the page may have been removed. <Link to="/">Go back to Instagram.</Link></p>
                <Footer/>
            </div>
        )
    }
}

export default Instagram404;