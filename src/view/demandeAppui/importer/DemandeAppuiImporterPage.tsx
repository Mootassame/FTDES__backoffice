import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/demandeAppui/importer/demandeAppuiImporterActions';
import fields from 'src/modules/demandeAppui/importer/demandeAppuiImporterFields';
import selectors from 'src/modules/demandeAppui/importer/demandeAppuiImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

const DemandeAppuiImportPage = (props) => {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.demandeAppui.importer.hint'),
  );
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.demandeAppui.menu'), '/demande-appui'],
          [i18n('entities.demandeAppui.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.demandeAppui.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
};

export default DemandeAppuiImportPage;
