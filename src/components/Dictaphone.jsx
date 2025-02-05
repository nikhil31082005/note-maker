import React from "react";
import "regenerator-runtime/runtime";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";

const Dictaphone = ({setMessage}) => {
  const { transcript, listening, browserSupportsSpeechRecognition } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <p>Your browser does not support speech recognition.</p>;
  }

  const startListening = () => {
    SpeechRecognition.startListening({ continuous: true, language: "en-US" });
  };

  const stopListening = () => {
    setMessage(transcript);
    SpeechRecognition.stopListening();

  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Speech Recognition</h2>
      <p>Microphone: {listening ? "🎤 On" : "❌ Off"}</p>
      <button
        onMouseDown={startListening}
        onMouseUp={stopListening}
        onTouchStart={startListening}
        onTouchEnd={stopListening}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
          background: listening ? "#ff4c4c" : "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "5px",
        }}
        aria-label="Press and hold to talk"
      >
        🎙️ Hold to Talk
      </button>
      <button
        onClick={stopListening}
        style={{
          marginLeft: "10px",
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
          background: "#333",
          color: "white",
          border: "none",
          borderRadius: "5px",
        }}
      >
        ❌ Stop
      </button>
      <p style={{ marginTop: "20px", fontSize: "18px" }}>{transcript}</p>
    </div>
  );
};

export default Dictaphone;
