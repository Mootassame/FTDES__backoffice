import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/espaceArtistique/importer/espaceArtistiqueImporterActions';
import fields from 'src/modules/espaceArtistique/importer/espaceArtistiqueImporterFields';
import selectors from 'src/modules/espaceArtistique/importer/espaceArtistiqueImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

const EspaceArtistiqueImportPage = (props) => {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.espaceArtistique.importer.hint'),
  );
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.espaceArtistique.menu'), '/espace-artistique'],
          [i18n('entities.espaceArtistique.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.espaceArtistique.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
};

export default EspaceArtistiqueImportPage;
