import { Row, Col } from 'antd';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/evenement/view/evenementViewActions';
import selectors from 'src/modules/evenement/view/evenementViewSelectors';
import EvenementView from 'src/view/evenement/view/EvenementView';
import EvenementViewToolbar from 'src/view/evenement/view/EvenementViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

const EvenementPage = (props) => {
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
          [i18n('entities.evenement.menu'), '/evenement'],
          [i18n('entities.evenement.view.title')],
        ]}
      />

      <ContentWrapper>
      <Row>
          <Col span={16}>
          <PageTitle>
          {i18n('entities.evenement.view.title')}
        </PageTitle>
          </Col>
          <Col span={8}style={{textAlign:"end"}}>
          <EvenementViewToolbar match={match} />
          </Col>
        </Row>
       
    

    

        <EvenementView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
};

export default EvenementPage;
