import { Row, Col } from 'antd';
import React from 'react';
import { i18n } from 'src/i18n';
import ActionListFilter from 'src/view/action/list/ActionListFilter';
import ActionListTable from 'src/view/action/list/ActionListTable';
import ActionListToolbar from 'src/view/action/list/ActionListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

const ActionListPage = (props) => {
  return (
    <>
      <Breadcrumb
        items={[
          [
            i18n('dashboard.menu'),
            '/',
            i18n('entities.action.menu'),
          ],
          // [i18n('entities.action.menu')],
        ]}
      />

      <ContentWrapper>
      <Row>
          <Col span={16}><PageTitle>
          {i18n('entities.action.list.title')}
        </PageTitle></Col>
          <Col span={8} style={{textAlign:"end"}}>  <ActionListToolbar /></Col>
        </Row>
        <ActionListFilter />
        <ActionListTable />
      </ContentWrapper>
    </>
  );
};

export default ActionListPage;
