import { createSelector } from 'reselect';

const selectRaw = (state) => state.apropos.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const aproposDestroySelectors = {
  selectLoading,
};

export default aproposDestroySelectors;
