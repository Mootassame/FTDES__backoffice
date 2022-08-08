import { Row, Col } from 'antd';
import React from 'react';
import { i18n } from 'src/i18n';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';
import { Tabs } from 'antd';
import MouvementListFilter from 'src/view/mouvement/list/MouvementListFilter';
import MouvementListTable from 'src/view/mouvement/list/MouvementListTable';
import SuicideListFilter from 'src/view/suicide/list/SuicideListFilter';
import SuicideListTable from 'src/view/suicide/list/SuicideListTable';
import ViolenceListFilter from 'src/view/violence/list/ViolenceListFilter';
import ViolenceListTable from 'src/view/violence/list/ViolenceListTable';

const ArchiveOSTListPage = (props) => {
  const { TabPane } = Tabs;
  const onChange = (key: string) => {};
  return (
    <>
      <Breadcrumb
        items={[
          [
            i18n('dashboard.menu'),
            '/',
            i18n('entities.archiveOST.menu'),
          ],
          // [i18n('entities.archiveOST.menu')],
        ]}
      />

      <ContentWrapper>
        <Tabs defaultActiveKey="1" onChange={onChange}>
          <TabPane
            tab={i18n('entities.mouvement.list.title')}
            key="1"
          >
            <MouvementListFilter />
            <MouvementListTable />
          </TabPane>
          <TabPane
            tab={i18n('entities.suicide.list.title')}
            key="2"
          >
            <SuicideListFilter />
            <SuicideListTable />
          </TabPane>
          <TabPane
            tab={i18n('entities.violence.list.title')}
            key="3"
          >
            <ViolenceListFilter />
            <ViolenceListTable />
          </TabPane>
        </Tabs>
      </ContentWrapper>
    </>
  );
};

export default ArchiveOSTListPage;
