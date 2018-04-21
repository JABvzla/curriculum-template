import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
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
    const { classes, open, onToggleMenu} = this.props;
    return (
      <Drawer 
        variant="permanent"
        anchor="left"
        classes={{
          paper:  classNames(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}>
        <IconButton 
          onClick={onToggleMenu}
          size="small" 
          className={classes.sizeButton}>
          <Icon>
            {open? "chevron_left":"chevron_right"}
          </Icon>
        </IconButton>
        <Card className={classes.card}>
          <CardContent className={classes.nonPadding}>
            <List component="nav" className={classes.nonPadding}>
              {MenuRoutes.map((element,key) =>
                <MenuButton
                  key={key}
                  text={element.text}
                  icon={element.icon}
                  showText={open}
                  route={element.route}
                />
              )}
            </List>
          </CardContent>
          <CardActions className={classes.nonPadding}>
          </CardActions>
        </Card>
      </Drawer>
    );
  }
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
  open: PropTypes.bool.isRequired,
  onToggleMenu: PropTypes.func.isRequired
};

const styles = theme => ({
  drawerPaper: {
    width: theme.spacing.unit * 26,
    overflowX: "hidden",
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
  },
  card: {
    margin: "auto",
  },
  nonPadding: {
    padding: 0,
  }
});


export default withStyles(styles)(Navbar);
