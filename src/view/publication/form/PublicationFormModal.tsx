import React, { useState } from 'react';
import { Modal } from 'antd';
import { i18n } from 'src/i18n';
import PublicationForm from 'src/view/publication/form/PublicationForm';
import PublicationService from 'src/modules/publication/publicationService';
import Errors from 'src/modules/shared/error/errors';

const PublicationFormModal = (props) => {
  const [saveLoading, setSaveLoading] = useState(false);

  const doSubmit = async (_, data) => {
    try {
      setSaveLoading(true);
      const { id } = await PublicationService.create(data);
      const record = await PublicationService.find(id);
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
      title={i18n('entities.publication.new.title')}
      visible={props.visible}
      onCancel={() => props.onCancel()}
      footer={false}
      width="80%"
    >
      <PublicationForm
        saveLoading={saveLoading}
        onSubmit={doSubmit}
        onCancel={props.onCancel}
        modal
      />
    </Modal>
  );
};

export default PublicationFormModal;
