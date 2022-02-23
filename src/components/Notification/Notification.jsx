import React from "react";
import PropTypes from "prop-types";
import { Text } from "./Notification.styled";

const Notification = ({ message }) => {
  return <Text>{message}</Text>;
};

Notification.propTypes = {
  message: PropTypes.string,
};

export default Notification;