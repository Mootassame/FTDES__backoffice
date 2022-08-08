import { Col, Row } from 'antd';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/categoryEvenement/view/categoryEvenementViewActions';
import selectors from 'src/modules/categoryEvenement/view/categoryEvenementViewSelectors';
import CategoryEvenementView from 'src/view/categoryEvenement/view/CategoryEvenementView';
import CategoryEvenementViewToolbar from 'src/view/categoryEvenement/view/CategoryEvenementViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

const CategoryEvenementPage = (props) => {
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
          [
            i18n('entities.categoryEvenement.menu'),
            '/category-evenement',
          ],
          [i18n('entities.categoryEvenement.view.title')],
        ]}
      />

      <ContentWrapper>
        <Row>
          <Col span={16}>
          <PageTitle>
          {i18n('entities.categoryEvenement.view.title')}
        </PageTitle>
          </Col>
          <Col span={8} style={{textAlign:"end"}}>
          <CategoryEvenementViewToolbar match={match} />
          </Col>
        </Row>
        <CategoryEvenementView
          loading={loading}
          record={record}
        />
      </ContentWrapper>
    </>
  );
};

export default CategoryEvenementPage;
