import React from 'react';
import {Span} from "@/components/Spinner/Spinner.style";
import {Loader} from 'react-feather'

function Spinner({
                   color = 'black',
                   size = 24,
                   opacity = 0.5,
                   speed = 1200,
                 }) {
  return (
      <Span
          speed={speed}
          style={{
            opacity,
            width: size,
            height: size,
          }}
      >
        <Loader color={color} size={size} />
      </Span>
  );
}

export default Spinner;