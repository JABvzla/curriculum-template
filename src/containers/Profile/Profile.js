import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import {
  Card,
  CardContent,
  CardMedia,
} from "@material-ui/core";

import Personal from "./Personal";

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
            <Personal/>
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
