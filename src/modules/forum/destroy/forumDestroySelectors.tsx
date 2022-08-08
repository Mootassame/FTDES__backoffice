import { createSelector } from 'reselect';

const selectRaw = (state) => state.forum.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const forumDestroySelectors = {
  selectLoading,
};

export default forumDestroySelectors;
