import React, { Component } from "react";
import { VerticalTimeline, VerticalTimelineElement }  from "react-vertical-timeline-component";
import { TimeLineInfo } from "./TimeLineInfo";
import "./style.min.css";
import Typography from "material-ui/Typography";
import Icon from "material-ui/Icon";
import Chip from "material-ui/Chip";

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
      <div>
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


export default TimeLine;