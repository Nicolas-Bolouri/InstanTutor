import React from "react";
import Chatroom from "@/components/chatroom/Chatroom";

const ChemistryChatRoom = () => {
  return (
    <Chatroom
      appId={process.env.NEXT_PUBLIC_CHEMISTRY_APP_ID}
      appCert={process.env.NEXT_PUBLIC_CHEMISTRY_APP_CERTIFICATE}
      channelName={process.env.NEXT_PUBLIC_CHEMISTRY_CHANNEL}
    />
  );
};

export default ChemistryChatRoom;
