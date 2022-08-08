import { createSelector } from 'reselect';

const selectRaw = (state) => state.publication.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const publicationDestroySelectors = {
  selectLoading,
};

export default publicationDestroySelectors;
