import { createSelector } from 'reselect';

const selectRaw = (state) => state.mouvement.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const mouvementViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default mouvementViewSelectors;
