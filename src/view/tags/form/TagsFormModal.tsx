import React, { useState } from 'react';
import { Modal } from 'antd';
import { i18n } from 'src/i18n';
import TagsForm from 'src/view/tags/form/TagsForm';
import TagsService from 'src/modules/tags/tagsService';
import Errors from 'src/modules/shared/error/errors';

const TagsFormModal = (props) => {
  const [saveLoading, setSaveLoading] = useState(false);

  const doSubmit = async (_, data) => {
    try {
      setSaveLoading(true);
      const { id } = await TagsService.create(data);
      const record = await TagsService.find(id);
      props.onSuccess(record);
    } catch (error) {
      Errors.handle(error);
    } finally {
      setSaveLoading(false);
    }
  };

  if (!props.visible) {
    return null;
  }

  return (
    <Modal
      style={{ top: 24 }}
      title={i18n('entities.tags.new.title')}
      visible={props.visible}
      onCancel={() => props.onCancel()}
      footer={false}
      width="80%"
    >
      <TagsForm
        saveLoading={saveLoading}
        onSubmit={doSubmit}
        onCancel={props.onCancel}
        modal
      />
    </Modal>
  );
};

export default TagsFormModal;
