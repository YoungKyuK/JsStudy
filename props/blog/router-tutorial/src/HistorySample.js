import React, { Component } from "react";
import { useNavigate } from "react-router-dom";

const HistorySample = () => {
  const navigation = useNavigate();

  return (
    <div>
      <button
        onClick={() => {
          navigation("/");
        }}
      >
        Home
      </button>

      <button
        onClick={() => {
          navigation(-1); // vs history.goBack();
        }}
      >
        Go -1
      </button>
    </div>
  );
};

export default HistorySample;
