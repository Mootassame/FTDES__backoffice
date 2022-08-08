import { createSelector } from 'reselect';

const selectRaw = (state) =>
  state.categoryAppel.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const categoryAppelDestroySelectors = {
  selectLoading,
};

export default categoryAppelDestroySelectors;
