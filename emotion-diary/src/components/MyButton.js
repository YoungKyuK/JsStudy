const MyButton = ({ text, type, onClick }) => {

    const btnType = ['positive', 'negative'].includes(type)? type:'default';

    // 배열로 바로 보내면 안되니까 문자열로 전달 해야한다 그래서 join 메서드를 통해서 띄어쓰기로 구분한다.
    // class name을 붙여놓으면 안되니까 띄어쓰기를 통해서 구분한다.(type이 동적으로 바뀌어야 하기 때문)
    return (
        <button className={["MyButton", `MyButton_${btnType}`].join(" ")} onClick={onClick}>
            {text}
        </button>
    );
};

MyButton.defaultProps = {
    type : "default",
};

export default MyButton;