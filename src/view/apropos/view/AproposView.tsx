import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import ViewWrapper, {
  viewItemLayout,
} from 'src/view/shared/styles/ViewWrapper';
import { i18n } from 'src/i18n';
import { Form } from 'antd';


const AproposView = (props) => {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <ViewWrapper>
      {Boolean(record.about) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.apropos.fields.about')}
        >
          {record.about}
        </Form.Item>
      )}

      {Boolean(record.objectifs) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.apropos.fields.objectifs')}
        >
          {record.objectifs}
        </Form.Item>
      )}

      {Boolean(record.services) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.apropos.fields.services')}
        >
          {record.services}
        </Form.Item>
      )}

      {Boolean(record.contacts) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.apropos.fields.contacts')}
        >
          {record.contacts}
        </Form.Item>
      )}

      {Boolean(record.tutorial) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.apropos.fields.tutorial')}
        >
          {record.tutorial}
        </Form.Item>
      )}

      {Boolean(record.publicationDesc) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.apropos.fields.publicationDesc')}
        >
          {record.publicationDesc}
        </Form.Item>
      )}

      {Boolean(record.appelDesc) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.apropos.fields.appelDesc')}
        >
          {record.appelDesc}
        </Form.Item>
      )}

      {Boolean(record.forumDesc) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.apropos.fields.forumDesc')}
        >
          {record.forumDesc}
        </Form.Item>
      )}

      {Boolean(record.mouvementDesc) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.apropos.fields.mouvementDesc')}
        >
          {record.mouvementDesc}
        </Form.Item>
      )}

      {Boolean(record.mediatequeDesc) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.apropos.fields.mediatequeDesc')}
        >
          {record.mediatequeDesc}
        </Form.Item>
      )}
    </ViewWrapper>
  );
};

export default AproposView;
