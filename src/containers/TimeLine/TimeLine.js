import React, { Component } from "react";
import PropTypes from "prop-types";
import { VerticalTimeline, VerticalTimelineElement }  from "react-vertical-timeline-component";
import { TimeLineInfo } from "./TimeLineInfo";
import "./style.min.css";
import Typography from "material-ui/Typography";
import Icon from "material-ui/Icon";
import Chip from "material-ui/Chip";
import { withStyles } from "material-ui/styles";

/*
 * write component description..
 * 
 */
class TimeLine extends Component {
  render() {
    return (
      <div className={this.props.classes.timeline}>
        <VerticalTimeline>
          {TimeLineInfo.map((element,key) =>
            <VerticalTimelineElement
              key={key}
              date={element.date}
              iconStyle={{ backgroundColor: element.bgColor, display: "flex"}}
              icon={<Icon color="primary" style={{ margin: "auto", color: element.color}}>{element.icon}</Icon>}
            >
              <Typography variant="title" gutterBottom >{element.title}</Typography>
              <Typography><b>{element.subtitle}</b></Typography>
              <Typography align="justify">
                {element.description}
                <br/>
                {element.link? <a href={element.link} target="_blank">{element.link}</a>: null}
                <br/>
                {element.tecnologies.map((value,k)=>
                  <Chip label={value} key={k}/>
                )}
              </Typography>
            </VerticalTimelineElement>
          )}
        </VerticalTimeline>
      </div>
    );
  }
}

TimeLine.propTypes = {
  classes: PropTypes.object
};

const styles = theme => ({
  timeline: {
    marginBottom: 50,
    [theme.breakpoints.up("sm")]: {
      marginBottom: 0
    },
  },
});

export default withStyles(styles)(TimeLine);
