import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/categoryPublication/importer/categoryPublicationImporterActions';
import fields from 'src/modules/categoryPublication/importer/categoryPublicationImporterFields';
import selectors from 'src/modules/categoryPublication/importer/categoryPublicationImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

const CategoryPublicationImportPage = (props) => {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.categoryPublication.importer.hint'),
  );
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.categoryPublication.menu'), '/category-publication'],
          [i18n('entities.categoryPublication.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.categoryPublication.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
};

export default CategoryPublicationImportPage;
