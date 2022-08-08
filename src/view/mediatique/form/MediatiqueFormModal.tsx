import React, { useState } from 'react';
import { Modal } from 'antd';
import { i18n } from 'src/i18n';
import MediatiqueForm from 'src/view/mediatique/form/MediatiqueForm';
import MediatiqueService from 'src/modules/mediatique/mediatiqueService';
import Errors from 'src/modules/shared/error/errors';

const MediatiqueFormModal = (props) => {
  const [saveLoading, setSaveLoading] = useState(false);

  const doSubmit = async (_, data) => {
    try {
      setSaveLoading(true);
      const { id } = await MediatiqueService.create(data);
      const record = await MediatiqueService.find(id);
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
      title={i18n('entities.mediatique.new.title')}
      visible={props.visible}
      onCancel={() => props.onCancel()}
      footer={false}
      width="80%"
    >
      <MediatiqueForm
        saveLoading={saveLoading}
        onSubmit={doSubmit}
        onCancel={props.onCancel}
        modal
      />
    </Modal>
  );
};

export default MediatiqueFormModal;
