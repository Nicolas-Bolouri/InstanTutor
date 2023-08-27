"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import AgoraUIKit from "agora-react-uikit";
import dynamic from "next/dynamic";

const Chatroom = ({ appId, appCert, channelName }) => {
  const [videoCall, setVideoCall] = useState(true);
  const [token, setToken] = useState(null);
  const AgoraUIKit = dynamic(() => import("agora-react-uikit"), {
    ssr: false,
  });

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

  const videoContainerStyle = {
    display: "flex",
    width: "100vw",
    height: "calc(100vh - 80px)",
    backgroundColor: "white",
  };

  const styleProps = {
    videoMode: {
      max: "650px",
      min: "50px",
    },
  };

  return videoCall ? (
    <div style={videoContainerStyle}>
      <AgoraUIKit
        rtcProps={rtcProps}
        callbacks={callbacks}
        layout={1}
        styleProps={styleProps}
      />
    </div>
  ) : (
    <h3 onClick={() => setVideoCall(true)}>Start Call</h3>
  );
};

export default Chatroom;
