import React, { useState } from 'react';
import { Modal } from 'antd';
import { i18n } from 'src/i18n';
import ArtisteForm from 'src/view/artiste/form/ArtisteForm';
import ArtisteService from 'src/modules/artiste/artisteService';
import Errors from 'src/modules/shared/error/errors';

const ArtisteFormModal = (props) => {
  const [saveLoading, setSaveLoading] = useState(false);

  const doSubmit = async (_, data) => {
    try {
      setSaveLoading(true);
      const { id } = await ArtisteService.create(data);
      const record = await ArtisteService.find(id);
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
      title={i18n('entities.artiste.new.title')}
      visible={props.visible}
      onCancel={() => props.onCancel()}
      footer={false}
      width="80%"
    >
      <ArtisteForm
        saveLoading={saveLoading}
        onSubmit={doSubmit}
        onCancel={props.onCancel}
        modal
      />
    </Modal>
  );
};

export default ArtisteFormModal;
