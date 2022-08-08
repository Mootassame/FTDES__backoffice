import React, { useState } from 'react';
import { Modal } from 'antd';
import { i18n } from 'src/i18n';
import SuicideForm from 'src/view/suicide/form/SuicideForm';
import SuicideService from 'src/modules/suicide/suicideService';
import Errors from 'src/modules/shared/error/errors';

const SuicideFormModal = (props) => {
  const [saveLoading, setSaveLoading] = useState(false);

  const doSubmit = async (_, data) => {
    try {
      setSaveLoading(true);
      const { id } = await SuicideService.create(data);
      const record = await SuicideService.find(id);
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
      title={i18n('entities.suicide.new.title')}
      visible={props.visible}
      onCancel={() => props.onCancel()}
      footer={false}
      width="80%"
    >
      <SuicideForm
        saveLoading={saveLoading}
        onSubmit={doSubmit}
        onCancel={props.onCancel}
        modal
      />
    </Modal>
  );
};

export default SuicideFormModal;
