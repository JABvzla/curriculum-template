import React, { Component } from "react";
import TabContent from "./TabContent";

/**
 * Component to show tab About content.
 */
class About extends Component {

  /**
   * Renders the view.
   *
   * @returns {XML} The view to render, never null.
   */
  render() {
    return (
      <TabContent title="Acerca de mi">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Nunc iaculis aliquam augue non dapibus. Quisque id elit non
          tortor sodales suscipit id vitae felis. Quisque id elit non
          tortor sodales suscipit id vitae felis.
        </p>
      </TabContent>
    );
  }

}

export default About;
