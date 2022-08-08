import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/categoryAppel/importer/categoryAppelImporterActions';
import fields from 'src/modules/categoryAppel/importer/categoryAppelImporterFields';
import selectors from 'src/modules/categoryAppel/importer/categoryAppelImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

const CategoryAppelImportPage = (props) => {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.categoryAppel.importer.hint'),
  );
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [
            i18n('entities.categoryAppel.menu'),
            '/category-appel',
          ],
          [
            i18n(
              'entities.categoryAppel.importer.title',
            ),
          ],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n(
            'entities.categoryAppel.importer.title',
          )}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
};

export default CategoryAppelImportPage;
