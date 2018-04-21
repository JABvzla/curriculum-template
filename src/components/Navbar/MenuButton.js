import React, { Component } from "react";
import PropTypes from "prop-types";
import { ListItem, ListItemText } from "material-ui/List";
import Divider from "material-ui/Divider";
import Icon from "material-ui/Icon";
import { withRouter } from "react-router";


/**
 * Menu button to show in NavBar menu.
 */
class MenuButton extends Component {

  /**
   * Redirect to route property.
   * <br/>
   * Event click on menu button.
   */
  onClickButton() {
    this.props.history.push(this.props.route);
  }


  /**
   * Renders the view.
   *
   * @returns {XML} The view to render, never null.
   */
  render() {
    const { text, icon, showText } = this.props;

    const buttonStyle = { 
      display: "flex",
      flexDirection: "column",
      alignContent: "center",
      justifyContent: "center",
    };
    const centerStyle = { margin: "auto" };

    return ([
      <ListItem button style={buttonStyle} key={0} onClick={this.onClickButton.bind(this)}>
        <Icon color="primary" style={centerStyle}>{icon}</Icon>
        {showText?<ListItemText primary={text} /> : null}             
      </ListItem>,
      <Divider key={1}/>
    ]);
  }
}
MenuButton.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  showText: PropTypes.bool.isRequired,
  route: PropTypes.string.isRequired,
  history: PropTypes.object.isRequired,
};


export default withRouter(MenuButton);