import { createSelector } from 'reselect';

const selectRaw = (state) => state.mouvement.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const mouvementDestroySelectors = {
  selectLoading,
};

export default mouvementDestroySelectors;
