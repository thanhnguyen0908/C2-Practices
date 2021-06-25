import {INCREASE_COUNTER, DECREASE_COUNTER} from '../constants/index';

export const increaseCounter = () => ({
  type: INCREASE_COUNTER,
});

export const decreaseCounter = () => ({
  type: DECREASE_COUNTER,
})