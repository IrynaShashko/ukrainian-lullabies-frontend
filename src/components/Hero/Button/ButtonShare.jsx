import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { useSelector } from "react-redux";

import { getLightTheme } from "../../../redux/theme/themeSelectors";
import Share from "../../../icons/Share";

import "./button-share.css";

const ButtonShare = ({ text, onClick }) => {
  const isLightTheme = useSelector(getLightTheme);

  return (
    <button
      className={classNames("", {
        "shared-button-light": isLightTheme,
        "shared-button": !isLightTheme,
      })}
      onClick={onClick}
    >
      {text} <Share className="share-icon" />
    </button>
  );
};
export default ButtonShare;

ButtonShare.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};
