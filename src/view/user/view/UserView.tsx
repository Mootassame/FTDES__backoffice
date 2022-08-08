import { Tooltip, Form } from 'antd';
import React from 'react';
import Roles from 'src/security/roles';
import Spinner from 'src/view/shared/Spinner';
import ViewWrapper, {
  viewItemLayout,
} from 'src/view/shared/styles/ViewWrapper';
import UserStatusView from 'src/view/user/view/UserStatusView';
import { i18n } from 'src/i18n';
import ImagesViewer from 'src/view/shared/ImagesViewer';

const UserView = (props) => {
  const { user, loading } = props;

  if (loading || !user) {
    return <Spinner />;
  }

  return (
    <ViewWrapper>
      <fieldset>
        <legend>{i18n('common.informations')}</legend>
        {user.email && (
          <Form.Item
            {...viewItemLayout}
            label={i18n('user.fields.email')}
          >
            {user.email}
          </Form.Item>
        )}

        {user.firstName && (
          <Form.Item
            {...viewItemLayout}
            label={i18n('user.fields.firstName')}
          >
            {user.firstName}
          </Form.Item>
        )}

        {user.lastName && (
          <Form.Item
            {...viewItemLayout}
            label={i18n('user.fields.lastName')}
          >
            {user.lastName}
          </Form.Item>
        )}

        {user.phoneNumber && (
          <Form.Item
            {...viewItemLayout}
            label={i18n('user.fields.phoneNumber')}
          >
            +{user.phoneNumber}
          </Form.Item>
        )}

        {user.pays && (
          <Form.Item
            {...viewItemLayout}
            label={i18n('user.fields.pays')}
          >
            {user.pays}
          </Form.Item>
        )}

        {user.pays && (
          <Form.Item
            {...viewItemLayout}
            label={i18n('user.fields.pays')}
          >
            {i18n('user.enumerators.pays.' + user.pays)}
          </Form.Item>
        )}

        {user.region && (
          <Form.Item
            {...viewItemLayout}
            label={i18n('user.fields.region')}
          >
            {i18n('user.enumerators.region.' + user.region)}
          </Form.Item>
        )}

        {user.fonction && (
          <Form.Item
            {...viewItemLayout}
            label={i18n('user.fields.fonction')}
          >
            {i18n(
              'user.enumerators.fonction.' + user.fonction,
            )}
          </Form.Item>
        )}

        {user.status && (
          <Form.Item
            {...viewItemLayout}
            label={i18n('user.fields.status')}
          >
            <UserStatusView value={user.status} />
          </Form.Item>
        )}

        {user.avatars && Boolean(user.avatars.length) && (
          <Form.Item
            {...viewItemLayout}
            label={i18n('user.fields.avatars')}
          >
            <ImagesViewer value={user.avatars} />
          </Form.Item>
        )}
      </fieldset>
    </ViewWrapper>
  );
};

export default UserView;
