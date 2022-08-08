import { Row, Col } from 'antd';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/action/view/actionViewActions';
import selectors from 'src/modules/action/view/actionViewSelectors';
import ActionListToolbar from 'src/view/action/list/ActionListToolbar';
import ActionView from 'src/view/action/view/ActionView';
import ActionViewToolbar from 'src/view/action/view/ActionViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

const ActionPage = (props) => {
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
          [i18n('entities.action.menu')],
          [i18n('entities.action.view.title')],
        ]}
      />

      <ContentWrapper>
      <Row>
          <Col span={16}>
          <PageTitle>
          {i18n('entities.action.view.title')}
        </PageTitle>
            
          </Col>
          <Col span={8} style={{textAlign:"end"}}>   <ActionViewToolbar match={match} /></Col>
        </Row>
        

     

        <ActionView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
};

export default ActionPage;
