import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import ViewWrapper, {
  viewItemLayout,
} from 'src/view/shared/styles/ViewWrapper';
import { i18n } from 'src/i18n';
import { Form } from 'antd';
import ImagesViewer from 'src/view/shared/ImagesViewer';
import FilesViewer from 'src/view/shared/FilesViewer';

const MediatiqueView = (props) => {
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
            label={i18n('entities.mediatique.fields.title')}
          >
            {record.title}
          </Form.Item>
        )}

        {Boolean(record.description) && (
          <Form.Item
            {...viewItemLayout}
            label={i18n(
              'entities.mediatique.fields.description',
            )}
          >
            {record.description}
          </Form.Item>
        )}

        {Boolean(record.type) && (
          <Form.Item
            {...viewItemLayout}
            label={i18n('entities.mediatique.fields.type')}
          >
            {i18n(
              `entities.mediatique.enumerators.type.${record.type}`,
            )}
          </Form.Item>
        )}

        {Boolean(record.photos) &&
          Boolean(record.photos.length) && (
            <Form.Item
              {...viewItemLayout}
              label={i18n(
                'entities.mediatique.fields.photos',
              )}
            >
              <ImagesViewer value={record.photos} />
            </Form.Item>
          )}

        {Boolean(record.videos) &&
          Boolean(record.videos.length) && (
            <Form.Item
              {...viewItemLayout}
              label={i18n(
                'entities.mediatique.fields.videos',
              )}
            >
              <FilesViewer value={record.videos} />
            </Form.Item>
          )}

        {Boolean(record.attachements) &&
          Boolean(record.attachements.length) && (
            <Form.Item
              {...viewItemLayout}
              label={i18n(
                'entities.mediatique.fields.attachements',
              )}
            >
              <FilesViewer value={record.attachements} />
            </Form.Item>
          )}
      </fieldset>
    </ViewWrapper>
  );
};

export default MediatiqueView;
