import React from 'react';

export default function Experience() {
  const level = 1;
  const experience = 0;
  return (
    <>
      <p>LV.{level}</p>
      <progress role="experienceBar" value={experience} max="7"></progress>
    </>
  );
}