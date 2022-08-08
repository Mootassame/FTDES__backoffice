import { createSelector } from 'reselect';

const selectRaw = (state) => state.mediatique.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const mediatiqueViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default mediatiqueViewSelectors;
