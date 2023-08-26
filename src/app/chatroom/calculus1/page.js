import React from "react";
import Chatroom from "@/components/chatroom/Chatroom";

const Calculus1ChatRoom = () => {
  return (
    <Chatroom
      appId={process.env.NEXT_PUBLIC_CALCULUS1_APP_ID}
      appCert={process.env.NEXT_PUBLIC_CALCULUS1_APP_CERTIFICATE}
      channelName={process.env.NEXT_PUBLIC_CALCULUS1_CHANNEL}
    />
  );
};

export default Calculus1ChatRoom;
