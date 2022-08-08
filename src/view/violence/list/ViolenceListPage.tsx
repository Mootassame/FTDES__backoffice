import React from 'react';
import { i18n } from 'src/i18n';
import ViolenceListFilter from 'src/view/violence/list/ViolenceListFilter';
import ViolenceListTable from 'src/view/violence/list/ViolenceListTable';
import ViolenceListToolbar from 'src/view/violence/list/ViolenceListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';
import { Row, Col } from 'antd';

const ViolenceListPage = (props) => {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.violence.menu')],
        ]}
      />

      <ContentWrapper>
      <Row>
          <Col span={16}>
          <PageTitle>
          {i18n('entities.violence.list.title')}
        </PageTitle>
          </Col>
          <Col span={8}style={{textAlign:"end"}}>
          <ViolenceListToolbar />
          </Col>
        </Row>   
        <ViolenceListFilter />
        <ViolenceListTable />
      </ContentWrapper>
    </>
  );
};

export default ViolenceListPage;
