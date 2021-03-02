import React from "react";
import { useHistory } from "react-router-dom";

function RoomChat(props) {
  const userName = props.location.state.username;
  const history = useHistory();
  if (!userName) {
    history.push("/");
  }
  return (
    <div>
      <text>RoomChat</text>
    </div>
  );
}

export default RoomChat;
