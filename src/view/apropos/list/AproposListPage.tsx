import React from 'react';
import { i18n } from 'src/i18n';
import AproposListFilter from 'src/view/apropos/list/AproposListFilter';
import AproposListTable from 'src/view/apropos/list/AproposListTable';
import AproposListToolbar from 'src/view/apropos/list/AproposListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

const AproposListPage = (props) => {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.apropos.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.apropos.list.title')}
        </PageTitle>

        <AproposListToolbar />
        <AproposListFilter />
        <AproposListTable />
      </ContentWrapper>
    </>
  );
};

export default AproposListPage;
