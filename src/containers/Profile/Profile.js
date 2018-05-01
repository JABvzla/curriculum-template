import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Card, { CardContent, CardMedia } from "material-ui/Card";
import Tabs, { Tab } from "material-ui/Tabs";

import About from "./About";
import Personal from "./Personal";
import Skills from "./Skills";

/**
 * Component to show Profile information.
 */
class Profile extends Component {

  constructor(props) {
    super(props);

    this.state = {
      tabSelected: 0,
    };

    this.onTabChange = this.onTabChange.bind(this);
  }

  onTabChange(e,value) {
    this.setState({ tabSelected: value });
  }


  /**
   * Show tab section selected.
   *
   * @returns {XML} The tab section selected to render, never null.
   */
  getTabContent() {
    switch (this.state.tabSelected){
    case 0:
      return <About/>;
    case 1:
      return <Personal/>;
    default:
      return <Skills/>;
    }
  }


  /**
   * Renders the view.
   *
   * @returns {XML} The view to render, never null.
   */
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.main}>
        <Card className={classes.card}>
          <CardContent className={classes.content}>
            <CardMedia
              className={classes.picture}
              image="/profilepic.jpeg"
              title="Jose Bonito"
            />
            <div>
              <Tabs value={this.state.tabSelected}
                classes={{ indicator: classes.tabsIndicator }}
                onChange={this.onTabChange}  fullWidth>
                <Tab label="Acerca de mi" />
                <Tab label="Personal" />
                <Tab label="Habilidades" />
              </Tabs>
              {this.getTabContent()}
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }
}

Profile.propTypes = {
  classes: PropTypes.object
};

const styles = () => ({
  main: {
    minWidth: "100%",
    minHeight: "100vh",
    paddingTop: 50,
  },
  card: {
    margin: "auto",
    minWidth: "90%",
    maxWidth: "90%",
    minHeight: 500,
  },
  content: {
    padding: 0
  },
  tabsIndicator: {
    backgroundColor: "#ffa100"
  },
  picture: {
    minHeight: 310,

  },

});


export default withStyles(styles)(Profile);