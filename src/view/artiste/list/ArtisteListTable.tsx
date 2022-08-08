import { Table, Popconfirm, Tooltip } from 'antd';
import { i18n } from 'src/i18n';
import actions from 'src/modules/artiste/list/artisteListActions';
import destroyActions from 'src/modules/artiste/destroy/artisteDestroyActions';
import selectors from 'src/modules/artiste/list/artisteListSelectors';
import destroySelectors from 'src/modules/artiste/destroy/artisteDestroySelectors';
import artisteSelectors from 'src/modules/artiste/artisteSelectors';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import TableWrapper from 'src/view/shared/styles/TableWrapper';
import ButtonLink from 'src/view/shared/styles/ButtonLink';
import EspaceArtistiqueListItem from 'src/view/espaceArtistique/list/EspaceArtistiqueListItem';
import DomaineListItem from 'src/view/domaine/list/DomaineListItem';

const ArtisteListTable = (props) => {
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
    artisteSelectors.selectPermissionToEdit,
  );
  const hasPermissionToDestroy = useSelector(
    artisteSelectors.selectPermissionToDestroy,
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
      title: i18n('entities.artiste.fields.nom'),
      sorter: true,
      dataIndex: 'nom',
    },
    {
      title: i18n('entities.artiste.fields.prenom'),
      sorter: true,
      dataIndex: 'prenom',
    },
    {
      title: i18n('entities.artiste.fields.email'),
      sorter: true,
      dataIndex: 'email',
    },
    {
      title: i18n('entities.artiste.fields.domaine'),
      sorter: false,
      dataIndex: 'domaine',
      render: (value) => <DomaineListItem value={value} />,
    },

    {
      title: i18n(
        'entities.artiste.fields.espaceArtistique',
      ),
      sorter: false,
      dataIndex: 'espaceArtistique',
      render: (value) => (
        <EspaceArtistiqueListItem value={value} />
      ),
    },
    {
      title: '',
      dataIndex: '',
      width: '160px',
      render: (_, record) => (
        <div className="table-actions">
          <Link to={`/artiste/${record.id}`}>
            <Tooltip title={i18n('common.view')}>
              <i className="fa-regular fa-eye table-actions-icon"></i>
            </Tooltip>
          </Link>
          {hasPermissionToEdit && (
            <Link to={`/artiste/${record.id}/edit`}>
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

export default ArtisteListTable;
