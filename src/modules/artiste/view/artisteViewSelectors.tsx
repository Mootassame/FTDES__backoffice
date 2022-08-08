import { createSelector } from 'reselect';

const selectRaw = (state) => state.artiste.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const artisteViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default artisteViewSelectors;
