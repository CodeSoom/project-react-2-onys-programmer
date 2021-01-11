import React from 'react';

export default function Experience({ status }) {
  const level = Math.floor(status.experience/7+1);
  const experienceOfLevel = status.experience%7;
  const maxValueOfExperienceBar = '7';
  return (
    <>
      <p>
      LV.{level}  <progress 
      role="experienceBar" 
      value={experienceOfLevel} 
      max={maxValueOfExperienceBar}
      />
      </p>
    </>
  );
}