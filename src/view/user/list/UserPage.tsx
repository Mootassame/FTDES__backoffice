import { Row, Col } from 'antd';
import React from 'react';
import { i18n } from 'src/i18n';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';
import UserFilter from 'src/view/user/list/UserFilter';
import UserTable from 'src/view/user/list/UserTable';
import UserToolbar from 'src/view/user/list/UserToolbar';

const UserPage = (props) => {
  return (
    <>
      <Breadcrumb
        header
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('user.menu')],
        ]}
      />

      <ContentWrapper>
        <Row>
          <Col span={16}><PageTitle>{i18n('user.title')}</PageTitle></Col>
          <Col span={8} style={{textAlign:"end"}}><UserToolbar /></Col>
        </Row>
        

        
        <UserFilter />
        <UserTable />
      </ContentWrapper>
    </>
  );
};

export default UserPage;
