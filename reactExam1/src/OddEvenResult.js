const OddEvenResult = ({count}) => {
    //console.log(count);
    console.log("Render!!");
    return <>
    { count % 2 === 0 ? "짝수" : "홀수"};
    </>
};

// 컴포넌트의 상태가 바뀌면 자식요소도 리렌더링 된다.
// 부모가 리렌더링 되면 자식도 리렌더링 된다.

export default OddEvenResult;