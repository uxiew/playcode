import React from 'react';

import { useDispatch, useSelector } from 'react-redux'
import { increment, selectCount } from './counterSlice';

export function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(increment())}>
        Increment (<span>{count}</span>)
      </button>
    </div>
  );
}