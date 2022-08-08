import { Table, Popconfirm, Tooltip } from 'antd';
import { i18n } from 'src/i18n';
import actions from 'src/modules/thematique/list/thematiqueListActions';
import destroyActions from 'src/modules/thematique/destroy/thematiqueDestroyActions';
import selectors from 'src/modules/thematique/list/thematiqueListSelectors';
import destroySelectors from 'src/modules/thematique/destroy/thematiqueDestroySelectors';
import thematiqueSelectors from 'src/modules/thematique/thematiqueSelectors';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import TableWrapper from 'src/view/shared/styles/TableWrapper';
import ButtonLink from 'src/view/shared/styles/ButtonLink';
import TagsListItem from 'src/view/tags/list/TagsListItem';

const ThematiqueListTable = (props) => {
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
    thematiqueSelectors.selectPermissionToEdit,
  );
  const hasPermissionToDestroy = useSelector(
    thematiqueSelectors.selectPermissionToDestroy,
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
      title: i18n('entities.thematique.fields.titre'),
      sorter: true,
      dataIndex: 'titre',
    },
    {
      title: i18n('entities.thematique.fields.description'),
      sorter: true,
      dataIndex: 'description',
    },
    {
      title: i18n('entities.thematique.fields.tags'),
      sorter: false,
      dataIndex: 'tags',
      render: (value) => <TagsListItem value={value} />,
    },
    {
      title: '',
      dataIndex: '',
      width: '160px',
      render: (_, record) => (
        <div className="table-actions">
          <Link to={`/thematique/${record.id}`}>
            <Tooltip title={i18n('common.view')}>
              <i className="fa-regular fa-eye table-actions-icon"></i>
            </Tooltip>
          </Link>
          {hasPermissionToEdit && (
            <Link to={`/thematique/${record.id}/edit`}>
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

export default ThematiqueListTable;
