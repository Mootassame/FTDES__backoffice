import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/violence/view/violenceViewActions';
import selectors from 'src/modules/violence/view/violenceViewSelectors';
import ViolenceView from 'src/view/violence/view/ViolenceView';
import ViolenceViewToolbar from 'src/view/violence/view/ViolenceViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';
import { Row, Col } from 'antd';

const ViolencePage = (props) => {
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
          [i18n('entities.violence.menu'), '/violence'],
          [i18n('entities.violence.view.title')],
        ]}
      />

      <ContentWrapper>
      <Row>
          <Col span={16}>
          <PageTitle>
          {i18n('entities.violence.view.title')}
        </PageTitle>
          </Col>
          <Col span={8}style={{textAlign:"end"}}>
          <ViolenceViewToolbar match={match} />
          </Col>
        </Row>   
        <ViolenceView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
};

export default ViolencePage;
