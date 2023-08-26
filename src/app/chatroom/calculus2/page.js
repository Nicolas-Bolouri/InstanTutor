import React from "react";
import Chatroom from "@/components/chatroom/Chatroom";

const Calculus2ChatRoom = () => {
  return (
    <Chatroom
      appId={process.env.NEXT_PUBLIC_CALCULUS2_APP_ID}
      appCert={process.env.NEXT_PUBLIC_CALCULUS2_APP_CERTIFICATE}
      channelName={process.env.NEXT_PUBLIC_CALCULUS2_CHANNEL}
    />
  );
};

export default Calculus2ChatRoom;
