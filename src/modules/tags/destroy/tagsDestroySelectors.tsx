import { createSelector } from 'reselect';

const selectRaw = (state) => state.tags.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const tagsDestroySelectors = {
  selectLoading,
};

export default tagsDestroySelectors;
