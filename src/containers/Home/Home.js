import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Typist from "react-typist";
import TypistLoop from "react-typist-loop";
import { withRouter } from "react-router";
import "./particles.css";

/*
 * Component to show on home url "/".
 */
class Home extends Component {
  constructor(props) {
    super(props);
    this.toContactForm = this.toContactForm.bind(this);
  }

  toContactForm() {
    this.props.history.push("/contact");
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.home}>
        <div  className={classes.center}>
          <Typography variant="display3" className={classes.title} >
            <b>José</b> Bonito
          </Typography>
          <Typography variant="headline" className={classes.typing}>
            <TypistLoop>
              <Typist startDelay={1500}>
                <span>Frontend Developer.</span>
                <Typist.Backspace count={23} delay={1000} />
              </Typist>
              <Typist>
                <span>Backend Developer.</span>
                <Typist.Backspace count={23} delay={1000} />
              </Typist>
            </TypistLoop>
          </Typography>
        </div>

        <div className="animation-wrapper">
          <div className="particle particle-1"> </div>
          <div className="particle particle-2"> </div>
          <div className="particle particle-3"> </div>
          <div className="particle particle-4"> </div>
        </div>

      </div>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object,
  history: PropTypes.object.isRequired,
};

const styles = theme => ({
  home: {
    display:"flex",
    height: "100vh",
    overflow : "hidden",
    backgroundColor: theme.background.default
  },
  center:{
    margin: "auto"
  },
  title:{
    textShadow: "1px 1px 1px #333,1px 1px 1px #333,1px 1px 1px #333",
    color: "#fff"
  },
  contactButton: {
    marginTop: 18,
  },
  typing : {
    minHeight : 32,
    textShadow: "1px 1px 1px #000,1px 1px 1px #000,1px 1px 1px #000",
    color: theme.palette.secondary.main
  },
  bottom : {
    position: "absolute",
    left: 0,
    bottom: -1,
    width: 0,
    height: 0,
    borderTop: "3vh solid transparent",
    borderLeft: "100vw solid #fff",
    borderLeftColor: theme.background.color,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  }
});

export default withStyles(styles)(withRouter(Home));
