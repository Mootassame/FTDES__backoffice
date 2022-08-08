import React, { useState } from 'react';
import { Modal } from 'antd';
import { i18n } from 'src/i18n';
import CategoryPublicationForm from 'src/view/categoryPublication/form/CategoryPublicationForm';
import CategoryPublicationService from 'src/modules/categoryPublication/categoryPublicationService';
import Errors from 'src/modules/shared/error/errors';

const CategoryPublicationFormModal = (props) => {
  const [saveLoading, setSaveLoading] = useState(false);

  const doSubmit = async (_, data) => {
    try {
      setSaveLoading(true);
      const { id } = await CategoryPublicationService.create(data);
      const record = await CategoryPublicationService.find(id);
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
      title={i18n('entities.categoryPublication.new.title')}
      visible={props.visible}
      onCancel={() => props.onCancel()}
      footer={false}
      width="80%"
    >
      <CategoryPublicationForm
        saveLoading={saveLoading}
        onSubmit={doSubmit}
        onCancel={props.onCancel}
        modal
      />
    </Modal>
  );
};

export default CategoryPublicationFormModal;
