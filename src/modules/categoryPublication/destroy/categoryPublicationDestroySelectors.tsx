import { createSelector } from 'reselect';

const selectRaw = (state) => state.categoryPublication.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const categoryPublicationDestroySelectors = {
  selectLoading,
};

export default categoryPublicationDestroySelectors;
