import { Row, Col } from 'antd';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/demandeAppui/view/demandeAppuiViewActions';
import selectors from 'src/modules/demandeAppui/view/demandeAppuiViewSelectors';
import DemandeAppuiView from 'src/view/demandeAppui/view/DemandeAppuiView';
import DemandeAppuiViewToolbar from 'src/view/demandeAppui/view/DemandeAppuiViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

const DemandeAppuiPage = (props) => {
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
          [i18n('entities.demandeAppui.menu'), '/demande-appui'],
          [i18n('entities.demandeAppui.view.title')],
        ]}
      />

      <ContentWrapper>
      <Row>
          <Col span={16}>
          <PageTitle>
          {i18n('entities.demandeAppui.view.title')}
        </PageTitle>
          </Col>
          <Col span={8} style={{textAlign:"end"}}>   <DemandeAppuiViewToolbar match={match} /></Col>
        </Row>
       

     

        <DemandeAppuiView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
};

export default DemandeAppuiPage;
