import { useNavigate } from 'react-router-dom';

function BackButton() {
  const navigate = useNavigate();

  const onClick = () => {
    navigate(-1);
  }

  return (
    <button onClick={onClick}>Back</button>
  );
}

export default BackButton;
