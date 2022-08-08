import React, { useState } from 'react';
import { Modal } from 'antd';
import { i18n } from 'src/i18n';
import MouvementForm from 'src/view/mouvement/form/MouvementForm';
import MouvementService from 'src/modules/mouvement/mouvementService';
import Errors from 'src/modules/shared/error/errors';

const MouvementFormModal = (props) => {
  const [saveLoading, setSaveLoading] = useState(false);

  const doSubmit = async (_, data) => {
    try {
      setSaveLoading(true);
      const { id } = await MouvementService.create(data);
      const record = await MouvementService.find(id);
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
      title={i18n('entities.mouvement.new.title')}
      visible={props.visible}
      onCancel={() => props.onCancel()}
      footer={false}
      width="80%"
    >
      <MouvementForm
        saveLoading={saveLoading}
        onSubmit={doSubmit}
        onCancel={props.onCancel}
        modal
      />
    </Modal>
  );
};

export default MouvementFormModal;
