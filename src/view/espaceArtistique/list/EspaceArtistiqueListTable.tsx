import { Table, Popconfirm, Tooltip } from 'antd';
import { i18n } from 'src/i18n';
import actions from 'src/modules/espaceArtistique/list/espaceArtistiqueListActions';
import destroyActions from 'src/modules/espaceArtistique/destroy/espaceArtistiqueDestroyActions';
import selectors from 'src/modules/espaceArtistique/list/espaceArtistiqueListSelectors';
import destroySelectors from 'src/modules/espaceArtistique/destroy/espaceArtistiqueDestroySelectors';
import espaceArtistiqueSelectors from 'src/modules/espaceArtistique/espaceArtistiqueSelectors';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import TableWrapper from 'src/view/shared/styles/TableWrapper';
import ButtonLink from 'src/view/shared/styles/ButtonLink';
import FilesListView from 'src/view/shared/list/FileListView';
import ArtisteListItem from 'src/view/artiste/list/ArtisteListItem';

const EspaceArtistiqueListTable = (props) => {
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
    espaceArtistiqueSelectors.selectPermissionToEdit,
  );
  const hasPermissionToDestroy = useSelector(
    espaceArtistiqueSelectors.selectPermissionToDestroy,
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
      title: i18n(
        'entities.espaceArtistique.fields.artiste',
      ),
      sorter: false,
      dataIndex: 'artiste',
      render: (value) => <ArtisteListItem value={value} />,
    },
    {
      title: i18n(
        'entities.espaceArtistique.fields.supports',
      ),
      sorter: false,
      dataIndex: 'supports',
      render: (value) => <FilesListView value={value} />,
    },
    {
      title: i18n('entities.espaceArtistique.fields.titre'),
      sorter: true,
      dataIndex: 'titre',
    },
    {
      title: i18n(
        'entities.espaceArtistique.fields.description',
      ),
      sorter: true,
      dataIndex: 'description',
    },
    {
      title: '',
      dataIndex: '',
      width: '160px',
      render: (_, record) => (
        <div className="table-actions">
          <Link to={`/espace-artistique/${record.id}`}>
            <Tooltip title={i18n('common.view')}>
              <i className="fa-regular fa-eye table-actions-icon"></i>
            </Tooltip>
          </Link>
          {hasPermissionToEdit && (
            <Link
              to={`/espace-artistique/${record.id}/edit`}
            >
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

export default EspaceArtistiqueListTable;
