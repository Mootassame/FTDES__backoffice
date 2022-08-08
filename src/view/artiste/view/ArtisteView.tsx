import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import ViewWrapper, {
  viewItemLayout,
} from 'src/view/shared/styles/ViewWrapper';
import { i18n } from 'src/i18n';
import { Form } from 'antd';
import EspaceArtistiqueViewItem from 'src/view/espaceArtistique/view/EspaceArtistiqueViewItem';
import DomaineViewItem from 'src/view/domaine/view/DomaineViewItem';

const ArtisteView = (props) => {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <ViewWrapper>
      <fieldset>
        <legend>{i18n('common.informations')}</legend>
        {Boolean(record.nom) && (
          <Form.Item
            {...viewItemLayout}
            label={i18n('entities.artiste.fields.nom')}
          >
            {record.nom}
          </Form.Item>
        )}

        {Boolean(record.prenom) && (
          <Form.Item
            {...viewItemLayout}
            label={i18n('entities.artiste.fields.prenom')}
          >
            {record.prenom}
          </Form.Item>
        )}

        {Boolean(record.domaine) && (
          <Form.Item
            {...viewItemLayout}
            label={i18n('entities.artiste.fields.domaine')}
          >
            <DomaineViewItem value={record.domaine} />
          </Form.Item>
        )}

        {Boolean(record.adresse) && (
          <Form.Item
            {...viewItemLayout}
            label={i18n('entities.artiste.fields.adresse')}
          >
            {record.adresse}
          </Form.Item>
        )}

        {Boolean(record.email) && (
          <Form.Item
            {...viewItemLayout}
            label={i18n('entities.artiste.fields.email')}
          >
            {record.email}
          </Form.Item>
        )}

        {Boolean(record.phoneNumber) && (
          <Form.Item
            {...viewItemLayout}
            label={i18n(
              'entities.artiste.fields.phoneNumber',
            )}
          >
            {record.phoneNumber}
          </Form.Item>
        )}

        {Boolean(record.espaceArtistique) && (
          <Form.Item
            {...viewItemLayout}
            label={i18n(
              'entities.artiste.fields.espaceArtistique',
            )}
          >
            <EspaceArtistiqueViewItem
              value={record.espaceArtistique}
            />
          </Form.Item>
        )}
      </fieldset>
    </ViewWrapper>
  );
};

export default ArtisteView;
