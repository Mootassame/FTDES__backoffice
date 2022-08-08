import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/publication/importer/publicationImporterActions';
import fields from 'src/modules/publication/importer/publicationImporterFields';
import selectors from 'src/modules/publication/importer/publicationImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

const PublicationImportPage = (props) => {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.publication.importer.hint'),
  );
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.publication.menu'), '/publication'],
          [i18n('entities.publication.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.publication.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
};

export default PublicationImportPage;
