import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles/index";
import Typography from "material-ui/Typography";
import Button from "material-ui/Button";
import Typist from "react-typist";
import TypistLoop from "react-typist-loop";
import { withRouter } from "react-router";


/**
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
        <div className={classes.leftSide}>
          <div>
            <Typography variant="display3" className={classes.title} >
              <b>Jose</b> Bonito
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
            <Button onClick={this.toContactForm}
              variant="raised"
              color="primary"
              className={classes.contactButton}
            >
              Contacto
            </Button>
          </div>
        </div>
        <div className={classes.rightSide}>
          <div className={classes.diagonal}></div>
          <div className={classes.diagonalRight}></div>
          <div className={classes.bottom}></div>

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
  },
  leftSide: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "50%",
    minWidth: 300,
    marginLeft: 0,
    backgroundColor: theme.background.color,

    [theme.breakpoints.down("sm")]: {
      position: "absolute",
      zIndex: 999,
      height: "100vh",
      marginLeft: 0,
      backgroundColor: "transparent",
    },
  },
  title:{
    textShadow: "1px 1px 1px #333,1px 1px 1px #333,1px 1px 1px #333"
  },
  contactButton: {
    marginTop: 18,
  },
  typing : {
    minHeight : 32,
    textShadow: "1px 1px 1px #333,1px 1px 1px #333,1px 1px 1px #333"
  },
  rightSide: {
    position: "relative",
    width: "50%",
    marginRight: 0,
    backgroundImage: "url('home2.jpg')",
    backgroundSize: "cover",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      marginLeft: 0,
    },
  },
  diagonal : {
    position: "absolute",
    left: -1,
    top: 0,
    width: 0,
    height: 0,
    borderBottom: "100vh solid transparent",
    borderLeft: "3vw solid #fff",
    borderLeftColor: theme.background.color,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  diagonalRight : {
    position: "absolute",
    right: -1,
    top: 0,
    width: 0,
    height: 0,
    borderTop: "100vh solid transparent",
    borderRight: "4vw solid #fff",
    borderRightColor: theme.background.color,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
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
