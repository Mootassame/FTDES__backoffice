import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import ViewWrapper, {
  viewItemLayout,
} from 'src/view/shared/styles/ViewWrapper';
import { i18n } from 'src/i18n';
import { Form } from 'antd';

const ForumView = (props) => {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <ViewWrapper>
      <fieldset>
        <legend>{i18n('common.informations')}</legend>
        {Boolean(record.titre) && (
          <Form.Item
            {...viewItemLayout}
            label={i18n('entities.forum.fields.titre')}
          >
            {record.titre}
          </Form.Item>
        )}

        {Boolean(record.sujet) && (
          <Form.Item
            {...viewItemLayout}
            label={i18n('entities.forum.fields.sujet')}
          >
            {record.sujet}
          </Form.Item>
        )}

        {Boolean(record.visibilite) && (
          <Form.Item
            {...viewItemLayout}
            label={i18n('entities.forum.fields.visibilite')}
          >
            {i18n(
              `entities.forum.enumerators.visibilite.${record.visibilite}`,
            )}
          </Form.Item>
        )}

        {Boolean(record.statut) && (
          <Form.Item
            {...viewItemLayout}
            label={i18n('entities.forum.fields.statut')}
          >
            {i18n(
              `entities.forum.enumerators.statut.${record.statut}`,
            )}
          </Form.Item>
        )}
      </fieldset>
    </ViewWrapper>
  );
};

export default ForumView;
