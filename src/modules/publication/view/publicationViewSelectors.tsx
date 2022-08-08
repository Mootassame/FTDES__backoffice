import { createSelector } from 'reselect';

const selectRaw = (state) => state.publication.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const publicationViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default publicationViewSelectors;
