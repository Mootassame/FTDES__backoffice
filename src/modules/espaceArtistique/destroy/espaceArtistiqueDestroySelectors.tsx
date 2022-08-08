import { createSelector } from 'reselect';

const selectRaw = (state) => state.espaceArtistique.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const espaceArtistiqueDestroySelectors = {
  selectLoading,
};

export default espaceArtistiqueDestroySelectors;
