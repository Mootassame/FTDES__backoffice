import { createSelector } from 'reselect';

const selectRaw = (state) => state.thematique.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const thematiqueDestroySelectors = {
  selectLoading,
};

export default thematiqueDestroySelectors;
