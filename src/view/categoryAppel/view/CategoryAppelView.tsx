import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import ViewWrapper, {
  viewItemLayout,
} from 'src/view/shared/styles/ViewWrapper';
import { i18n } from 'src/i18n';
import { Form } from 'antd';

const CategoryAppelView = (props) => {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <ViewWrapper>
      <fieldset>
        <legend>{i18n('common.informations')}</legend>
        {Boolean(record.title) && (
          <Form.Item
            {...viewItemLayout}
            label={i18n(
              'entities.categoryAppel.fields.title',
            )}
          >
            {record.title}
          </Form.Item>
        )}

        {Boolean(record.description) && (
          <Form.Item
            {...viewItemLayout}
            label={i18n(
              'entities.categoryAppel.fields.description',
            )}
          >
            {record.description}
          </Form.Item>
        )}
      </fieldset>
    </ViewWrapper>
  );
};

export default CategoryAppelView;
