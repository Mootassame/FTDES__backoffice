import { Col, Row } from 'antd';
import React from 'react';
import { i18n } from 'src/i18n';
import CategoryAppelListFilter from 'src/view/categoryAppel/list/CategoryAppelListFilter';
import CategoryAppelListTable from 'src/view/categoryAppel/list/CategoryAppelListTable';
import CategoryAppelListToolbar from 'src/view/categoryAppel/list/CategoryAppelListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

const CategoryAppelListPage = (props) => {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.categoryAppel.menu')],
        ]}
      />

      <ContentWrapper>
        <Row>
          <Col span={16}> 
          <PageTitle>
          {i18n('entities.categoryAppel.list.title')}
        </PageTitle>
        </Col>
        <Col span={8} style={{textAlign:"end"}}><CategoryAppelListToolbar /></Col>
        </Row>
       

    
        <CategoryAppelListFilter />
        <CategoryAppelListTable />
      </ContentWrapper>
    </>
  );
};

export default CategoryAppelListPage;
