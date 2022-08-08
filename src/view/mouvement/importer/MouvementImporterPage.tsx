import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/mouvement/importer/mouvementImporterActions';
import fields from 'src/modules/mouvement/importer/mouvementImporterFields';
import selectors from 'src/modules/mouvement/importer/mouvementImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

const MouvementImportPage = (props) => {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.mouvement.importer.hint'),
  );
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.mouvement.menu'), '/mouvement'],
          [i18n('entities.mouvement.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.mouvement.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
};

export default MouvementImportPage;
