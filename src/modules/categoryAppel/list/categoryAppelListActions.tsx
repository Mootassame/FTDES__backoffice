import CategoryAppelService from 'src/modules/categoryAppel/categoryAppelService';
import selectors from 'src/modules/categoryAppel/list/categoryAppelListSelectors';
import { i18n } from 'src/i18n';
import exporterFields from 'src/modules/categoryAppel/list/categoryAppelListExporterFields';
import Errors from 'src/modules/shared/error/errors';
import Exporter from 'src/modules/shared/exporter/exporter';

const prefix = 'CATEGORYREPORT_LIST';

const categoryAppelListActions = {
  FETCH_STARTED: `${prefix}_FETCH_STARTED`,
  FETCH_SUCCESS: `${prefix}_FETCH_SUCCESS`,
  FETCH_ERROR: `${prefix}_FETCH_ERROR`,

  RESETED: `${prefix}_RESETED`,
  SELECTEDS_CHANGED: `${prefix}_SELECTEDS_CHANGED`,

  PAGINATION_CHANGED: `${prefix}_PAGINATION_CHANGED`,
  SORTER_CHANGED: `${prefix}_SORTER_CHANGED`,

  EXPORT_STARTED: `${prefix}_EXPORT_STARTED`,
  EXPORT_SUCCESS: `${prefix}_EXPORT_SUCCESS`,
  EXPORT_ERROR: `${prefix}_EXPORT_ERROR`,

  doChangeSelected(payload) {
    return {
      type: categoryAppelListActions.SELECTEDS_CHANGED,
      payload,
    };
  },

  doReset: () => async (dispatch) => {
    dispatch({
      type: categoryAppelListActions.RESETED,
    });

    dispatch(categoryAppelListActions.doFetch());
  },

  doExport: () => async (dispatch, getState) => {
    try {
      if (!exporterFields || !exporterFields.length) {
        throw new Error('exporterFields is required');
      }

      dispatch({
        type: categoryAppelListActions.EXPORT_STARTED,
      });

      const filter = selectors.selectFilter(getState());
      const response = await CategoryAppelService.list(
        filter,
        selectors.selectOrderBy(getState()),
        null,
        null,
      );

      new Exporter(
        exporterFields,
        i18n('entities.categoryAppel.exporterFileName'),
      ).transformAndExportAsExcelFile(response.rows);

      dispatch({
        type: categoryAppelListActions.EXPORT_SUCCESS,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: categoryAppelListActions.EXPORT_ERROR,
      });
    }
  },

  doChangePaginationAndSort:
    (pagination, sorter) => async (dispatch, getState) => {
      dispatch({
        type: categoryAppelListActions.PAGINATION_CHANGED,
        payload: pagination,
      });

      dispatch({
        type: categoryAppelListActions.SORTER_CHANGED,
        payload: sorter,
      });

      dispatch(
        categoryAppelListActions.doFetchCurrentFilter(),
      );
    },

  doFetchCurrentFilter:
    () => async (dispatch, getState) => {
      const filter = selectors.selectFilter(getState());
      const rawFilter = selectors.selectRawFilter(
        getState(),
      );
      dispatch(
        categoryAppelListActions.doFetch(
          filter,
          rawFilter,
          true,
        ),
      );
    },

  doFetch:
    (filter?, rawFilter?, keepPagination = false) =>
    async (dispatch, getState) => {
      try {
        dispatch({
          type: categoryAppelListActions.FETCH_STARTED,
          payload: { filter, rawFilter, keepPagination },
        });

        const response =
          await CategoryAppelService.list(
            filter,
            selectors.selectOrderBy(getState()),
            selectors.selectLimit(getState()),
            selectors.selectOffset(getState()),
          );

        dispatch({
          type: categoryAppelListActions.FETCH_SUCCESS,
          payload: {
            rows: response.rows,
            count: response.count,
          },
        });
      } catch (error) {
        Errors.handle(error);

        dispatch({
          type: categoryAppelListActions.FETCH_ERROR,
        });
      }
    },
};

export default categoryAppelListActions;
