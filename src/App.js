import React, { Component } from "react";
import PropTypes from "prop-types";
import { Router, Route } from "react-router-dom";
import { withStyles } from "material-ui/styles/index";
import classNames from "classnames";
import MenuRoutes from "./MenuRoutes";
import {Animated} from "react-animated-css";
import createHistory from "history/createBrowserHistory";

// Import Components
import Navbar from "./components/Navbar";

/**
 * Component main from application.
 */
class App extends Component {

  /**
   * Constructor with mandatory parameters.
   *
   * @param Object The initial properties of the component, cannot be null.
   */
  constructor(props) {
    super(props);
    this.state = {
      "open" : false,
      "showMain" :  true,
      "navigate" : false,
    };

    this.history = createHistory();
    this.onToggleMenu = this.onToggleMenu.bind(this);
    this.onNavigate();
  }

  /**
   * Toggle size of menu.
   */
  onToggleMenu() {
    this.setState({ "open": !this.state.open });
  }


  /**
   * Event trigger when url is change.
   * <br/>
   * First block navigate to animate, then push url.
   */
  onNavigate() {
    this.history.block((location, action) => {
      if(action === "PUSH" && this.history.location.pathname !== location.pathname) {
        this.setState({ "showMain": false });

        setTimeout(() => {
          this.setState({ "navigate" : true, "showMain" : true});
          this.history.push(location.pathname);
          this.setState({ "navigate" : false});
        }, 800);
      }
      return this.state.navigate;
    });
  }


  /**
   * Renders the view.
   *
   * @returns {XML} The view to render, never null.
   */
  render() {
    const { classes } = this.props;

    return (
      <Router history={this.history}>
        <div>
          <Navbar onToggleMenu={this.onToggleMenu} open={this.state.open} />

          <Animated animationIn="bounceInUp" animationOut="bounceOutDown" isVisible={this.state.showMain}>
            <main className={classNames(classes.content, !this.state.open && classes.menuClosed)}>
              {MenuRoutes.map((element, key) =>
                <Route exact path={element.route} component={element.component} key={key} />
              )}
            </main>
          </Animated>
        </div>
      </Router>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object
};

const styles = theme => ({
  content: {
    flexGrow: 1,
    padding: 0,
    minWidth: 0,
    marginLeft: theme.spacing.unit * 26,
  },
  menuClosed: {
    marginLeft: theme.spacing.unit * 12,
  }
});

export default withStyles(styles)(App);
