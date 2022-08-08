import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/mouvement/view/mouvementViewActions';
import selectors from 'src/modules/mouvement/view/mouvementViewSelectors';
import MouvementView from 'src/view/mouvement/view/MouvementView';
import MouvementViewToolbar from 'src/view/mouvement/view/MouvementViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';
import { Row, Col } from 'antd';

const MouvementPage = (props) => {
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
          [i18n('entities.mouvement.menu'), '/mouvement'],
          [i18n('entities.mouvement.view.title')],
        ]}
      />

      <ContentWrapper>
      <Row>
        <Col span={16}> 
        <PageTitle>
          {i18n('entities.mouvement.view.title')}
        </PageTitle>
        </Col>
        <Col span={8} style={{textAlign:"end"}}> <MouvementViewToolbar match={match} /></Col>
     </Row>  
        <MouvementView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
};

export default MouvementPage;
