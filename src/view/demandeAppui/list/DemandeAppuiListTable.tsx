import { Table, Popconfirm, Tooltip } from 'antd';
import { i18n } from 'src/i18n';
import actions from 'src/modules/demandeAppui/list/demandeAppuiListActions';
import destroyActions from 'src/modules/demandeAppui/destroy/demandeAppuiDestroyActions';
import selectors from 'src/modules/demandeAppui/list/demandeAppuiListSelectors';
import destroySelectors from 'src/modules/demandeAppui/destroy/demandeAppuiDestroySelectors';
import demandeAppuiSelectors from 'src/modules/demandeAppui/demandeAppuiSelectors';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import TableWrapper from 'src/view/shared/styles/TableWrapper';
import ButtonLink from 'src/view/shared/styles/ButtonLink';
import FilesListView from 'src/view/shared/list/FileListView';
import CategoryAppelListItem from 'src/view/categoryAppel/list/CategoryAppelListItem';

const DemandeAppuiListTable = (props) => {
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
    demandeAppuiSelectors.selectPermissionToEdit,
  );
  const hasPermissionToDestroy = useSelector(
    demandeAppuiSelectors.selectPermissionToDestroy,
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
      title: i18n('entities.demandeAppui.fields.type'),
      sorter: true,
      dataIndex: 'type',
      render: (value) =>
        value
          ? i18n(
              `entities.demandeAppui.enumerators.type.${value}`,
            )
          : null,
    },
    {
      title: i18n('entities.demandeAppui.fields.etat'),
      sorter: true,
      dataIndex: 'etat',
      render: (value) =>
        value
          ? i18n(
              `entities.demandeAppui.enumerators.etat.${value}`,
            )
          : null,
    },
    {
      title: i18n(
        'entities.demandeAppui.fields.gouvernorat',
      ),
      sorter: true,
      dataIndex: 'gouvernorat',
      render: (value) =>
        value
          ? i18n(
              `entities.demandeAppui.enumerators.gouvernorat.${value}`,
            )
          : null,
    },

    {
      title: i18n('entities.demandeAppui.fields.categorie'),
      sorter: false,
      dataIndex: 'category',
      render: (value) => (
        <CategoryAppelListItem value={value} />
      ),
    },
    {
      title: i18n(
        'entities.demandeAppui.fields.importance',
      ),
      sorter: true,
      dataIndex: 'importance',
      render: (value) =>
        value
          ? i18n(
              `entities.demandeAppui.enumerators.importance.${value}`,
            )
          : null,
    },
    {
      title: i18n(
        'entities.demandeAppui.fields.description',
      ),
      sorter: true,
      dataIndex: 'description',
    },
    {
      title: i18n('entities.demandeAppui.fields.supports'),
      sorter: false,
      dataIndex: 'supports',
      render: (value) => <FilesListView value={value} />,
    },
    {
      title: '',
      dataIndex: '',
      width: '160px',
      render: (_, record) => (
        <div className="table-actions">
          <Link to={`/demande-appui/${record.id}`}>
            <Tooltip title={i18n('common.view')}>
              <i className="fa-regular fa-eye table-actions-icon"></i>
            </Tooltip>
          </Link>
          {hasPermissionToEdit && (
            <Link to={`/demande-appui/${record.id}/edit`}>
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

export default DemandeAppuiListTable;
