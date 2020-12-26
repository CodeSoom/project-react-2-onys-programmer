import React from 'react';

export default function Experience({ status }) {
  return (
    <>
      <p>LV.{status.level}</p>
      <progress role="experienceBar" value={status.experience} max="7"></progress>
    </>
  );
}