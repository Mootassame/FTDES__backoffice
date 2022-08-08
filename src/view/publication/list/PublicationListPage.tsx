import React from 'react';
import { i18n } from 'src/i18n';
import PublicationListFilter from 'src/view/publication/list/PublicationListFilter';
import PublicationListTable from 'src/view/publication/list/PublicationListTable';
import PublicationListToolbar from 'src/view/publication/list/PublicationListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';
import { Col, Row } from 'antd';
import { useRouteMatch } from 'react-router-dom';

const PublicationListPage = (props) => {
  const match = useRouteMatch();
  const archive = Boolean(match.params.archive);
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.publication.menu')],
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
                <PublicationListToolbar />
              </Col>
            </Row>
            <PublicationListFilter filter={'archive'} />
            <PublicationListTable />
          </>
        ) : (
          <>
            <Row>
              <Col span={16}>
                <PageTitle>
                  {i18n('entities.publication.list.title')}
                </PageTitle>
              </Col>
              <Col span={8} style={{ textAlign: 'end' }}>
                <PublicationListToolbar />
              </Col>
            </Row>
            <PublicationListFilter />
            <PublicationListTable />
          </>
        )}
      </ContentWrapper>
    </>
  );
};

export default PublicationListPage;
