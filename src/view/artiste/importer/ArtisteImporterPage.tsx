import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/artiste/importer/artisteImporterActions';
import fields from 'src/modules/artiste/importer/artisteImporterFields';
import selectors from 'src/modules/artiste/importer/artisteImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

const ArtisteImportPage = (props) => {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.artiste.importer.hint'),
  );
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.artiste.menu'), '/artiste'],
          [i18n('entities.artiste.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.artiste.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
};

export default ArtisteImportPage;
