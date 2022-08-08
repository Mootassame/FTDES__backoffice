import EspaceArtistiqueService from 'src/modules/espaceArtistique/espaceArtistiqueService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'ESPACEARTISTIQUE_FORM';

const espaceArtistiqueFormActions = {
  INIT_STARTED: `${prefix}_INIT_STARTED`,
  INIT_SUCCESS: `${prefix}_INIT_SUCCESS`,
  INIT_ERROR: `${prefix}_INIT_ERROR`,

  CREATE_STARTED: `${prefix}_CREATE_STARTED`,
  CREATE_SUCCESS: `${prefix}_CREATE_SUCCESS`,
  CREATE_ERROR: `${prefix}_CREATE_ERROR`,

  UPDATE_STARTED: `${prefix}_UPDATE_STARTED`,
  UPDATE_SUCCESS: `${prefix}_UPDATE_SUCCESS`,
  UPDATE_ERROR: `${prefix}_UPDATE_ERROR`,

  doInit: (id) => async (dispatch) => {
    try {
      dispatch({
        type: espaceArtistiqueFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await EspaceArtistiqueService.find(id);
      }

      dispatch({
        type: espaceArtistiqueFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: espaceArtistiqueFormActions.INIT_ERROR,
      });

      getHistory().push('/espace-artistique');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: espaceArtistiqueFormActions.CREATE_STARTED,
      });

      await EspaceArtistiqueService.create(values);

      dispatch({
        type: espaceArtistiqueFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.espaceArtistique.create.success'),
      );

      getHistory().push('/espace-artistique');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: espaceArtistiqueFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: espaceArtistiqueFormActions.UPDATE_STARTED,
      });

      await EspaceArtistiqueService.update(id, values);

      dispatch({
        type: espaceArtistiqueFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.espaceArtistique.update.success'),
      );

      getHistory().push('/espace-artistique');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: espaceArtistiqueFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default espaceArtistiqueFormActions;
