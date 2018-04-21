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
          <div className={classes.textSection}>
            <Typography variant="display3" >
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
    paddingLeft:theme.spacing.unit * 3,
    width: "50%",
    marginLeft: 0,

    [theme.breakpoints.down("sm")]: {
      position: "absolute",
      zIndex: 999,
      height: "100vh",
      marginLeft: 0,
    },
  },
  contactButton: {
    marginTop: 18,
  },
  typing : {
    minHeight : 32

  },
  rightSide: {
    position: "relative",
    width: "50%",
    marginRight: 0,
    backgroundImage: "url('IMG_20170716_191047.jpg')",
    backgroundSize: "cover",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      marginLeft: 0,
    },
  },
  diagonal : {
    position: "absolute",
    left: 0,
    top: 0,
    width: 0,
    height: 0,
    borderBottom: "100vh solid transparent",
    borderLeft: "3vh solid #fff",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  bottom : {
    position: "absolute",
    left: 0,
    bottom: 0,
    width: 0,
    height: 0,
    borderTop: "3vh solid transparent",
    borderLeft: "100vh solid #fff",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  }
});

export default withStyles(styles)(withRouter(Home));
