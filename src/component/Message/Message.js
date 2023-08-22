import { Container, Title, Text, Button } from "./Message.styled";

const Message = ({ hendleReset, titleMessage, textMessage }) => {
  return (
    <Container>
      <Title>{titleMessage}</Title>
      <Text>{textMessage}</Text>
      <Button onClick={hendleReset} type="buttom">send-new-message</Button>
    </Container>
  )
};

export default Message;