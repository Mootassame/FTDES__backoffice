import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/evenement/importer/evenementImporterActions';
import fields from 'src/modules/evenement/importer/evenementImporterFields';
import selectors from 'src/modules/evenement/importer/evenementImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

const EvenementImportPage = (props) => {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.evenement.importer.hint'),
  );
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.evenement.menu'), '/evenement'],
          [i18n('entities.evenement.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.evenement.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
};

export default EvenementImportPage;
