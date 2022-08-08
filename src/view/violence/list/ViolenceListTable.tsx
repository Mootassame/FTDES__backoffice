import { Table, Popconfirm, Tooltip } from 'antd';
import { i18n } from 'src/i18n';
import actions from 'src/modules/violence/list/violenceListActions';
import destroyActions from 'src/modules/violence/destroy/violenceDestroyActions';
import selectors from 'src/modules/violence/list/violenceListSelectors';
import destroySelectors from 'src/modules/violence/destroy/violenceDestroySelectors';
import violenceSelectors from 'src/modules/violence/violenceSelectors';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import TableWrapper from 'src/view/shared/styles/TableWrapper';
import ButtonLink from 'src/view/shared/styles/ButtonLink';
import ActionListItem from 'src/view/action/list/ActionListItem';

const ViolenceListTable = (props) => {
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
    violenceSelectors.selectPermissionToEdit,
  );
  const hasPermissionToDestroy = useSelector(
    violenceSelectors.selectPermissionToDestroy,
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
      title: i18n('entities.violence.fields.date'),
      sorter: true,
      dataIndex: 'date',
    },
    {
      title: i18n('entities.violence.fields.region'),
      sorter: true,
      dataIndex: 'region',
      render: (value) =>
        value
          ? i18n(
              `entities.violence.enumerators.region.${value}`,
            )
          : null,
    },
    {
      title: i18n('entities.violence.fields.type'),
      sorter: true,
      dataIndex: 'type',
      render: (value) =>
        value
          ? i18n(
              `entities.violence.enumerators.type.${value}`,
            )
          : null,
    },
    {
      title: i18n('entities.violence.fields.mode'),
      sorter: true,
      dataIndex: 'mode',
      render: (value) =>
        value
          ? i18n(
              `entities.violence.enumerators.mode.${value}`,
            )
          : null,
    },
    {
      title: i18n('entities.violence.fields.cadre'),
      sorter: true,
      dataIndex: 'cadre',
      render: (value) =>
        value
          ? i18n(
              `entities.violence.enumerators.cadre.${value}`,
            )
          : null,
    },

    {
      title: i18n('entities.violence.fields.degre'),
      sorter: true,
      dataIndex: 'degre',
      render: (value) =>
        value
          ? i18n(
              `entities.violence.enumerators.degre.${value}`,
            )
          : null,
    },
    {
      title: i18n('entities.violence.fields.planifie'),
      sorter: true,
      dataIndex: 'planifie',
      render: (value) =>
        value ? i18n('common.yes') : i18n('common.no'),
    },
    {
      title: i18n('entities.violence.fields.categorie'),
      sorter: true,
      dataIndex: 'categorie',
      render: (value) =>
        value
          ? i18n(
              `entities.violence.enumerators.categorie.${value}`,
            )
          : null,
    },

    {
      title: i18n('entities.violence.fields.statut'),
      sorter: true,
      dataIndex: 'statut',
      render: (value) =>
        value
          ? i18n(
              `entities.violence.enumerators.statut.${value}`,
            )
          : null,
    },
    {
      title: '',
      dataIndex: '',
      width: '160px',
      render: (_, record) => (
        <div className="table-actions">
          <Link to={`/violence/${record.id}`}>
            <Tooltip title={i18n('common.view')}>
              <i className="fa-regular fa-eye table-actions-icon"></i>
            </Tooltip>
          </Link>
          {hasPermissionToEdit && (
            <Link to={`/violence/${record.id}/edit`}>
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

export default ViolenceListTable;
