import React from 'react';
import { i18n } from 'src/i18n';
import ThematiqueListFilter from 'src/view/thematique/list/ThematiqueListFilter';
import ThematiqueListTable from 'src/view/thematique/list/ThematiqueListTable';
import ThematiqueListToolbar from 'src/view/thematique/list/ThematiqueListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';
import { Row, Col } from 'antd';
import { match } from 'assert';
import ThematiqueViewToolbar from 'src/view/thematique/view/ThematiqueViewToolbar';

const ThematiqueListPage = (props) => {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.thematique.menu')],
        ]}
      />

      <ContentWrapper>
      <Row>
          <Col span={16}>
          <PageTitle>
          {i18n('entities.thematique.list.title')}
        </PageTitle>
          </Col>
          <Col span={8}style={{textAlign:"end"}}>
          <ThematiqueListToolbar />
          </Col>
          </Row>

        
        <ThematiqueListFilter />
        <ThematiqueListTable />
      </ContentWrapper>
    </>
  );
};

export default ThematiqueListPage;
