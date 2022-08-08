import React from 'react';
import { i18n } from 'src/i18n';
import SuicideListFilter from 'src/view/suicide/list/SuicideListFilter';
import SuicideListTable from 'src/view/suicide/list/SuicideListTable';
import SuicideListToolbar from 'src/view/suicide/list/SuicideListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';
import { Row, Col } from 'antd';

const SuicideListPage = (props) => {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.suicide.menu')],
        ]}
      />

      <ContentWrapper>
      <Row>
          <Col span={16}>
          <PageTitle>
          {i18n('entities.suicide.list.title')}
        </PageTitle>

          </Col>
          <Col span={8}style={{textAlign:"end"}}>
         
        <SuicideListToolbar />
          </Col>
        </Row>
   
        <SuicideListFilter />
        <SuicideListTable />
      </ContentWrapper>
    </>
  );
};

export default SuicideListPage;
