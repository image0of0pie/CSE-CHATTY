import { io } from "socket.io-client";

const INIT = () => {
  global.socket = io("http://localhost:3000", {
    transports: ["websocket", "polling", "flashsocket"],
  });
};
export default INIT;
