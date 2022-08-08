import { createSelector } from 'reselect';

const selectRaw = (state) => state.demandeAppui.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const demandeAppuiDestroySelectors = {
  selectLoading,
};

export default demandeAppuiDestroySelectors;
