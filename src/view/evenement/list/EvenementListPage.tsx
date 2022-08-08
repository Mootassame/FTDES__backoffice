import { Row, Col } from 'antd';
import React from 'react';
import { i18n } from 'src/i18n';
import EvenementListFilter from 'src/view/evenement/list/EvenementListFilter';
import EvenementListTable from 'src/view/evenement/list/EvenementListTable';
import EvenementListToolbar from 'src/view/evenement/list/EvenementListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

import { useRouteMatch } from 'react-router-dom';

const EvenementListPage = (props) => {
  const match = useRouteMatch();
  const archive = Boolean(match.params.archive);
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.evenement.menu')],
        ]}
      />

      <ContentWrapper>
        {archive ? (
          <>
            <Row>
              <Col span={16}>
                <PageTitle>
                  {i18n('common.archive')}
                </PageTitle>
              </Col>
              <Col span={8} style={{ textAlign: 'end' }}>
                <EvenementListToolbar />
              </Col>
            </Row>

            <EvenementListFilter filter={'archive'} />
            <EvenementListTable />
          </>
        ) : (
          <>
            <Row>
              <Col span={16}>
                <PageTitle>
                  {i18n('entities.evenement.list.title')}
                </PageTitle>
              </Col>
              <Col span={8} style={{ textAlign: 'end' }}>
                <EvenementListToolbar />
              </Col>
            </Row>

            <EvenementListFilter />
            <EvenementListTable />
          </>
        )}
      </ContentWrapper>
    </>
  );
};

export default EvenementListPage;
