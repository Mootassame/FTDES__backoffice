import { createSelector } from 'reselect';

const selectRaw = (state) => state.categoryEvenement.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const categoryEvenementViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default categoryEvenementViewSelectors;
