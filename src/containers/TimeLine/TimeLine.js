import React, { Component } from "react";
import { VerticalTimeline, VerticalTimelineElement }  from "react-vertical-timeline-component";
import { TimeLineInfo } from "./TimeLineInfo";
import "./style.min.css";
import Typography from "material-ui/Typography";
import Icon from "material-ui/Icon";

/**
 * write component description..
 * 
 */
class TimeLine extends Component {

  /**
   * Renders the view.
   *
   * @returns {XML} The view to render, never null.
   */
  render() {
    return (
      <div style={{
        maxHeight: "100%",
        maxWidth: "100%",
        overflow: "hidden"
      }}>
        <VerticalTimeline>
          {TimeLineInfo.map((element,key) =>
            <VerticalTimelineElement
              key={key}
              date={element.date}
              iconStyle={{ backgroundColor: element.bgColor, display: "flex"}}
              icon={<Icon color="primary" style={{ margin: "auto", color: element.color}}>{element.icon}</Icon>}
            >
              <Typography  variant="title" gutterBottom >{element.title}</Typography>
              <Typography  variant="subheading" gutterBottom >{element.subtitle}</Typography>
              <Typography variant="body1" gutterBottom align="justify">
                {element.description}
              </Typography>
            </VerticalTimelineElement>
          )}
        </VerticalTimeline>
      </div>
    );
  }
}


export default TimeLine;