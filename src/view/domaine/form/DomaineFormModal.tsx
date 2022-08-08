import React, { useState } from 'react';
import { Modal } from 'antd';
import { i18n } from 'src/i18n';
import DomaineForm from 'src/view/domaine/form/DomaineForm';
import DomaineService from 'src/modules/domaine/domaineService';
import Errors from 'src/modules/shared/error/errors';

const DomaineFormModal = (props) => {
  const [saveLoading, setSaveLoading] = useState(false);

  const doSubmit = async (_, data) => {
    try {
      setSaveLoading(true);
      const { id } = await DomaineService.create(data);
      const record = await DomaineService.find(id);
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
      title={i18n('entities.domaine.new.title')}
      visible={props.visible}
      onCancel={() => props.onCancel()}
      footer={false}
      width="80%"
    >
      <DomaineForm
        saveLoading={saveLoading}
        onSubmit={doSubmit}
        onCancel={props.onCancel}
        modal
      />
    </Modal>
  );
};

export default DomaineFormModal;
