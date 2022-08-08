import { createSelector } from 'reselect';

const selectRaw = (state) => state.action.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const actionViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default actionViewSelectors;
