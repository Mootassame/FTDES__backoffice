import React from 'react';
import { i18n } from 'src/i18n';
import MediatiqueListFilter from 'src/view/mediatique/list/MediatiqueListFilter';
import MediatiqueListTable from 'src/view/mediatique/list/MediatiqueListTable';
import MediatiqueListToolbar from 'src/view/mediatique/list/MediatiqueListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';
import { Row, Col } from 'antd';

const MediatiqueListPage = (props) => {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.mediatique.menu')],
        ]}
      />

      <ContentWrapper>
        <Row>
          <Col span={16}>
            <PageTitle>
              {i18n('entities.mediatique.list.title')}
            </PageTitle>
          </Col>
          <Col span={8} style={{ textAlign: 'end' }}>
            <MediatiqueListToolbar />
          </Col>
        </Row>

        <MediatiqueListFilter />
        <MediatiqueListTable />
      </ContentWrapper>
    </>
  );
};

export default MediatiqueListPage;
