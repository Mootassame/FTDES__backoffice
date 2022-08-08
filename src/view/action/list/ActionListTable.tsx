import { Table, Popconfirm, Tooltip } from 'antd';
import { i18n } from 'src/i18n';
import actions from 'src/modules/action/list/actionListActions';
import destroyActions from 'src/modules/action/destroy/actionDestroyActions';
import selectors from 'src/modules/action/list/actionListSelectors';
import destroySelectors from 'src/modules/action/destroy/actionDestroySelectors';
import actionSelectors from 'src/modules/action/actionSelectors';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import TableWrapper from 'src/view/shared/styles/TableWrapper';
import ButtonLink from 'src/view/shared/styles/ButtonLink';

const ActionListTable = (props) => {
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
    actionSelectors.selectPermissionToEdit,
  );
  const hasPermissionToDestroy = useSelector(
    actionSelectors.selectPermissionToDestroy,
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
      title: i18n('entities.action.fields.sujet'),
      sorter: true,
      dataIndex: 'sujet',
      render: (value) =>
        value
          ? i18n(
              `entities.action.enumerators.sujet.${value}`,
            )
          : null,
    },
    {
      title: i18n('entities.action.fields.region'),
      sorter: true,
      dataIndex: 'region',
      render: (value) =>
        value
          ? i18n(
              `entities.action.enumerators.region.${value}`,
            )
          : null,
    },
    {
      title: i18n('entities.action.fields.type'),
      sorter: true,
      dataIndex: 'type',
      render: (value) =>
        value
          ? i18n(
              `entities.action.enumerators.type.${value}`,
            )
          : null,
    },

    {
      title: i18n('entities.action.fields.espace'),
      sorter: true,
      dataIndex: 'espace',
      render: (value) =>
        value
          ? i18n(
              `entities.action.enumerators.espace.${value}`,
            )
          : null,
    },
    {
      title: i18n('entities.action.fields.acteurs'),
      sorter: true,
      dataIndex: 'acteurs',
      render: (value) =>
        value
          ? i18n(
              `entities.action.enumerators.acteurs.${value}`,
            )
          : null,
    },

    {
      title: i18n('entities.forum.fields.statut'),
      sorter: true,
      dataIndex: 'statut',
      render: (value) =>
        value
          ? i18n(
              `entities.forum.enumerators.statut.${value}`,
            )
          : null,
    },
    {
      title: '',
      dataIndex: '',
      width: '160px',
      render: (_, record) => (
        <div className="table-actions">
          <Link to={`/action/${record.id}`}>
            <Tooltip title={i18n('common.view')}>
              <i className="fa-regular fa-eye table-actions-icon"></i>
            </Tooltip>
          </Link>
          {hasPermissionToEdit && (
            <Link to={`/action/${record.id}/edit`}>
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
        dataSource={props.data}
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

export default ActionListTable;
