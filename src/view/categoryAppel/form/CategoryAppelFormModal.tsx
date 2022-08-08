import React, { useState } from 'react';
import { Modal } from 'antd';
import { i18n } from 'src/i18n';
import CategoryAppelForm from 'src/view/categoryAppel/form/CategoryAppelForm';
import CategoryAppelService from 'src/modules/categoryAppel/categoryAppelService';
import Errors from 'src/modules/shared/error/errors';

const CategoryAppelFormModal = (props) => {
  const [saveLoading, setSaveLoading] = useState(false);

  const doSubmit = async (_, data) => {
    try {
      setSaveLoading(true);
      const { id } = await CategoryAppelService.create(
        data,
      );
      const record = await CategoryAppelService.find(
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
      title={i18n('entities.categoryAppel.new.title')}
      visible={props.visible}
      onCancel={() => props.onCancel()}
      footer={false}
      width="80%"
    >
      <CategoryAppelForm
        saveLoading={saveLoading}
        onSubmit={doSubmit}
        onCancel={props.onCancel}
        modal
      />
    </Modal>
  );
};

export default CategoryAppelFormModal;
