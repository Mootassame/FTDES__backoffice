import { createSelector } from 'reselect';

const selectRaw = (state) => state.demandeAppui.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const demandeAppuiViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default demandeAppuiViewSelectors;
