import {
  CloseOutlined,
  SaveOutlined,
  UndoOutlined,
} from '@ant-design/icons';
import { Button, Col, Form, Row, Tooltip } from 'antd';
import { useForm, FormProvider } from 'react-hook-form';
import React, { useState } from 'react';
import { i18n } from 'src/i18n';
import InputFormItem from 'src/view/shared/form/items/InputFormItem';
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import TagsFormItem from 'src/view/shared/form/items/TagsFormItem';
import FormWrapper, {
  formItemLayout,
  tailFormItemLayout,
} from 'src/view/shared/styles/FormWrapper';
import * as yup from 'yup';
import yupFormSchemas from 'src/modules/shared/yup/yupFormSchemas';
import userEnumerators from 'src/modules/user/userEnumerators';
import { yupResolver } from '@hookform/resolvers/yup';
import PageTitle from 'src/view/shared/styles/PageTitle';

const singleSchema = yup.object().shape({
  email: yupFormSchemas.email(i18n('user.fields.email')),
  roles: yupFormSchemas.stringArray(
    i18n('user.fields.roles'),
    { required: true, min: 1 },
  ),
});

const multipleSchema = yup.object().shape({
  emails: yup
    .array()
    .label(i18n('user.fields.emails'))
    .of(
      yup
        .string()
        .transform((cv, ov) => {
          return ov === '' ? null : cv;
        })
        .email(i18n('user.validations.email'))
        .label(i18n('user.fields.email'))
        .max(255)
        .required(),
    )
    .required()
    .min(1),
  roles: yupFormSchemas.stringArray(
    i18n('user.fields.roles'),
    { required: true, min: 1 },
  ),
});

const UserNewForm = (props) => {
  const schema = props.single
    ? singleSchema
    : multipleSchema;

  const [initialValues] = useState(() => ({
    emails: [],
    email: '',
    roles: [],
  }));

  const form = useForm({
    resolver: yupResolver(schema),
    mode: 'all',
    defaultValues: initialValues,
  });

  const onSubmit = (values) => {
    const { ...data } = values;

    if (data.email) {
      data.emails = [data.email];
      delete data.email;
    }

    props.onSubmit(null, data);
  };

  const onReset = () => {
    Object.keys(initialValues).forEach((key) => {
      form.setValue(key, initialValues[key]);
    });
  };

  const { single, saveLoading } = props;

  return (
    <FormWrapper>
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <Row gutter={24}>
            <Col span={16}>
              <PageTitle>
                {i18n('user.new.title')}
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
                {single ? (
                  <InputFormItem
                    name="email"
                    label={i18n('user.fields.email')}
                    required={true}
                    layout={formItemLayout}
                    autoFocus
                  />
                ) : (
                  <TagsFormItem
                    name="emails"
                    label={i18n('user.fields.emails')}
                    notFoundContent={i18n(
                      'user.new.emailsHint',
                    )}
                    required={true}
                    layout={formItemLayout}
                    autoFocus
                  />
                )}

                <SelectFormItem
                  name="roles"
                  label={i18n('user.fields.roles')}
                  required={true}
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

export default UserNewForm;
