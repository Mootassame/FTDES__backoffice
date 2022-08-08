import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/tags/importer/tagsImporterActions';
import fields from 'src/modules/tags/importer/tagsImporterFields';
import selectors from 'src/modules/tags/importer/tagsImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

const TagsImportPage = (props) => {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.tags.importer.hint'),
  );
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.tags.menu'), '/tags'],
          [i18n('entities.tags.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.tags.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
};

export default TagsImportPage;
