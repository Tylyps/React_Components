import { createSelector } from 'reselect';

export const counterSelector = state => state.example.counter;

export const lastSubtractedNumberSelector = state => state.example.lastMinus;

export const lastAddedNumberSelector = state => state.example.lastAdded;

export const selectNumberAfterAdd = createSelector(
  counterSelector,
  lastSubtractedNumberSelector,
  (counter, add) => counter + add
);

export const selectNumberAfterSubtract = createSelector(
  counterSelector,
  lastSubtractedNumberSelector,
  (counter, subtract) => counter - subtract
);
