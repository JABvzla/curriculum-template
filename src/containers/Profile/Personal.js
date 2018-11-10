import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import TabContent from "./TabContent";
import Icon from "@material-ui/core/Icon";

/*
 * Component to show tab Personal content.
 */
class Personal extends Component {
  render() {
    const { classes } = this.props;
    let age = 1969 - new Date( new Date(1992,7,20).getTime()- Date.now()).getUTCFullYear();

    return (
      <TabContent title="Información Personal">
        <p>&nbsp;&nbsp;&nbsp;&nbsp;
          Programador responsable y versátil con capacidad de adaptarse a nuevas
          tecnologías y tendencias, amante del aprendizaje y de la superación personal.
        </p>
        <div className={classes.column}>
          <ul className={classes.listInfo}>
            <li className={classes.info}>
              <Icon className={classes.icon} >description</Icon>
              <b>Nombre :</b> José Bonito
            </li>
            <li className={classes.info}>
              <Icon className={classes.icon} >email</Icon>
              <b>Email : </b>
              <a className={classes.link} href="mailto:hola@josebonito.com?Subject=Hola!">hola@josebonito.com</a>
            </li>
          </ul>
          <ul className={classes.listInfo}>
            <li className={classes.info}>
              <Icon className={classes.icon} >cake</Icon>
              <b>Edad :</b> {age}</li>
            <li className={classes.info}>
              <Icon className={classes.icon} >phone</Icon>
              <b>Skype :</b> JABvzla
            </li>
          </ul>
        </div>
      </TabContent>
    );
  }

}

Personal.propTypes = {
  classes: PropTypes.object
};

const styles = theme => ({
  column: {
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up("md")]: {
      flexDirection: "row"
    },
    justifyContent: "space-around",
    paddingLeft: 30,
    paddingRight: 30,
  },
  listInfo: {
    listStyleType: "none",
    paddingLeft: 10,
    margin: 0,
  },
  info: {
    marginTop:20,
  },
  icon: {
    position: "relative",
    top: 5,
    right: 5,
    color: "#ffa100"
  },
  link: {
    color: "#ffa100"
  }
});

export default withStyles(styles)(Personal);
