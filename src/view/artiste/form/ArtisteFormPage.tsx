import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/artiste/form/artisteFormActions';
import selectors from 'src/modules/artiste/form/artisteFormSelectors';
import { getHistory } from 'src/modules/store';
import ArtisteForm from 'src/view/artiste/form/ArtisteForm';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import Spinner from 'src/view/shared/Spinner';
import PageTitle from 'src/view/shared/styles/PageTitle';

const ArtisteFormPage = (props) => {
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
    ? i18n('entities.artiste.edit.title')
    : i18n('entities.artiste.new.title');

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
          [i18n('entities.artiste.menu'), '/artiste'],
          [title],
        ]}
      />

      <ContentWrapper>
        {initLoading && <Spinner />}

        {dispatched && !initLoading && (
          <ArtisteForm
            title={title}
            saveLoading={saveLoading}
            record={record}
            isEditing={isEditing}
            onSubmit={doSubmit}
            onCancel={() => getHistory().push('/artiste')}
          />
        )}
      </ContentWrapper>
    </>
  );
};

export default ArtisteFormPage;
