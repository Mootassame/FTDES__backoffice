import React, { useState } from 'react';
import { Modal } from 'antd';
import { i18n } from 'src/i18n';
import CategoryEvenementForm from 'src/view/categoryEvenement/form/CategoryEvenementForm';
import CategoryEvenementService from 'src/modules/categoryEvenement/categoryEvenementService';
import Errors from 'src/modules/shared/error/errors';

const CategoryEvenementFormModal = (props) => {
  const [saveLoading, setSaveLoading] = useState(false);

  const doSubmit = async (_, data) => {
    try {
      setSaveLoading(true);
      const { id } = await CategoryEvenementService.create(
        data,
      );
      const record = await CategoryEvenementService.find(
        id,
      );
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
      title={i18n('entities.categoryEvenement.new.title')}
      visible={props.visible}
      onCancel={() => props.onCancel()}
      footer={false}
      width="80%"
    >
      <CategoryEvenementForm
        saveLoading={saveLoading}
        onSubmit={doSubmit}
        onCancel={props.onCancel}
        modal
      />
    </Modal>
  );
};

export default CategoryEvenementFormModal;
