import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import ViewWrapper, {
  viewItemLayout,
} from 'src/view/shared/styles/ViewWrapper';
import { i18n } from 'src/i18n';
import { Form } from 'antd';
import FilesViewer from 'src/view/shared/FilesViewer';
import ArtisteViewItem from 'src/view/artiste/view/ArtisteViewItem';

const EspaceArtistiqueView = (props) => {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <ViewWrapper>
      <fieldset>
        <legend>{i18n('common.informations')}</legend>
        {Boolean(record.artiste) && (
          <Form.Item
            {...viewItemLayout}
            label={i18n(
              'entities.espaceArtistique.fields.artiste',
            )}
          >
            <ArtisteViewItem value={record.artiste} />
          </Form.Item>
        )}

        {Boolean(record.supports) &&
          Boolean(record.supports.length) && (
            <Form.Item
              {...viewItemLayout}
              label={i18n(
                'entities.espaceArtistique.fields.supports',
              )}
            >
              <FilesViewer value={record.supports} />
            </Form.Item>
          )}

        {Boolean(record.titre) && (
          <Form.Item
            {...viewItemLayout}
            label={i18n(
              'entities.espaceArtistique.fields.titre',
            )}
          >
            {record.titre}
          </Form.Item>
        )}

        {Boolean(record.description) && (
          <Form.Item
            {...viewItemLayout}
            label={i18n(
              'entities.espaceArtistique.fields.description',
            )}
          >
            {record.description}
          </Form.Item>
        )}
      </fieldset>
    </ViewWrapper>
  );
};

export default EspaceArtistiqueView;
