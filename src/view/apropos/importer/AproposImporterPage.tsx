import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/apropos/importer/aproposImporterActions';
import fields from 'src/modules/apropos/importer/aproposImporterFields';
import selectors from 'src/modules/apropos/importer/aproposImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

const AproposImportPage = (props) => {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.apropos.importer.hint'),
  );
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          // [i18n('entities.apropos.menu'), '/apropos'],
          [i18n('entities.apropos.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.apropos.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
};

export default AproposImportPage;
