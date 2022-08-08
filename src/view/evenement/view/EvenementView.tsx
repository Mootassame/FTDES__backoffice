import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import ViewWrapper, {
  viewItemLayout,
} from 'src/view/shared/styles/ViewWrapper';
import { i18n } from 'src/i18n';
import { Form } from 'antd';
import FilesViewer from 'src/view/shared/FilesViewer';
import ThematiqueViewItem from 'src/view/thematique/view/ThematiqueViewItem';
import CategoryEvenementViewItem from 'src/view/categoryEvenement/view/CategoryEvenementViewItem';

const EvenementView = (props) => {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <ViewWrapper>
      <fieldset>
        <legend>{i18n('common.informations')}</legend>
        {Boolean(record.thematique) && (
          <Form.Item
            {...viewItemLayout}
            label={i18n(
              'entities.evenement.fields.thematique',
            )}
          >
            <ThematiqueViewItem value={record.thematique} />
          </Form.Item>
        )}

        {Boolean(record.category) && (
          <Form.Item
            {...viewItemLayout}
            label={i18n(
              'entities.evenement.fields.categorie',
            )}
          >
            <CategoryEvenementViewItem
              value={record.category}
            />
          </Form.Item>
        )}

        {Boolean(record.type) && (
          <Form.Item
            {...viewItemLayout}
            label={i18n('entities.evenement.fields.type')}
          >
            {i18n(
              `entities.evenement.enumerators.type.${record.type}`,
            )}
          </Form.Item>
        )}

        {Boolean(record.description) && (
          <Form.Item
            {...viewItemLayout}
            label={i18n(
              'entities.evenement.fields.description',
            )}
          >
            {record.description}
          </Form.Item>
        )}

        {Boolean(record.date) && (
          <Form.Item
            {...viewItemLayout}
            label={i18n('entities.evenement.fields.date')}
          >
            {record.date}
          </Form.Item>
        )}

        {Boolean(record.statut) && (
          <Form.Item
            {...viewItemLayout}
            label={i18n('entities.evenement.fields.statut')}
          >
            {i18n(
              `entities.evenement.enumerators.statut.${record.statut}`,
            )}
          </Form.Item>
        )}

        {Boolean(record.emplacement) && (
          <Form.Item
            {...viewItemLayout}
            label={i18n(
              'entities.evenement.fields.emplacement',
            )}
          >
            {record.emplacement}
          </Form.Item>
        )}
        {Boolean(record.supports) &&
          Boolean(record.supports.length) && (
            <Form.Item
              {...viewItemLayout}
              label={i18n(
                'entities.evenement.fields.supports',
              )}
            >
              <FilesViewer value={record.supports} />
            </Form.Item>
          )}
      </fieldset>
    </ViewWrapper>
  );
};

export default EvenementView;
