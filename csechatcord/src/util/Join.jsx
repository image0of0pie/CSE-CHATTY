import "./join.css";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Socket } from "socket.io-client";

function Join() {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [roomCode, setRoomCode] = useState("");
  const handleSignIn = () => {
    // first verify the id for both login and signup
    if (socket.emit("checkuser", { username, password })) {
      socket.emit("joinRoom");
    }
    history.push(`/room/${roomCode}`, { username: username });
  };
  const handleSingUp = () => {
    history.push(`/room/${roomCode}`, { username: username });
  };
  return (
    <div class="login-wrap">
      <div class="login-html">
        <input id="tab-1" type="radio" name="tab" class="sign-in" checked />
        <label for="tab-1" class="tab">
          Sign In
        </label>
        <input id="tab-2" type="radio" name="tab" class="sign-up" />
        <label for="tab-2" class="tab">
          Sign Up
        </label>
        <div class="login-form">
          <div class="sign-in-htm">
            <div class="group">
              <label for="user" class="label">
                Username
              </label>
              <input
                id="user"
                type="text"
                class="input"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
              />
            </div>
            <div class="group">
              <label for="pass" class="label">
                Password
              </label>
              <input
                id="pass"
                type="password"
                class="input"
                data-type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
            <div class="group">
              <label for="pass" class="label">
                Room Code
              </label>
              <input
                value={roomCode}
                onChange={(event) => setRoomCode(event.target.value)}
                placeholder="Enter Room Code or All or leave it blank to create one"
                id="pass"
                type="text"
                class="input"
                data-type="text"
              />
            </div>
            <div class="group">
              <input
                type="submit"
                class="button"
                value="Sign In"
                onClick={handleSignIn}
              />
            </div>
            <div class="hr"></div>
          </div>
          <div class="sign-up-htm">
            <div class="group">
              <label for="user" class="label">
                Username
              </label>
              <input
                id="user"
                type="text"
                class="input"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
              />
            </div>
            <div class="group">
              <label for="pass" class="label">
                Password
              </label>
              <input
                id="pass"
                type="password"
                class="input"
                data-type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
            <div class="group">
              <label for="pass" class="label">
                Room Code
              </label>
              <input
                placeholder="Enter Room Code or All or leave it blank to create one"
                id="pass"
                type="text"
                class="input"
                data-type="text"
                value={roomCode}
                onChange={(event) => setRoomCode(event.target.value)}
              />
            </div>
            <div class="group">
              <input
                type="submit"
                class="button"
                value="Sign Up"
                onClick={handleSingUp}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Join;
