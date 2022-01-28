import "./menu-item.styles.scss";
import React from "react";
import { withRouter } from "react-router-dom";

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <div
    className={`${size} menu-item`}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <div
      className="background-image"
      style={{ backgroundImage: `url(${imageUrl})` }}
    ></div>
    <div className="content">
      <h1 className="title">{title}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);

//pass MenuItem through the withRouter HOC, so that it gets access to match, location and history props
//(whenever it renders), which are part of the object passed to the component from <Route /> (82)
export default withRouter(MenuItem);
