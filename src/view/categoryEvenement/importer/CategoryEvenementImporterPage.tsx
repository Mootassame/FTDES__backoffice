import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/categoryEvenement/importer/categoryEvenementImporterActions';
import fields from 'src/modules/categoryEvenement/importer/categoryEvenementImporterFields';
import selectors from 'src/modules/categoryEvenement/importer/categoryEvenementImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

const CategoryEvenementImportPage = (props) => {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.categoryEvenement.importer.hint'),
  );
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [
            i18n('entities.categoryEvenement.menu'),
            '/category-evenement',
          ],
          [
            i18n(
              'entities.categoryEvenement.importer.title',
            ),
          ],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n(
            'entities.categoryEvenement.importer.title',
          )}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
};

export default CategoryEvenementImportPage;
