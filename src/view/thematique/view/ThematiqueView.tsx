import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import ViewWrapper, {
  viewItemLayout,
} from 'src/view/shared/styles/ViewWrapper';
import { i18n } from 'src/i18n';
import { Form } from 'antd';
import TagsViewItem from 'src/view/tags/view/TagsViewItem';

const ThematiqueView = (props) => {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <ViewWrapper>
      <fieldset>
        <legend>{i18n('common.informations')}</legend>
        {Boolean(record.titre) && (
          <Form.Item
            {...viewItemLayout}
            label={i18n('entities.thematique.fields.titre')}
          >
            {record.titre}
          </Form.Item>
        )}

        {Boolean(record.description) && (
          <Form.Item
            {...viewItemLayout}
            label={i18n(
              'entities.thematique.fields.description',
            )}
          >
            {record.description}
          </Form.Item>
        )}

        {Boolean(record.tags) &&
          Boolean(record.tags.length) && (
            <Form.Item
              {...viewItemLayout}
              label={i18n(
                'entities.thematique.fields.tags',
              )}
            >
              <TagsViewItem value={record.tags} />
            </Form.Item>
          )}
      </fieldset>
    </ViewWrapper>
  );
};

export default ThematiqueView;
