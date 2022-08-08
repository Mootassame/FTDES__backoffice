import { Row, Col } from 'antd';
import React from 'react';
import { i18n } from 'src/i18n';
import ForumListFilter from 'src/view/forum/list/ForumListFilter';
import ForumListTable from 'src/view/forum/list/ForumListTable';
import ForumListToolbar from 'src/view/forum/list/ForumListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

const ForumListPage = (props) => {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.forum.menu')],
        ]}
      />

      <ContentWrapper>
      <Row>
          <Col span={16}>   <PageTitle>
          {i18n('entities.forum.list.title')}
        </PageTitle></Col>
          <Col span={8}style={{textAlign:"end"}}><ForumListToolbar /></Col>
        </Row>
     

        
        <ForumListFilter />
        <ForumListTable />
      </ContentWrapper>
    </>
  );
};

export default ForumListPage;
