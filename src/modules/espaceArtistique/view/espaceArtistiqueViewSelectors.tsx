import { createSelector } from 'reselect';

const selectRaw = (state) => state.espaceArtistique.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const espaceArtistiqueViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default espaceArtistiqueViewSelectors;
