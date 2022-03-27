import * as S from "./style";

const Button = (props) => {
  const content = props.content;
  const onClick = props.onClick;
  return (
    <span onClick={onClick}>
      <S.Button>{content}</S.Button>
    </span>
  );
};

export default Button;
