import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Card, { CardContent, CardMedia } from "material-ui/Card";
import Tabs, { Tab } from "material-ui/Tabs";

import Personal from "./Personal";
import Skills from "./Skills";

/*
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

  /*
   * Show tab section selected.
   *
   * @returns {XML} The tab section selected to render, never null.
   */
  getTabContent() {
    switch (this.state.tabSelected){
    case 0:
      return <Personal/>;
    default:
      return <Skills/>;
    }
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.main}>
        <Card className={classes.card}>
          <CardContent className={classes.content}>
            <CardMedia
              ref={this.refPicture}
              className={classes.picture}
              image="/images/profilepic.jpeg"
              title="Jose Bonito"
            />
            <div>
              <Tabs value={this.state.tabSelected}
                textColor="primary"
                onChange={this.onTabChange}  fullWidth centered>
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

const styles = theme => ({
  main: {
    [theme.breakpoints.up("sm")]: {
      padding: 30,
    },
  },
  card: {
    margin: "auto",
    minHeight: 500,
    marginBottom: 30,
    maxWidth: "90%",
    [theme.breakpoints.up("md")]: {
      minWidth: "90%",
      maxWidth: "90%",
    },
    [theme.breakpoints.up("lg")]: {
      minWidth: 0,
      maxWidth: 1000,
    },
  },
  content: {
    padding: 0
  },
  tabsIndicator: {
    backgroundColor: "#ffa100"
  },
  picture: {
    minHeight: "45vw",

  },

});

export default withStyles(styles)(Profile);
