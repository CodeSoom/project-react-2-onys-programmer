import React from 'react';

import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <>
    <h1>Flexible</h1>
    <h3>Get any habit successfully!</h3>
    <button><Link to="/greet">Get it started!</Link></button>
    </>
  );
}
