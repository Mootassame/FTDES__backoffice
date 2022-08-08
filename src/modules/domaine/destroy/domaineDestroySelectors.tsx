import { createSelector } from 'reselect';

const selectRaw = (state) => state.domaine.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const domaineDestroySelectors = {
  selectLoading,
};

export default domaineDestroySelectors;
