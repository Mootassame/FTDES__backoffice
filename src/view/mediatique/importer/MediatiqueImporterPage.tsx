import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/mediatique/importer/mediatiqueImporterActions';
import fields from 'src/modules/mediatique/importer/mediatiqueImporterFields';
import selectors from 'src/modules/mediatique/importer/mediatiqueImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

const MediatiqueImportPage = (props) => {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.mediatique.importer.hint'),
  );
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.mediatique.menu'), '/mediatique'],
          [i18n('entities.mediatique.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.mediatique.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
};

export default MediatiqueImportPage;
