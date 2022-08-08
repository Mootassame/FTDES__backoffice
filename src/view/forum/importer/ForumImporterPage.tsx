import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/forum/importer/forumImporterActions';
import fields from 'src/modules/forum/importer/forumImporterFields';
import selectors from 'src/modules/forum/importer/forumImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

const ForumImportPage = (props) => {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.forum.importer.hint'),
  );
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.forum.menu'), '/forum'],
          [i18n('entities.forum.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.forum.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
};

export default ForumImportPage;
