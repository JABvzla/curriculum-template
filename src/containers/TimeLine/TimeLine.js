import React, { Component } from "react";
import { VerticalTimeline, VerticalTimelineElement }  from "react-vertical-timeline-component";
import {TimeLineInfo} from "./TimeLineInfo";
import "react-vertical-timeline-component/style.min.css";

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
        overflowY: "scroll",
        marginLeft: "auto",
        backgroundColor: "rgba(68, 68, 68, 0.29)"
      }}>
        <VerticalTimeline>
          {TimeLineInfo.map((element,key) =>
            <VerticalTimelineElement
              key={key}
              className="vertical-timeline-element--work"
              date={element.date}
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            >
              <h3 className="vertical-timeline-element-title">{element.title}</h3>
              <h4 className="vertical-timeline-element-subtitle">{element.subtitle}</h4>
              <p>{element.description}</p>      
            </VerticalTimelineElement>
          )}
        </VerticalTimeline>
      </div>
    );
  }
}


export default TimeLine;