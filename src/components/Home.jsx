import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { setStart, setDestination } from '../redux/actions';

const Home = () => {
  const dispatch = useDispatch();
  const { start, destination } = useSelector((state) => state);

  const handleInputStart = (event) => {
    dispatch(setStart(event.target.value));
  };

  const handleInputDestination = (event) => {
    dispatch(setDestination(event.target.value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const isFormEmpty = start.trim() === '' || destination.trim() === '';

  return (
    <div>
      <h1>React App</h1>
      <form onSubmit={handleSubmit}>
        <label>
          From City:
          <input type='text' value={start} onChange={handleInputStart} />
        </label>
        <br />
        <label>
          To City:
          <input
            type='text'
            value={destination}
            onChange={handleInputDestination}
          />
        </label>
        <br />
        <Link to='/map'>
          <button type='submit' disabled={isFormEmpty}>
            See marker
          </button>
        </Link>
      </form>
    </div>
  );
};

export default Home;
