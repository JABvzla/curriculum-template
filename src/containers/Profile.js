import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";

import Card, { CardContent, CardMedia } from "material-ui/Card";
import Typography from "material-ui/Typography";


/**
 * Component to show Profile information.
 */
class Profile extends Component {

  /**
   * Renders the view.
   *
   * @returns {XML} The view to render, never null.
   */
  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.card}>
        <CardContent className={classes.content}>
          <CardMedia
            className={classes.picture}
            image="/profilepic.jpeg"
            title="Jose Bonito"
          />
          <div className={classes.personalInfo}>
            <Typography 
              className={classes.title}
              variant="headline" 
              component="h2">
              Información Personal
            </Typography>
            <Typography component="div">
              <ul className={classes.listInfo}>
                <li className={classes.info}><b>Nombre :</b> Jose Bonito</li>
                <li className={classes.info}><b>Email :</b> joseantoniobonito@hotmail.com</li>
                <li className={classes.info}><b>Telfono :</b> 04269064756</li>
                <li className={classes.info}><b>Fecha de Nacimiento :</b> 20/08/1992</li>
              </ul>
            </Typography>
          </div>
        </CardContent>
      </Card>
    );
  }
}

Profile.propTypes = {
  classes: PropTypes.object
};

const styles = () => ({
  card: {
    margin: "auto",
    minWidth: 550,
    minHeight: 185,
    maxWidth: 550,
    maxHeight: 185,
  },
  content: {
    display: "flex",
    padding: 0
  },
  personalInfo: {
    padding: 10,
    paddingLeft: 20,
  },
  picture: {
    width: 185,
    height: 185,
  },
  listInfo: {
    listStyleType: "none",
    paddingLeft: 10
  },
  info: {
    marginTop:10
  }


});


export default withStyles(styles)(Profile);