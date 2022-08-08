import React from 'react';
import { i18n } from 'src/i18n';
import MouvementListFilter from 'src/view/mouvement/list/MouvementListFilter';
import MouvementListTable from 'src/view/mouvement/list/MouvementListTable';
import MouvementListToolbar from 'src/view/mouvement/list/MouvementListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';
import { Row, Col } from 'antd';

const MouvementListPage = (props) => {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.mouvement.menu')],
        ]}
      />

      <ContentWrapper>
      
      <Row>
        <Col span={16}>  <PageTitle>
                {i18n('entities.mouvement.list.title')}
              </PageTitle></Col>
        <Col span={8} style={{textAlign:"end"}}>  <MouvementListToolbar /></Col>
     </Row>  
      
        <MouvementListFilter />
        <MouvementListTable />
      </ContentWrapper>
    </>
  );
};

export default MouvementListPage;
