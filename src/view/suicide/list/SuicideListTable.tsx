import { Table, Popconfirm, Tooltip } from 'antd';
import { i18n } from 'src/i18n';
import actions from 'src/modules/suicide/list/suicideListActions';
import destroyActions from 'src/modules/suicide/destroy/suicideDestroyActions';
import selectors from 'src/modules/suicide/list/suicideListSelectors';
import destroySelectors from 'src/modules/suicide/destroy/suicideDestroySelectors';
import suicideSelectors from 'src/modules/suicide/suicideSelectors';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import TableWrapper from 'src/view/shared/styles/TableWrapper';
import ButtonLink from 'src/view/shared/styles/ButtonLink';
import ActionListItem from 'src/view/action/list/ActionListItem';

const SuicideListTable = (props) => {
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
    suicideSelectors.selectPermissionToEdit,
  );
  const hasPermissionToDestroy = useSelector(
    suicideSelectors.selectPermissionToDestroy,
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
      title: i18n('entities.suicide.fields.date'),
      sorter: true,
      dataIndex: 'date',
    },
    {
      title: i18n('entities.suicide.fields.region'),
      sorter: true,
      dataIndex: 'region',
      render: (value) =>
        value
          ? i18n(
              `entities.suicide.enumerators.region.${value}`,
            )
          : null,
    },

    {
      title: i18n('entities.suicide.fields.genre'),
      sorter: true,
      dataIndex: 'genre',
      render: (value) =>
        value
          ? i18n(
              `entities.suicide.enumerators.genre.${value}`,
            )
          : null,
    },
    {
      title: i18n('entities.suicide.fields.maniere'),
      sorter: true,
      dataIndex: 'maniere',
      render: (value) =>
        value
          ? i18n(
              `entities.suicide.enumerators.maniere.${value}`,
            )
          : null,
    },
    {
      title: i18n('entities.suicide.fields.raison'),
      sorter: true,
      dataIndex: 'raison',
      render: (value) =>
        value
          ? i18n(
              `entities.suicide.enumerators.raison.${value}`,
            )
          : null,
    },

    {
      title: i18n('entities.suicide.fields.cible'),
      sorter: true,
      dataIndex: 'cible',
      render: (value) =>
        value
          ? i18n(
              `entities.suicide.enumerators.cible.${value}`,
            )
          : null,
    },
    {
      title: i18n('entities.suicide.fields.deces'),
      sorter: true,
      dataIndex: 'deces',
      render: (value) =>
        value
          ? i18n(
              `entities.suicide.enumerators.deces.${value}`,
            )
          : null,
    },

    {
      title: i18n('entities.suicide.fields.statut'),
      sorter: true,
      dataIndex: 'statut',
      render: (value) =>
        value
          ? i18n(
              `entities.suicide.enumerators.statut.${value}`,
            )
          : null,
    },
    {
      title: '',
      dataIndex: '',
      width: '160px',
      render: (_, record) => (
        <div className="table-actions">
          <Link to={`/suicide/${record.id}`}>
            <Tooltip title={i18n('common.view')}>
              <i className="fa-regular fa-eye table-actions-icon"></i>
            </Tooltip>
          </Link>
          {hasPermissionToEdit && (
            <Link to={`/suicide/${record.id}/edit`}>
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
        dataSource={props.data ? props.data : rows}
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

export default SuicideListTable;
