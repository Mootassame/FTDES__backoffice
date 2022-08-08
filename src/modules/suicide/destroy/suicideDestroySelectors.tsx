import { createSelector } from 'reselect';

const selectRaw = (state) => state.suicide.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const suicideDestroySelectors = {
  selectLoading,
};

export default suicideDestroySelectors;
