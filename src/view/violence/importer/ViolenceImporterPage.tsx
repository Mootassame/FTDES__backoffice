import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/violence/importer/violenceImporterActions';
import fields from 'src/modules/violence/importer/violenceImporterFields';
import selectors from 'src/modules/violence/importer/violenceImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

const ViolenceImportPage = (props) => {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.violence.importer.hint'),
  );
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.violence.menu'), '/violence'],
          [i18n('entities.violence.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.violence.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
};

export default ViolenceImportPage;
