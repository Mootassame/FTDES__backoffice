import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import ViewWrapper, {
  viewItemLayout,
} from 'src/view/shared/styles/ViewWrapper';
import { i18n } from 'src/i18n';
import { Form } from 'antd';
import ActionViewItem from 'src/view/action/view/ActionViewItem';

const SuicideView = (props) => {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <ViewWrapper>
      <fieldset>
        <legend>{i18n('common.informations')}</legend>
        {Boolean(record.date) && (
          <Form.Item
            {...viewItemLayout}
            label={i18n('entities.suicide.fields.date')}
          >
            {record.date}
          </Form.Item>
        )}

        {Boolean(record.region) && (
          <Form.Item
            {...viewItemLayout}
            label={i18n('entities.suicide.fields.region')}
          >
            {i18n(
              `entities.suicide.enumerators.region.${record.region}`,
            )}
          </Form.Item>
        )}

        {Boolean(record.age) && (
          <Form.Item
            {...viewItemLayout}
            label={i18n('entities.suicide.fields.age')}
          >
            {record.age}
          </Form.Item>
        )}

        {Boolean(record.genre) && (
          <Form.Item
            {...viewItemLayout}
            label={i18n('entities.suicide.fields.genre')}
          >
            {i18n(
              `entities.suicide.enumerators.genre.${record.genre}`,
            )}
          </Form.Item>
        )}

        {Boolean(record.maniere) && (
          <Form.Item
            {...viewItemLayout}
            label={i18n('entities.suicide.fields.maniere')}
          >
            {i18n(
              `entities.suicide.enumerators.maniere.${record.maniere}`,
            )}
          </Form.Item>
        )}

        {Boolean(record.raison) && (
          <Form.Item
            {...viewItemLayout}
            label={i18n('entities.suicide.fields.raison')}
          >
            {i18n(
              `entities.suicide.enumerators.raison.${record.raison}`,
            )}
          </Form.Item>
        )}

        {Boolean(record.espace) && (
          <Form.Item
            {...viewItemLayout}
            label={i18n('entities.suicide.fields.espace')}
          >
            {i18n(
              `entities.suicide.enumerators.espace.${record.espace}`,
            )}
          </Form.Item>
        )}

        {Boolean(record.cible) && (
          <Form.Item
            {...viewItemLayout}
            label={i18n('entities.suicide.fields.cible')}
          >
            {i18n(
              `entities.suicide.enumerators.cible.${record.cible}`,
            )}
          </Form.Item>
        )}

        {Boolean(record.deces) && (
          <Form.Item
            {...viewItemLayout}
            label={i18n('entities.suicide.fields.deces')}
          >
            {i18n(
              `entities.suicide.enumerators.deces.${record.deces}`,
            )}
          </Form.Item>
        )}

        {Boolean(record.description) && (
          <Form.Item
            {...viewItemLayout}
            label={i18n(
              'entities.suicide.fields.description',
            )}
          >
            {record.description}
          </Form.Item>
        )}

        {Boolean(record.consequence) && (
          <Form.Item
            {...viewItemLayout}
            label={i18n(
              'entities.suicide.fields.consequence',
            )}
          >
            {record.consequence}
          </Form.Item>
        )}

        {Boolean(record.action) && (
          <Form.Item
            {...viewItemLayout}
            label={i18n('entities.suicide.fields.action')}
          >
            <ActionViewItem value={record.action} />
          </Form.Item>
        )}
        {Boolean(record.statut) && (
          <Form.Item
            {...viewItemLayout}
            label={i18n('entities.suicide.fields.statut')}
          >
            {i18n(
              `entities.suicide.enumerators.statut.${record.statut}`,
            )}
          </Form.Item>
        )}
      </fieldset>
    </ViewWrapper>
  );
};

export default SuicideView;
