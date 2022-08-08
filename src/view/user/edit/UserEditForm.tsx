import {
  CloseOutlined,
  SaveOutlined,
  UndoOutlined,
} from '@ant-design/icons';
import { Button, Col, Form, Row, Tooltip } from 'antd';
import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { i18n } from 'src/i18n';
import yupFormSchemas from 'src/modules/shared/yup/yupFormSchemas';
import actions from 'src/modules/user/form/userFormActions';
import selectors from 'src/modules/user/form/userFormSelectors';
import userEnumerators from 'src/modules/user/userEnumerators';
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import FormWrapper, {
  tailFormItemLayout,
  formItemLayout,
} from 'src/view/shared/styles/FormWrapper';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import PageTitle from 'src/view/shared/styles/PageTitle';

const schema = yup.object().shape({
  roles: yupFormSchemas.stringArray(
    i18n('user.fields.roles'),
  ),
});

const UserEditForm = (props) => {
  const dispatch = useDispatch();

  const saveLoading = useSelector(
    selectors.selectSaveLoading,
  );

  const [initialValues] = useState(() => props.user || {});

  const form = useForm({
    resolver: yupResolver(schema),
    mode: 'all',
    defaultValues: initialValues,
  });

  const onSubmit = (values) => {
    const data = {
      id: props.user.id,
      ...values,
    };
    delete data.email;
    dispatch(actions.doUpdate(data));
  };

  const onReset = () => {
    Object.keys(initialValues).forEach((key) => {
      form.setValue(key, initialValues[key]);
    });
  };

  return (
    <FormWrapper>
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <Row gutter={24}>
            <Col span={16}>
              <PageTitle>
                {i18n('user.edit.title')}
              </PageTitle>
            </Col>
            <Col span={8} style={{ textAlign: 'end' }}>
              <Form.Item
                className="form-buttons"
                {...tailFormItemLayout}
              >
                <Tooltip title={i18n('common.save')}>
                  <Button
                    loading={saveLoading}
                    type="primary"
                    onClick={form.handleSubmit(onSubmit)}
                    icon={<SaveOutlined />}
                  ></Button>
                </Tooltip>
                <Tooltip title={i18n('common.reset')}>
                  <Button
                    disabled={saveLoading}
                    onClick={onReset}
                    icon={<UndoOutlined />}
                  ></Button>
                </Tooltip>
                {props.onCancel && (
                  <Tooltip title={i18n('common.cancel')}>
                    <Button
                      disabled={saveLoading}
                      onClick={() => props.onCancel()}
                      icon={<CloseOutlined />}
                    ></Button>
                  </Tooltip>
                )}
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={24}>
            <Col span={24}>
              <fieldset>
                <legend>
                  {i18n('common.informations')}
                </legend>
                <Form.Item
                  {...formItemLayout}
                  label={i18n('user.fields.email')}
                >
                  <strong>{props.user.email}</strong>
                </Form.Item>

                <SelectFormItem
                  name="roles"
                  label={i18n('user.fields.roles')}
                  options={userEnumerators.roles.map(
                    (value) => ({
                      value,
                      label: i18n(`roles.${value}.label`),
                    }),
                  )}
                  mode="multiple"
                  layout={formItemLayout}
                />
              </fieldset>
            </Col>
          </Row>
        </form>
      </FormProvider>
    </FormWrapper>
  );
};

export default UserEditForm;
