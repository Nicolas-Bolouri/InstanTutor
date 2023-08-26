import React from "react";
import Chatroom from "@/components/chatroom/Chatroom";

const BiologyChatRoom = () => {
  return (
    <Chatroom
      appId={process.env.NEXT_PUBLIC_BIOLOGY_APP_ID}
      appCert={process.env.NEXT_PUBLIC_BIOLOGY_APP_CERTIFICATE}
      channelName={process.env.NEXT_PUBLIC_BIOLOGY_CHANNEL}
    />
  );
};

export default BiologyChatRoom;
