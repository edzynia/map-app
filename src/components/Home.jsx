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
    <div className='container'>
      <div className='text-container'>
        <h1>Maps Application</h1>
        <p>
          To view the route between two locations, please enter the starting
          point and destination in the input fields below. You can enter either
          street names or city names.
        </p>
        <p>Get ready to explore the route!</p>
      </div>
      <form className='form' onSubmit={handleSubmit}>
        <label>
          Start:
          <input type='text' value={start} onChange={handleInputStart} />
        </label>
        <br />
        <label>
          Destination:
          <input
            type='text'
            value={destination}
            onChange={handleInputDestination}
          />
        </label>
        <br />
        <Link to='/map'>
          <button
            className={`button ${isFormEmpty ? 'disabled' : ''}`}
            type='submit'
            disabled={isFormEmpty}
          >
            See marker
          </button>
        </Link>
      </form>
    </div>
  );
};

export default Home;
