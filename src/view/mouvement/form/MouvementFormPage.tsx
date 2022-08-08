import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/mouvement/form/mouvementFormActions';
import selectors from 'src/modules/mouvement/form/mouvementFormSelectors';
import { getHistory } from 'src/modules/store';
import MouvementForm from 'src/view/mouvement/form/MouvementForm';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import Spinner from 'src/view/shared/Spinner';
import PageTitle from 'src/view/shared/styles/PageTitle';

const MouvementFormPage = (props) => {
  const [dispatched, setDispatched] = useState(false);
  const dispatch = useDispatch();
  const match = useRouteMatch();

  const initLoading = useSelector(
    selectors.selectInitLoading,
  );
  const saveLoading = useSelector(
    selectors.selectSaveLoading,
  );
  const record = useSelector(selectors.selectRecord);

  const isEditing = Boolean(match.params.id);
  const title = isEditing
    ? i18n('entities.mouvement.edit.title')
    : i18n('entities.mouvement.new.title');

  useEffect(() => {
    dispatch(actions.doInit(match.params.id));
    setDispatched(true);
  }, [dispatch, match.params.id]);

  const doSubmit = (id, data) => {
    if (isEditing) {
      dispatch(actions.doUpdate(id, data));
    } else {
      dispatch(actions.doCreate(data));
    }
  };

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.mouvement.menu'), '/mouvement'],
          [title],
        ]}
      />

      <ContentWrapper>
        {initLoading && <Spinner />}

        {dispatched && !initLoading && (
          <MouvementForm
            title={title}
            saveLoading={saveLoading}
            record={record}
            isEditing={isEditing}
            onSubmit={doSubmit}
            onCancel={() => getHistory().push('/mouvement')}
          />
        )}
      </ContentWrapper>
    </>
  );
};

export default MouvementFormPage;
