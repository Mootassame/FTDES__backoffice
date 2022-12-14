import React, { useState } from 'react';
import { Modal } from 'antd';
import { i18n } from 'src/i18n';
import AproposForm from 'src/view/apropos/form/AproposForm';
import AproposService from 'src/modules/apropos/aproposService';
import Errors from 'src/modules/shared/error/errors';

const AproposFormModal = (props) => {
  const [saveLoading, setSaveLoading] = useState(false);

  const doSubmit = async (_, data) => {
    try {
      setSaveLoading(true);
      const { id } = await AproposService.create(data);
      const record = await AproposService.find(id);
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
      title={i18n('entities.apropos.new.title')}
      visible={props.visible}
      onCancel={() => props.onCancel()}
      footer={false}
      width="80%"
    >
      <AproposForm
        saveLoading={saveLoading}
        onSubmit={doSubmit}
        onCancel={props.onCancel}
        modal
      />
    </Modal>
  );
};

export default AproposFormModal;
