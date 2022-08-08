import { createSelector } from 'reselect';

const selectRaw = (state) => state.artiste.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const artisteDestroySelectors = {
  selectLoading,
};

export default artisteDestroySelectors;
