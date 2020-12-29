import React from 'react';

export default function Experience({ status }) {
  return (
    <>
      <p>LV.{Math.floor(status.experience/7+1)}</p>
      <progress role="experienceBar" value={status.experience%7} max="7"></progress>
    </>
  );
}