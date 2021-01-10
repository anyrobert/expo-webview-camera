import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { WebView } from "react-native-webview";
import * as Permissions from "expo-permissions";
import { usePermissions } from "expo-permissions";
export default function App() {
  const [cameraPermission, askCameraPermission] = usePermissions(
    Permissions.CAMERA
  );
  const [micPermission, askMicPermission] = usePermissions(
    Permissions.AUDIO_RECORDING
  );
  const [mediaPermission, askMediaPermission] = usePermissions(
    Permissions.MEDIA_LIBRARY
  );
  useEffect(() => {
    if (cameraPermission && !cameraPermission.status !== "granted") {
      askCameraPermission();
    }
    if (mediaPermission && !mediaPermission.status !== "granted") {
      askMediaPermission();
    }
    if (micPermission && !micPermission.status !== "granted") {
      askMicPermission();
    }
  }, []);
  return (
    <WebView
      userAgent={'Browser'}
      mediaPlaybackRequiresUserAction={false}
      source={{ uri: "https://36a9661ce8e9.ngrok.io" }}
      style={{ marginTop: 20 }}
      geolocationEnabled={true}
      mediaPlaybackRequiresUserAction={false}
      useWebKit
      originWhitelist={["*"]}
      allowsInlineMediaPlayback
      javaScriptEnabled={true}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
