import React, { Component } from "react";
import PropTypes from "prop-types";
import {withStyles} from "material-ui/styles/index";
import TabContent from "./TabContent";

class Personal extends Component {

  render() {
    const { classes } = this.props;

    return (
      <TabContent title="Información Personal">
        <div>
          <ul className={classes.listInfo}>
            <li className={classes.info}><b>Nombre :</b> Jose Bonito</li>
            <li className={classes.info}>
              <b>Email : </b>
              <a href="mailto:hola@josebonito.com?Subject=Hola!">hola@josebonito.com</a>
            </li>
            <li className={classes.info}><b>Skype :</b> JABvzla</li>
          </ul>
        </div>
      </TabContent>
    );
  }

}

Personal.propTypes = {
  classes: PropTypes.object
};

const styles = () => ({
  listInfo: {
    listStyleType: "none",
    paddingLeft: 10,
  },
  info: {
    marginTop:20,
    fontSize: "1.3em"
  }
});

export default withStyles(styles)(Personal);
