import { createSelector } from 'reselect';

const selectRaw = (state) => state.evenement.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const evenementViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default evenementViewSelectors;
