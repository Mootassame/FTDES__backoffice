import { createSelector } from 'reselect';

const selectRaw = (state) => state.tags.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const tagsViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default tagsViewSelectors;
