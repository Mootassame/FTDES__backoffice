import {
  CloseOutlined,
  SaveOutlined,
  UndoOutlined,
} from '@ant-design/icons';
import { Button, Form, Tooltip } from 'antd';
import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { i18n } from 'src/i18n';
import actions from 'src/modules/auth/authActions';
import selectors from 'src/modules/auth/authSelectors';
import userEnumerators from 'src/modules/user/userEnumerators';
import yupFormSchemas from 'src/modules/shared/yup/yupFormSchemas';
import ImagesFormItem from 'src/view/shared/form/items/ImagesFormItem';
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import InputFormItem from 'src/view/shared/form/items/InputFormItem';
import FormWrapper, {
  formItemLayout,
  tailFormItemLayout,
} from 'src/view/shared/styles/FormWrapper';
import * as yup from 'yup';
import Storage from 'src/security/storage';
import { yupResolver } from '@hookform/resolvers/yup';

import { Col, Row } from 'antd';
import PageTitle from 'src/view/shared/styles/PageTitle';

const schema = yup.object().shape({
  firstName: yupFormSchemas.string(
    i18n('user.fields.firstName'),
    {
      max: 80,
    },
  ),
  lastName: yupFormSchemas.string(
    i18n('user.fields.lastName'),
    {
      max: 175,
    },
  ),
  phoneNumber: yupFormSchemas.string(
    i18n('user.fields.phoneNumber'),
    {
      matches: /^[0-9]/,
      max: 24,
    },
  ),
  pays: yupFormSchemas.string(i18n('user.fields.pays'), {
    max: 175,
  }),
  fonction: yupFormSchemas.string(
    i18n('user.fields.fonction'),
    {
      max: 175,
    },
  ),
  region: yupFormSchemas.string(
    i18n('user.fields.region'),
    {
      max: 175,
    },
  ),

  avatars: yupFormSchemas.images(
    i18n('user.fields.avatars'),
    {
      max: 1,
    },
  ),
});

const ProfileFormPage = (props) => {
  const dispatch = useDispatch();

  const saveLoading = useSelector(
    selectors.selectLoadingUpdateProfile,
  );
  const currentUser = useSelector(
    selectors.selectCurrentUser,
  );

  const onSubmit = (values) => {
    dispatch(actions.doUpdateProfile(values));
  };

  const [initialValues] = useState(() => {
    const record = currentUser || {};

    return {
      firstName: record.firstName,
      lastName: record.lastName,
      phoneNumber: record.phoneNumber,
      pays: record.pays,
      fonction: record.fonction,
      region: record.region,
      avatars: record.avatars || [],
    };
  });

  const form = useForm({
    resolver: yupResolver(schema),
    mode: 'all',
    defaultValues: initialValues,
  });

  const onReset = () => {
    Object.keys(initialValues).forEach((key: any) => {
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
                {i18n('auth.profile.title')}
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
                  label={i18n('user.fields.email')}
                  {...formItemLayout}
                >
                  <strong>{currentUser.email}</strong>
                </Form.Item>
                <InputFormItem
                  name="firstName"
                  label={i18n('user.fields.firstName')}
                  autoComplete="firstName"
                  layout={formItemLayout}
                  autoFocus
                />
                <InputFormItem
                  name="lastName"
                  label={i18n('user.fields.lastName')}
                  autoComplete="lastName"
                  layout={formItemLayout}
                />
                <SelectFormItem
                  name={'pays'}
                  label={i18n('user.fields.pays')}
                  options={userEnumerators.pays.map(
                    (value) => ({
                      value,
                      label: i18n(
                        `user.enumerators.pays.${value}`,
                      ),
                    }),
                  )}
                  layout={formItemLayout}
                />
                <SelectFormItem
                  name={'fonction'}
                  label={i18n('user.fields.fonction')}
                  options={userEnumerators.fonction.map(
                    (value) => ({
                      value,
                      label: i18n(
                        `user.enumerators.fonction.${value}`,
                      ),
                    }),
                  )}
                  layout={formItemLayout}
                />
                <SelectFormItem
                  name={'region'}
                  label={i18n('user.fields.region')}
                  options={userEnumerators.region.map(
                    (value) => ({
                      value,
                      label: i18n(
                        `user.enumerators.region.${value}`,
                      ),
                    }),
                  )}
                  layout={formItemLayout}
                />

                <InputFormItem
                  name="phoneNumber"
                  label={i18n('user.fields.phoneNumber')}
                  autoComplete="phoneNumber"
                  layout={formItemLayout}
                />
                <ImagesFormItem
                  name="avatars"
                  label={i18n('user.fields.avatars')}
                  storage={
                    Storage.values.userAvatarsProfiles
                  }
                  max={1}
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

export default ProfileFormPage;
