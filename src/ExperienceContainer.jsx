import React from 'react';

import { useSelector } from 'react-redux';

import Experience from './Experience';;

export default function ExperienceContainer() {
  const { status } = useSelector((state) => ({
    status: state.status,
  }));

  return (
    <Experience
    status={status}
    />
  );
}