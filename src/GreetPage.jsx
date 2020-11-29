import React from 'react';

import { Link } from 'react-router-dom';

export default function GreetPage() {
  return (
    <>
      <h1>Flexible에 오신 것을 환영합니다!</h1>
      <p>Flexible은 귀하의 발전에 최상의 assist를 제공하는 utility가 될 것입니다.</p>
      <button><Link to="/habit-create">습관 생성 단계로</Link></button>
    </>
  );
}
