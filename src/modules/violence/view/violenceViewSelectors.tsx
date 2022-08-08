import { createSelector } from 'reselect';

const selectRaw = (state) => state.violence.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const violenceViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default violenceViewSelectors;
