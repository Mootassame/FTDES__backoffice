import { Table, Popconfirm, Tooltip } from 'antd';
import { i18n } from 'src/i18n';
import actions from 'src/modules/mediatique/list/mediatiqueListActions';
import destroyActions from 'src/modules/mediatique/destroy/mediatiqueDestroyActions';
import selectors from 'src/modules/mediatique/list/mediatiqueListSelectors';
import destroySelectors from 'src/modules/mediatique/destroy/mediatiqueDestroySelectors';
import mediatiqueSelectors from 'src/modules/mediatique/mediatiqueSelectors';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import TableWrapper from 'src/view/shared/styles/TableWrapper';
import ButtonLink from 'src/view/shared/styles/ButtonLink';
import ImagesListView from 'src/view/shared/list/ImagesListView';
import FilesListView from 'src/view/shared/list/FileListView';

const MediatiqueListTable = (props) => {
  const dispatch = useDispatch();

  const findLoading = useSelector(selectors.selectLoading);
  const destroyLoading = useSelector(
    destroySelectors.selectLoading,
  );
  const loading = findLoading || destroyLoading;

  const rows = useSelector(selectors.selectRows);
  const pagination = useSelector(
    selectors.selectPagination,
  );
  const selectedKeys = useSelector(
    selectors.selectSelectedKeys,
  );
  const hasPermissionToEdit = useSelector(
    mediatiqueSelectors.selectPermissionToEdit,
  );
  const hasPermissionToDestroy = useSelector(
    mediatiqueSelectors.selectPermissionToDestroy,
  );

  const handleTableChange = (
    pagination,
    filters,
    sorter,
  ) => {
    dispatch(
      actions.doChangePaginationAndSort(pagination, sorter),
    );
  };

  const doDestroy = (id) => {
    dispatch(destroyActions.doDestroy(id));
  };

  const columns = [
    {
      title: i18n('entities.mediatique.fields.title'),
      sorter: true,
      dataIndex: 'title',
    },
    {
      title: i18n('entities.mediatique.fields.description'),
      sorter: true,
      dataIndex: 'description',
    },
    {
      title: i18n('entities.mediatique.fields.type'),
      sorter: true,
      dataIndex: 'type',
      render: (value) =>
        value
          ? i18n(
              `entities.mediatique.enumerators.type.${value}`,
            )
          : null,
    },
    {
      title: i18n('entities.mediatique.fields.photos'),
      sorter: false,
      dataIndex: 'photos',
      render: (value) => <ImagesListView value={value} />,
    },
    {
      title: i18n('entities.mediatique.fields.videos'),
      sorter: false,
      dataIndex: 'videos',
      render: (value) => <FilesListView value={value} />,
    },
    {
      title: i18n(
        'entities.mediatique.fields.attachements',
      ),
      sorter: false,
      dataIndex: 'attachements',
      render: (value) => <FilesListView value={value} />,
    },
    {
      title: '',
      dataIndex: '',
      width: '160px',
      render: (_, record) => (
        <div className="table-actions">
          <Link to={`/mediatique/${record.id}`}>
            <Tooltip title={i18n('common.view')}>
              <i className="fa-regular fa-eye table-actions-icon"></i>
            </Tooltip>
          </Link>
          {hasPermissionToEdit && (
            <Link to={`/mediatique/${record.id}/edit`}>
              <Tooltip title={i18n('common.edit')}>
                <i className="fa-regular fa-pen-to-square table-actions-icon"></i>
              </Tooltip>
            </Link>
          )}
          {hasPermissionToDestroy && (
            <Popconfirm
              title={i18n('common.areYouSure')}
              onConfirm={() => doDestroy(record.id)}
              okText={i18n('common.yes')}
              cancelText={i18n('common.no')}
            >
              <ButtonLink>
                <Tooltip title={i18n('common.destroy')}>
                  <i className="fa-regular fa-trash-can table-actions-icon-destroy"></i>
                </Tooltip>
              </ButtonLink>
            </Popconfirm>
          )}
        </div>
      ),
    },
  ];

  const rowSelection = () => {
    return {
      selectedRowKeys: selectedKeys,
      onChange: (selectedRowKeys) => {
        dispatch(actions.doChangeSelected(selectedRowKeys));
      },
    };
  };

  return (
    <TableWrapper>
      <Table
        rowKey="id"
        loading={loading}
        columns={columns as any}
        dataSource={rows}
        pagination={pagination}
        onChange={handleTableChange}
        rowSelection={rowSelection()}
        scroll={{
          x: true,
        }}
      />
    </TableWrapper>
  );
};

export default MediatiqueListTable;
