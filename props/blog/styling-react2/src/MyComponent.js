import React, { Component } from "react";
import PropTypes from "prop-types";

//만약 함수의 파라미터가 객체라면 그 값을 바로 비구조화해서 사용하는 것이다.
// props를 사용 할 때 파라미터 부분에서 비구조화 할당 문법을 사용합니다.

// 클래스형 컴포넌트에서 props 사용
class MyComponent extends Component {
  render() {
    const { name, favoriteNumber, children } = this.props; // 비구조화 할당
    return (
      <div>
        안녕하세요, 제 이름은 {name}입니다. <br />
        children 값은 {children}
        입니다.
        <br />
        제가 좋아하는 숫자는 {favoriteNumber}입니다.
      </div>
    );
  }
}

MyComponent.defaultProps = {
  name: "기본 이름",
};

// PropTypes를 지정하지 않았을 때 뜨는 경고 메시지 : PropTypes.number.isRequired
MyComponent.propTypes = {
  name: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired,
};

export default MyComponent;
