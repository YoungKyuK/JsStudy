import React from "react";
import qs from "qs";

const About = () => {
  //쿼리를 사용할 때는 쿼리 문자열을 객체로 파싱하는 과정에서 결과 값은 언제나 "문자열"이라는 점에 주의하세요.
  // ex)
  // 아래 이걸 꼭 써줘야함. location이나 history 같은 전역 변수를 ESLint가 참조할 수 있게 주석으로 명시해 주는 것이다.
  // eslint-disable-next-line no-restricted-globals
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true, // 이 설정을 통해 문자열 맨 앞의 ?를 생략합니다.
  });

  const showDetail = query.detail === "true"; // 쿼리의 파싱 결과 값은 문자열입니다.

  return (
    <div>
      <h1>소개</h1>
      <p>이 프로젝트는 리액트 라우터 기초를 실습해 보는 예제 프로젝트입니다.</p>
      {showDetail && <p>detail 값을 true로 설정하셨군요!</p>}
    </div>
  );
};

export default About;
