import React, { useState } from 'react';
import { Modal } from 'antd';
import { i18n } from 'src/i18n';
import DemandeAppuiForm from 'src/view/demandeAppui/form/DemandeAppuiForm';
import DemandeAppuiService from 'src/modules/demandeAppui/demandeAppuiService';
import Errors from 'src/modules/shared/error/errors';

const DemandeAppuiFormModal = (props) => {
  const [saveLoading, setSaveLoading] = useState(false);

  const doSubmit = async (_, data) => {
    try {
      setSaveLoading(true);
      const { id } = await DemandeAppuiService.create(data);
      const record = await DemandeAppuiService.find(id);
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
      title={i18n('entities.demandeAppui.new.title')}
      visible={props.visible}
      onCancel={() => props.onCancel()}
      footer={false}
      width="80%"
    >
      <DemandeAppuiForm
        saveLoading={saveLoading}
        onSubmit={doSubmit}
        onCancel={props.onCancel}
        modal
      />
    </Modal>
  );
};

export default DemandeAppuiFormModal;
