import React, { Component } from "react";
import PropTypes from "prop-types";
import { Router, Route } from "react-router-dom";
import { withStyles } from "material-ui/styles/index";
import { createMuiTheme, MuiThemeProvider } from "material-ui/styles";
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
      "open" : true,
      "showMain" :  true,
      "navigate" : false,
      "light" : true,
    };

    this.history = createHistory();
    this.onToggleMenu = this.onToggleMenu.bind(this);
    this.onToggleLight = this.onToggleLight.bind(this);
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

  getTheme() {
    const color1 = "#fff";
    const color2 = "#303e49";
    const primary = this.state.light? color1 : color2;
    const primaryInvert = !this.state.light? color1 : color2;

    return createMuiTheme({
      palette: {
        type: this.state.light? "light" : "dark",
        primary: {
          light: color1,
          main: primaryInvert,
          dark: primaryInvert,
          contrastText: primary,
        }
      },
      background : {
        color: primary,
        default: color2,
        paper: color2,
      },
      typography: {
        fontFamily:
        "-apple-system,system-ui,BlinkMacSystemFont," +
        "\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif",
      },
      overrides: {
        MuiPaper: {
          root: {
            backgroundColor: primary,
          },
          elevation2: {
            borderRadius: 6,
            overflow: "hidden",
          }
        },
      }
    });
  }

  /**
   * Toggle light or dark pallete.
   */
  onToggleLight() {
    this.setState({"light": !this.state.light});
  }

  /**
   * Renders the view.
   *rgb(68, 82, 93);
   * @returns {XML} The view to render, never null.
   */
  render() {
    const { classes } = this.props;

    return (
      <Router history={this.history}>
        <div style={{ backgroundColor: this.state.light? "#FAFAFA" : "#486273" }}>
          <MuiThemeProvider theme={this.getTheme()}>
            <Navbar onToggleMenu={this.onToggleMenu}
              onToggleLight={this.onToggleLight}
              open={this.state.open}
            />

            <Animated animationIn="bounceInUp" animationOut="bounceOutDown" isVisible={this.state.showMain}>
              <main className={classNames(classes.content, !this.state.open && classes.menuClosed)}>
                {MenuRoutes.map((element, key) =>
                  <Route exact path={element.route} component={element.component} key={key} />
                )}
              </main>
            </Animated>
          </MuiThemeProvider>
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
    minHeight: "100vh",
    marginLeft: theme.spacing.unit * 26,
  },
  menuClosed: {
    marginLeft: theme.spacing.unit * 12,
  }
});


export default withStyles(styles)(App);
