import React, { useState } from 'react';
import { Modal } from 'antd';
import { i18n } from 'src/i18n';
import EvenementForm from 'src/view/evenement/form/EvenementForm';
import EvenementService from 'src/modules/evenement/evenementService';
import Errors from 'src/modules/shared/error/errors';

const EvenementFormModal = (props) => {
  const [saveLoading, setSaveLoading] = useState(false);

  const doSubmit = async (_, data) => {
    try {
      setSaveLoading(true);
      const { id } = await EvenementService.create(data);
      const record = await EvenementService.find(id);
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
      title={i18n('entities.evenement.new.title')}
      visible={props.visible}
      onCancel={() => props.onCancel()}
      footer={false}
      width="80%"
    >
      <EvenementForm
        saveLoading={saveLoading}
        onSubmit={doSubmit}
        onCancel={props.onCancel}
        modal
      />
    </Modal>
  );
};

export default EvenementFormModal;
