import React from "react";
import Chatroom from "@/components/chatroom/Chatroom";

const MechanicsChatRoom = () => {
  return (
    <Chatroom
      appId={process.env.NEXT_PUBLIC_MECHANICS_APP_ID}
      appCert={process.env.NEXT_PUBLIC_MECHANICS_APP_CERTIFICATE}
      channelName={process.env.NEXT_PUBLIC_MECHANICS_CHANNEL}
    />
  );
};

export default MechanicsChatRoom;
