import React from 'react';
import { i18n } from 'src/i18n';
import TagsListFilter from 'src/view/tags/list/TagsListFilter';
import TagsListTable from 'src/view/tags/list/TagsListTable';
import TagsListToolbar from 'src/view/tags/list/TagsListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';
import { Row, Col } from 'antd';

const TagsListPage = (props) => {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.tags.menu')],
        ]}
      />

      <ContentWrapper>
      <Row>
          <Col span={16}>
          <PageTitle>
          {i18n('entities.tags.list.title')}
        </PageTitle>
          </Col>
          <Col span={8}style={{textAlign:"end"}}>
          <TagsListToolbar />
          </Col>
        </Row>
        <TagsListFilter />
        <TagsListTable />
      </ContentWrapper>
    </>
  );
};

export default TagsListPage;
