import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "DEVELOPER",
          "DEEP LEARNING",
          "MERN STACK DEVELOPER",
          "OPEN SOURCE CONTRIBUTOR",
          'BACKEND DEVELOMENT',
          'FRONTEND DEVELOPMENT',
          'CRITICAL THINKING',
          'SELF LEARNER',
          'CREATIVE',
          'PROBLEM SOLVING',

        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
