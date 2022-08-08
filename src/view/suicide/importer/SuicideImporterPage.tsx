import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/suicide/importer/suicideImporterActions';
import fields from 'src/modules/suicide/importer/suicideImporterFields';
import selectors from 'src/modules/suicide/importer/suicideImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

const SuicideImportPage = (props) => {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.suicide.importer.hint'),
  );
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.suicide.menu'), '/suicide'],
          [i18n('entities.suicide.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.suicide.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
};

export default SuicideImportPage;
