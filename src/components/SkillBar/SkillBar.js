import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

class SkillBar extends Component {

  render() {
    const { classes, name, percent, sub } = this.props;

    return (
      <div className={!sub? classes.content : classes.contentSub}>
        <div className={classes.texts} style={{width: percent}}>
          <label>{name}</label>
          <label>{percent}</label>
        </div>
        <div className={classes.bar} style={{width: percent}}></div>
      </div>
    );
  }

}

SkillBar.propTypes = {
  classes: PropTypes.object,
  name: PropTypes.string,
  percent: PropTypes.string,
  sub: PropTypes.bool
};

const styles = () => ({
  content: {
    marginTop: 10,
  },
  contentSub: {
    marginTop: 10,
    marginLeft: 15,
  },
  bar: {
    height: 4,
    backgroundColor: "#ffa100"
  },
  texts: {
    display: "flex",
    justifyContent: "space-between",
  },
});

export default withStyles(styles)(SkillBar);
