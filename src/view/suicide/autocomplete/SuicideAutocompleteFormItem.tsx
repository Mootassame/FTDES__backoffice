import React, { useState } from 'react';
import SuicideService from 'src/modules/suicide/suicideService';
import SuicideFormModal from 'src/view/suicide/form/SuicideFormModal';
import AutocompleteFormItem from 'src/view/shared/form/items/AutocompleteFormItem';
import { useSelector } from 'react-redux';
import selectors from 'src/modules/suicide/suicideSelectors';
import { useFormContext } from 'react-hook-form';

const SuicideAutocompleteFormItem = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const { setValue, getValues } = useFormContext();

  const hasPermissionToCreate = useSelector(
    selectors.selectPermissionToCreate,
  );

  const doCloseModal = () => {
    setModalVisible(false);
  };

  const doOpenModal = () => {
    setModalVisible(true);
  };

  const doCreateSuccess = (record) => {
    const { name, mode } = props;

    if (mode && mode === 'multiple') {
      setValue(name, [
        ...(getValues()[name] || []),
        record,
      ], {shouldValidate: true, shouldDirty: true});
    } else {
      setValue(name, record, {shouldValidate: true, shouldDirty: true});
    }

    doCloseModal();
  };

  const fetchFn = (value, limit) => {
    return SuicideService.listAutocomplete(value, limit);
  };

  const mapper = {
    toAutocomplete(value) {
      if (!value) {
        return null;
      }

      const key = value.id;
      let label = value.label;

      if (value.id) {
        label = value.id;
      }

      return {
        key,
        label,
      };
    },

    toValue(value) {
      if (!value) {
        return null;
      }

      return {
        id: value.key,
        label: value.label,
      };
    },
  };

  const { form, ...rest } = props;
  return (
    <>
      <AutocompleteFormItem
        {...rest}
        fetchFn={fetchFn}
        mapper={mapper}
        onOpenModal={doOpenModal}
        inMemoryFilter
        hasPermissionToCreate={hasPermissionToCreate}
      />

      <SuicideFormModal
        visible={modalVisible}
        onCancel={doCloseModal}
        onSuccess={doCreateSuccess}
      />
    </>
  );
};

export default SuicideAutocompleteFormItem;
