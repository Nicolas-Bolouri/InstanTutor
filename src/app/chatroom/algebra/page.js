import Chatroom from "@/components/chatroom/Chatroom";
import React from "react";

const AlgebraChatRoom = () => {
  return (
    <Chatroom
      appId={process.env.NEXT_PUBLIC_ALGEBRA_APP_ID}
      appCert={process.env.NEXT_PUBLIC_ALGEBRA_APP_CERTIFICATE}
      channelName={process.env.NEXT_PUBLIC_ALGEBRA_CHANNEL}
    />
  );
};

export default AlgebraChatRoom;
