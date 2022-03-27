import * as S from "./style";

const Button = (props) => {
  const content = props.content;
  return <S.Button>{content}</S.Button>;
};

export default Button;
