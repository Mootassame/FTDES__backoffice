import { createSelector } from 'reselect';

const selectRaw = (state) => state.mediatique.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const mediatiqueDestroySelectors = {
  selectLoading,
};

export default mediatiqueDestroySelectors;
