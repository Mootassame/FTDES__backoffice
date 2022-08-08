import { Table, Popconfirm, Tooltip } from 'antd';
import { i18n } from 'src/i18n';
import actions from 'src/modules/mouvement/list/mouvementListActions';
import destroyActions from 'src/modules/mouvement/destroy/mouvementDestroyActions';
import selectors from 'src/modules/mouvement/list/mouvementListSelectors';
import destroySelectors from 'src/modules/mouvement/destroy/mouvementDestroySelectors';
import mouvementSelectors from 'src/modules/mouvement/mouvementSelectors';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import TableWrapper from 'src/view/shared/styles/TableWrapper';
import ButtonLink from 'src/view/shared/styles/ButtonLink';
import ActionListItem from 'src/view/action/list/ActionListItem';

const MouvementListTable = (props) => {
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
    mouvementSelectors.selectPermissionToEdit,
  );
  const hasPermissionToDestroy = useSelector(
    mouvementSelectors.selectPermissionToDestroy,
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
      title: i18n('entities.mouvement.fields.sujet'),
      sorter: true,
      dataIndex: 'sujet',
      render: (value) =>
        value
          ? i18n(
              `entities.mouvement.enumerators.sujet.${value}`,
            )
          : null,
    },
    {
      title: i18n('entities.mouvement.fields.date'),
      sorter: true,
      dataIndex: 'date',
    },
    {
      title: i18n('entities.mouvement.fields.observation'),
      sorter: true,
      dataIndex: 'observation',
    },

    {
      title: i18n('entities.mouvement.fields.statut'),
      sorter: true,
      dataIndex: 'statut',
      render: (value) =>
        value
          ? i18n(
              `entities.mouvement.enumerators.statut.${value}`,
            )
          : null,
    },

    {
      title: '',
      dataIndex: '',
      width: '160px',
      render: (_, record) => (
        <div className="table-actions">
          <Link to={`/mouvement/${record.id}`}>
            <Tooltip title={i18n('common.view')}>
              <i className="fa-regular fa-eye table-actions-icon"></i>
            </Tooltip>
          </Link>
          {hasPermissionToEdit && (
            <Link to={`/mouvement/${record.id}/edit`}>
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

export default MouvementListTable;
