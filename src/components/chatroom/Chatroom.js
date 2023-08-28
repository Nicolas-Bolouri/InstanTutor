"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";

const AgoraUIKit = dynamic(() => import("agora-react-uikit"), { ssr: false });

const Chatroom = ({ appId, appCert, channelName }) => {
  const [videoCall, setVideoCall] = useState(true);
  const [token, setToken] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchToken = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_TOKEN_ENDPOINT}?appID=${appId}&appCertificate=${appCert}&channelName=${channelName}`
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
    enableScreensharing: false,
    layout: 0,
  };

  const callbacks = {
    EndCall: () => {
      if (window.confirm("Are you sure you want to exit the call?")) {
        router.push("/");
      }
    },
  };

  const loadingStyles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "calc(100vh - 80px)",
    },
  };

  if (!token) {
    return (
      <div style={loadingStyles.container}>
        <div>Waiting for server: loading...</div>
      </div>
    );
  }

  const videoContainerStyle = {
    display: "flex",
    width: "100vw",
    height: "calc(100vh - 80px)",
    backgroundColor: "white",
  };

  const styleProps = {
    videoMode: {
      max: "1000px",
      min: "40px",
    },
    localBtnContainer: {
      backgroundColor: "#333",
      height: "70px",
    },
    theme: "white",
  };

  return videoCall ? (
    <div style={videoContainerStyle}>
      <AgoraUIKit
        rtcProps={rtcProps}
        callbacks={callbacks}
        styleProps={styleProps}
      />
    </div>
  ) : (
    <h3 onClick={() => setVideoCall(true)}>Start Call</h3>
  );
};

export default Chatroom;
