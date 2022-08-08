import { createSelector } from 'reselect';

const selectRaw = (state) => state.action.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const actionDestroySelectors = {
  selectLoading,
};

export default actionDestroySelectors;
