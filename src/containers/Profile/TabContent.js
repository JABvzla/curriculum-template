import React, { Component } from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

/*
 * Component to show Tab Content.
 */
class TabContent extends Component {
  render() {
    const { classes, title, children } = this.props;

    return ([
      <Typography
        key={0}
        className={classes.title}
        variant="headline"
        component="h2">
        {title}
      </Typography>,
      <Typography key={1} component="div" className={classes.tabContent}>
        {children}
      </Typography>
    ]);
  }

}

TabContent.propTypes = {
  classes: PropTypes.object,
  title: PropTypes.string,
  children: PropTypes.node
};

const styles = () => ({
  title: {
    width: "100%",
    backgroundColor: "#333",
    color: "#fff",
    padding: 10,
    marginTop: 5
  },
  tabContent: {
    padding: 20
  },

});

export default withStyles(styles)(TabContent);
