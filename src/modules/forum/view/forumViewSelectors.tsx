import { createSelector } from 'reselect';

const selectRaw = (state) => state.forum.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const forumViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default forumViewSelectors;
