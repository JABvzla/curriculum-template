import React, { Component } from "react";
import PropTypes from "prop-types";
import { compose } from "recompose";
import { withRouter } from "react-router";
import { withTheme } from "@material-ui/core/styles";
import {
  ListItem,
  ListItemText,
  Divider,
  Icon
} from "@material-ui/core";

/*
 * Menu button to show in NavBar menu.
 */
class MenuButton extends Component {
  constructor(props) {
    super(props);
    this.state = { "isHover" : false};
  }

  /*
   * Redirect to route property.
   *
   * Event click on menu button.
   */
  onClickButton() {
    this.props.history.push(this.props.route);
  }

  render() {
    const { text, icon, showText } = this.props;

    const buttonStyle = {
      display: "flex",
      flexDirection: "column",
      alignContent: "center",
      justifyContent: "center",
      padding: showText? "12px 0px" : "1em",
      borderBottom: (this.state.isHover || this.props.active)? "3px solid " + this.props.theme.palette.secondary.main : "3px solid transparent",
    };

    const centerStyle = { margin: "auto" };

    return ([
      <ListItem
        key={0}
        button style={buttonStyle}
        onClick={this.onClickButton.bind(this)}
        onMouseEnter={() => this.setState({"isHover" : true})}
        onMouseLeave={() => this.setState({"isHover" : false})}
      >
        <Icon color="primary" style={centerStyle}>{icon}</Icon>
        {showText?<ListItemText primary={text} /> : null}
      </ListItem>,
      <Divider key={1}/>
    ]);
  }
}
MenuButton.propTypes = {
  theme: PropTypes.object.isRequired,
  text: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  showText: PropTypes.bool.isRequired,
  route: PropTypes.string.isRequired,
  history: PropTypes.object.isRequired,
  active: PropTypes.bool
};

export default compose(withTheme())(withRouter(MenuButton) );
