"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import AgoraUIKit from "agora-react-uikit";

const Chatroom = ({ appId, appCert, channelName }) => {
  const [videoCall, setVideoCall] = useState(true);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const fetchToken = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_TOKEN_ENDPOINT}?appId=${appId}&appCertificate=${appCert}&channelName=${channelName}`
        );
        setToken(response.data.token);
      } catch (error) {
        console.error("Error fetching token:", error);
      }
    };

    fetchToken();
  }, []);

  const rtcProps = {
    appId: appId,
    channel: channelName,
    token: token,
  };

  const callbacks = {
    EndCall: () => setVideoCall(false),
  };

  if (!token) {
    return <div>Loading...</div>;
  }

  return videoCall ? (
    <div style={{ display: "flex", width: "100vw", height: "100vh" }}>
      <AgoraUIKit rtcProps={rtcProps} callbacks={callbacks} />
    </div>
  ) : (
    <h3 onClick={() => setVideoCall(true)}>Start Call</h3>
  );
};

export default Chatroom;
