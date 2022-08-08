import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/categoryPublication/form/categoryPublicationFormActions';
import selectors from 'src/modules/categoryPublication/form/categoryPublicationFormSelectors';
import { getHistory } from 'src/modules/store';
import CategoryPublicationForm from 'src/view/categoryPublication/form/CategoryPublicationForm';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import Spinner from 'src/view/shared/Spinner';
import PageTitle from 'src/view/shared/styles/PageTitle';

const CategoryPublicationFormPage = (props) => {
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
    ? i18n('entities.categoryPublication.edit.title')
    : i18n('entities.categoryPublication.new.title');

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
          [
            i18n('entities.categoryPublication.menu'),
            '/category-publication',
          ],
          [title],
        ]}
      />

      <ContentWrapper>
        {initLoading && <Spinner />}

        {dispatched && !initLoading && (
          <CategoryPublicationForm
            title={title}
            saveLoading={saveLoading}
            record={record}
            isEditing={isEditing}
            onSubmit={doSubmit}
            onCancel={() =>
              getHistory().push('/category-publication')
            }
          />
        )}
      </ContentWrapper>
    </>
  );
};

export default CategoryPublicationFormPage;
