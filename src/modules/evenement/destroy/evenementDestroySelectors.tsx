import { createSelector } from 'reselect';

const selectRaw = (state) => state.evenement.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const evenementDestroySelectors = {
  selectLoading,
};

export default evenementDestroySelectors;
