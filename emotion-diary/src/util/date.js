

// toISOString() 자바스크립트 메서드이다 0~9까지가 연월일까지 표시가 되므로 자른다.
export const getStringDate = ( date ) => {
    return date.toISOString().slice(0,10);
};
