import React from "react";
import { withRouter } from "react-router-dom";

import Footer from "../footer";

class Instagram404 extends React.Component<any> {
  componentDidMount() {
    document.title = "Page Not Found • Instagram";
  }

  render() {
    return (
      <div className="Instagram404">
        <h1>Sorry, this page isn't available.</h1>
        <p>
          The link you followed may be broken, or the page may have been
          removed.{" "}
          <span
            onClick={() => {
              this.props.history.go(-1);
            }}
          >
            Go back to Instagram.
          </span>
        </p>
        <Footer />
      </div>
    );
  }
}

export default withRouter(Instagram404);
