import {
  CloseOutlined,
  SaveOutlined,
  UndoOutlined,
} from '@ant-design/icons';
import { Button, Form, Radio } from 'antd';
import { useForm, FormProvider } from 'react-hook-form';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { i18n } from 'src/i18n';
import actions from 'src/modules/settings/settingsActions';
import selectors from 'src/modules/settings/settingsSelectors';
// import ThemeRadioWrapper from 'src/view/settings/styles/ThemeRadioWrapper';
// import FormErrors from 'src/view/shared/form/formErrors';
import FormWrapper, {
  formItemLayout,
  tailFormItemLayout,
} from 'src/view/shared/styles/FormWrapper';
import * as yup from 'yup';
import yupFormSchemas from 'src/modules/shared/yup/yupFormSchemas';
//import settingsEnumerators from 'src/modules/settings/settingsEnumerators';
import ImagesFormItem from '../shared/form/items/ImagesFormItem';
import Storage from 'src/security/storage';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object().shape({
  
  logos: yupFormSchemas.files(
    i18n('settings.fields.logos'),
    {
      max: 1,
    },
  ),
  backgroundImages: yupFormSchemas.files(
    i18n('settings.fields.backgroundImages'),
    {
      max: 1,
    },
  ),
});

const SettingsForm = (props) => {
  const dispatch = useDispatch();

  const saveLoading = useSelector(
    selectors.selectSaveLoading,
  );

  const [initialValues] = useState(
    () => props.settings || {},
  );

  const onSubmit = (values) => {
    dispatch(actions.doSave(values));
  };

  const onReset = () => {
    Object.keys(initialValues).forEach((key) => {
      form.setValue(key, initialValues[key]);
    });
  };

  const form = useForm({
    resolver: yupResolver(schema),
    mode: 'all',
    defaultValues: initialValues,
  });

  return (
    <FormWrapper>
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
         

          <ImagesFormItem
            name="logos"
            label={i18n('settings.fields.logos')}
            storage={Storage.values.settingsLogos}
            max={1}
            layout={formItemLayout}
          />

          <ImagesFormItem
            name="backgroundImages"
            label={i18n('settings.fields.backgroundImages')}
            storage={
              Storage.values.settingsBackgroundImages
            }
            max={1}
            layout={formItemLayout}
          />

          <Form.Item
            className="form-buttons"
            {...tailFormItemLayout}
          >
            <Button
              loading={saveLoading}
              type="primary"
              onClick={form.handleSubmit(onSubmit)}
              icon={<SaveOutlined />}
            >
              {i18n('common.save')}
            </Button>

            <Button
              disabled={saveLoading}
              onClick={onReset}
              icon={<UndoOutlined />}
            >
              {i18n('common.reset')}
            </Button>

            {props.onCancel && (
              <Button
                disabled={saveLoading}
                onClick={() => props.onCancel()}
                icon={<CloseOutlined />}
              >
                {i18n('common.cancel')}
              </Button>
            )}
          </Form.Item>
        </form>
      </FormProvider>
    </FormWrapper>
  );
};

export default SettingsForm;
