import { Col, Row } from 'antd';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/categoryPublication/view/categoryPublicationViewActions';
import selectors from 'src/modules/categoryPublication/view/categoryPublicationViewSelectors';
import CategoryPublicationView from 'src/view/categoryPublication/view/CategoryPublicationView';
import CategoryPublicationViewToolbar from 'src/view/categoryPublication/view/CategoryPublicationViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

const CategoryPublicationPage = (props) => {
  const dispatch = useDispatch();
  const match = useRouteMatch();

  const loading = useSelector(selectors.selectLoading);
  const record = useSelector(selectors.selectRecord);

  useEffect(() => {
    dispatch(actions.doFind(match.params.id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.categoryPublication.menu'), '/category-publication'],
          [i18n('entities.categoryPublication.view.title')],
        ]}
      />

      <ContentWrapper>
        <Row>
          <Col span={16}> <PageTitle>
          {i18n('entities.categoryPublication.view.title')}
        </PageTitle></Col>
          <Col span={8} style={{textAlign:"end"}}><CategoryPublicationViewToolbar match={match} /></Col>
        </Row>
       

        

        <CategoryPublicationView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
};

export default CategoryPublicationPage;
