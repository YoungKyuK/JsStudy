/* MyComponent.js */
import React from "react";
import PropTypes from "prop-types";

// const MyComponent = ({ name, children }) => {
// => 함수의 파라미터 객체로 바로 비구조화 할당 가능.
const MyComponent = ({ name, favoriteNumber, children }) => {
  // 비구조화 할당 ( 구조 분해 문법 )
  //const { name, children } = props;

  return (
    <div>
      안녕하세요, 제 이름은 {name}입니다. <br />
      children 값은 {children}
      입니다.
      <br />
      제가 좋아하는 숫자는 {favoriteNumber}입니다.
    </div>
  );
};

MyComponent.defaultProps = {
  name: "홍길동",
};

MyComponent.propTypes = {
  name: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired,
};

export default MyComponent;
