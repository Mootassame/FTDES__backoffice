import React, { useState } from 'react';
import { Modal } from 'antd';
import { i18n } from 'src/i18n';
import EspaceArtistiqueForm from 'src/view/espaceArtistique/form/EspaceArtistiqueForm';
import EspaceArtistiqueService from 'src/modules/espaceArtistique/espaceArtistiqueService';
import Errors from 'src/modules/shared/error/errors';

const EspaceArtistiqueFormModal = (props) => {
  const [saveLoading, setSaveLoading] = useState(false);

  const doSubmit = async (_, data) => {
    try {
      setSaveLoading(true);
      const { id } = await EspaceArtistiqueService.create(data);
      const record = await EspaceArtistiqueService.find(id);
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
      title={i18n('entities.espaceArtistique.new.title')}
      visible={props.visible}
      onCancel={() => props.onCancel()}
      footer={false}
      width="80%"
    >
      <EspaceArtistiqueForm
        saveLoading={saveLoading}
        onSubmit={doSubmit}
        onCancel={props.onCancel}
        modal
      />
    </Modal>
  );
};

export default EspaceArtistiqueFormModal;
