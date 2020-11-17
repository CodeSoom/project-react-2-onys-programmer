import React from 'react';

import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <>
    <h1>Flexible</h1>
    <p>Get any habit successfully!</p>
    <button><Link to="/guide">Get it started!</Link></button>
    </>
  );
}
