import { useNavigate } from 'react-router-dom';
import { Wrapper, Message, Button } from './ErrorPage.styled';

export const ErrorPage = () => {
  const navigate = useNavigate();
  function onClick() {
    navigate('/');
  }
  return (
    <Wrapper>
      <Message> Ooops, something went wrong! </Message>
      <Button type="button" onClick={onClick}>
        Home
      </Button>
    </Wrapper>
  );
};
