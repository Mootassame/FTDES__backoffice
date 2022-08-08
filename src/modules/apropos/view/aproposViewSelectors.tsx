import { createSelector } from 'reselect';

const selectRaw = (state) => state.apropos.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const aproposViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default aproposViewSelectors;
