import { useDispatch, useSelector } from 'react-redux';

import Action from '../store/action';

import './style.css';

const Joke = () => {
  const joke = useSelector((state) => state.joke);
  const dispatch = useDispatch();

  console.log(dispatch);

  const onGetAnotherFact = () => {
    console.log('onGetAnotherFact');
    dispatch({ type: Action.FETCH_REQUEST });
  };

  return (
    <div className='container'>
      <h3>Don't Laugh Challenge</h3>
      <div className='joke'>{joke}</div>
      <button className='btn' onClick={onGetAnotherFact}>
        Get Another Fact
      </button>
    </div>
  );
};

export default Joke;
