import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/thematique/importer/thematiqueImporterActions';
import fields from 'src/modules/thematique/importer/thematiqueImporterFields';
import selectors from 'src/modules/thematique/importer/thematiqueImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

const ThematiqueImportPage = (props) => {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.thematique.importer.hint'),
  );
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.thematique.menu'), '/thematique'],
          [i18n('entities.thematique.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.thematique.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
};

export default ThematiqueImportPage;
