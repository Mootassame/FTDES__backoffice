import { createSelector } from 'reselect';

const selectRaw = (state) =>
  state.categoryEvenement.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const categoryEvenementDestroySelectors = {
  selectLoading,
};

export default categoryEvenementDestroySelectors;
