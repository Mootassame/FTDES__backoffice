import { Table, Popconfirm, Tooltip } from 'antd';
import { i18n } from 'src/i18n';
import actions from 'src/modules/evenement/list/evenementListActions';
import destroyActions from 'src/modules/evenement/destroy/evenementDestroyActions';
import selectors from 'src/modules/evenement/list/evenementListSelectors';
import destroySelectors from 'src/modules/evenement/destroy/evenementDestroySelectors';
import evenementSelectors from 'src/modules/evenement/evenementSelectors';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import TableWrapper from 'src/view/shared/styles/TableWrapper';
import ButtonLink from 'src/view/shared/styles/ButtonLink';
import FilesListView from 'src/view/shared/list/FileListView';
import ThematiqueListItem from 'src/view/thematique/list/ThematiqueListItem';
import CategoryEvenementListItem from 'src/view/categoryEvenement/list/CategoryEvenementListItem';

const EvenementListTable = (props) => {
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
    evenementSelectors.selectPermissionToEdit,
  );
  const hasPermissionToDestroy = useSelector(
    evenementSelectors.selectPermissionToDestroy,
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
      title: i18n('entities.evenement.fields.categorie'),
      sorter: false,
      dataIndex: 'category',
      render: (value) => (
        <CategoryEvenementListItem value={value} />
      ),
    },

    {
      title: i18n('entities.evenement.fields.type'),
      sorter: true,
      dataIndex: 'type',
      render: (value) =>
        value
          ? i18n(
              `entities.evenement.enumerators.type.${value}`,
            )
          : null,
    },
    {
      title: i18n('entities.evenement.fields.thematique'),
      sorter: false,
      dataIndex: 'thematique',
      render: (value) => (
        <ThematiqueListItem value={value} />
      ),
    },
    {
      title: i18n('entities.evenement.fields.date'),
      sorter: true,
      dataIndex: 'date',
    },
    {
      title: i18n('entities.evenement.fields.statut'),
      sorter: true,
      dataIndex: 'statut',
      render: (value) =>
        value
          ? i18n(
              `entities.evenement.enumerators.statut.${value}`,
            )
          : null,
    },

    {
      title: '',
      dataIndex: '',
      width: '160px',
      render: (_, record) => (
        <div className="table-actions">
          <Link to={`/evenement/${record.id}`}>
            <Tooltip title={i18n('common.view')}>
              <i className="fa-regular fa-eye table-actions-icon"></i>
            </Tooltip>
          </Link>
          {hasPermissionToEdit && (
            <Link to={`/evenement/${record.id}/edit`}>
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

export default EvenementListTable;
