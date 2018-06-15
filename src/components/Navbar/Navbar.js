import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import withWidth from "material-ui/utils/withWidth";
import { compose } from "recompose";
import classNames from "classnames";
import Drawer from "material-ui/Drawer";
import Card, { CardContent, CardActions } from "material-ui/Card";
import MenuButton from "./MenuButton";
import List from "material-ui/List";
import IconButton from "material-ui/IconButton";
import Icon from "material-ui/Icon";
import MenuRoutes from "../../MenuRoutes";


/**
 * Lateral Navbar component.
 */
class Navbar extends Component {


  /**
   * Renders the view.
   *
   * @returns {XML} The view to render, never null.
   */
  render() {
    const { classes, open, onToggleMenu, onToggleLight, width, location} = this.props;
    const xs = (width === "xs");

    return (
      <Drawer
        variant="permanent"
        anchor={xs? "bottom" : "left"}
        classes={{
          paper:  classNames(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}>
        {!xs?
          <IconButton
            onClick={onToggleMenu}
            size="small"
            className={classes.sizeButton}>
            <Icon>
              {open? "chevron_left":"chevron_right"}
            </Icon>
          </IconButton>
          : null}
        <Card className={classes.card}>
          <CardContent className={classes.nonPadding}>
            <List component="nav" className={classes.list}>
              {MenuRoutes.map((element,key) =>
                <MenuButton
                  key={key}
                  text={element.text}
                  icon={element.icon}
                  showText={xs? false : open}
                  active={element.route===location}
                  route={element.route}
                />
              )}
            </List>
          </CardContent>
          <CardActions className={classes.nonPadding}>
          </CardActions>
        </Card>
        {!xs?
          <IconButton
            onClick={onToggleLight}
            size="small"
            className={classes.sizeButton}>
            <Icon>lightbulb_outline</Icon>
          </IconButton>
          : null}
      </Drawer>
    );
  }
}

Navbar.propTypes = {
  width: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
  open: PropTypes.bool.isRequired,
  onToggleMenu: PropTypes.func.isRequired,
  onToggleLight: PropTypes.func.isRequired,
  location: PropTypes.string
};

const styles = theme => ({
  drawerPaper: {
    [theme.breakpoints.down("xs")]: {
      width: "100vw",
      position: "fixed",
    },
    width: theme.spacing.unit * 26,
    overflowX: "hidden",
    backgroundColor: theme.background.color,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing.unit * 12
  },
  sizeButton: {
    marginTop: 5,
    marginRight: 5,
    marginLeft:"auto",
    [theme.breakpoints.down("xs")]: {
      marginTop: 0,
      marginRight: 0,
    }
  },
  card: {
    margin: "auto",
    [theme.breakpoints.down("xs")]: {
      margin: 0
    }

  },
  nonPadding: {
    padding: 0,
  },
  list: {
    padding: 0,
    [theme.breakpoints.down("xs")]: {
      display: "flex",
      justifyContent: "center"

    },
  }
});


export default compose(withStyles(styles), withWidth())(Navbar);