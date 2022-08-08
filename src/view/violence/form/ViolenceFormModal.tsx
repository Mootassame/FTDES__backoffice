import React, { useState } from 'react';
import { Modal } from 'antd';
import { i18n } from 'src/i18n';
import ViolenceForm from 'src/view/violence/form/ViolenceForm';
import ViolenceService from 'src/modules/violence/violenceService';
import Errors from 'src/modules/shared/error/errors';

const ViolenceFormModal = (props) => {
  const [saveLoading, setSaveLoading] = useState(false);

  const doSubmit = async (_, data) => {
    try {
      setSaveLoading(true);
      const { id } = await ViolenceService.create(data);
      const record = await ViolenceService.find(id);
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
      title={i18n('entities.violence.new.title')}
      visible={props.visible}
      onCancel={() => props.onCancel()}
      footer={false}
      width="80%"
    >
      <ViolenceForm
        saveLoading={saveLoading}
        onSubmit={doSubmit}
        onCancel={props.onCancel}
        modal
      />
    </Modal>
  );
};

export default ViolenceFormModal;
