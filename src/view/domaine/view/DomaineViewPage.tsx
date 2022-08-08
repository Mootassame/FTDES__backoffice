import { Row, Col } from 'antd';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/domaine/view/domaineViewActions';
import selectors from 'src/modules/domaine/view/domaineViewSelectors';
import DomaineView from 'src/view/domaine/view/DomaineView';
import DomaineViewToolbar from 'src/view/domaine/view/DomaineViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

const DomainePage = (props) => {
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
          [i18n('entities.domaine.menu'), '/domaine'],
          [i18n('entities.domaine.view.title')],
        ]}
      />

      <ContentWrapper>
      <Row>
          <Col span={16}>
          <PageTitle>
          {i18n('entities.domaine.view.title')}
        </PageTitle>
          </Col>
          <Col span={8}style={{textAlign:"end"}}>
          <DomaineViewToolbar match={match} />
          </Col>
        </Row>

        <DomaineView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
};

export default DomainePage;
