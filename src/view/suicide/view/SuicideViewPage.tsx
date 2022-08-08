import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/suicide/view/suicideViewActions';
import selectors from 'src/modules/suicide/view/suicideViewSelectors';
import SuicideView from 'src/view/suicide/view/SuicideView';
import SuicideViewToolbar from 'src/view/suicide/view/SuicideViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';
import { Row, Col } from 'antd';

const SuicidePage = (props) => {
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
          [i18n('entities.suicide.menu'), '/suicide'],
          [i18n('entities.suicide.view.title')],
        ]}
      />

      <ContentWrapper>
      <Row>
          <Col span={16}>
          <PageTitle>
          {i18n('entities.suicide.view.title')}
        </PageTitle>
          </Col>
          <Col span={8}style={{textAlign:"end"}}>
          <SuicideViewToolbar match={match} />
          </Col>
        </Row>
       
      


        <SuicideView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
};

export default SuicidePage;
