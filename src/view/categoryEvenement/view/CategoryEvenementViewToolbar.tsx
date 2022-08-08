import {
  DeleteOutlined,
  EditOutlined,
  FileSearchOutlined,
} from '@ant-design/icons';
import { Button, Popconfirm, Tooltip } from 'antd';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { i18n } from 'src/i18n';
import auditLogSelectors from 'src/modules/auditLog/auditLogSelectors';
import categoryEvenementSelectors from 'src/modules/categoryEvenement/categoryEvenementSelectors';
import destroyActions from 'src/modules/categoryEvenement/destroy/categoryEvenementDestroyActions';
import destroySelectors from 'src/modules/categoryEvenement/destroy/categoryEvenementDestroySelectors';
import Toolbar from 'src/view/shared/styles/Toolbar';
import { useRouteMatch } from 'react-router-dom';

const CategoryEvenementViewToolbar = (props) => {
  const dispatch = useDispatch();
  const match = useRouteMatch();

  const hasPermissionToAuditLogs = useSelector(
    auditLogSelectors.selectPermissionToRead,
  );
  const hasPermissionToEdit = useSelector(
    categoryEvenementSelectors.selectPermissionToEdit,
  );
  const hasPermissionToDestroy = useSelector(
    categoryEvenementSelectors.selectPermissionToDestroy,
  );
  const destroyLoading = useSelector(
    destroySelectors.selectLoading,
  );

  const id = match.params.id;

  const doDestroy = () => {
    dispatch(destroyActions.doDestroy(id));
  };

  return (
    <Toolbar>
      {hasPermissionToEdit && (
        <Link to={`/category-publication/${id}/edit`}>
                <Tooltip title={i18n('common.edit')}>
          <Button type="primary"  >
          <i className="fa-regular fa-pen-to-square"></i>
          </Button>
          </Tooltip>
        </Link>
      )}

      {hasPermissionToDestroy && (
        <Popconfirm
          title={i18n('common.areYouSure')}
          onConfirm={doDestroy}
          okText={i18n('common.yes')}
          cancelText={i18n('common.no')}
        >
        <Tooltip title={i18n('common.destroy')}>
          <Button
            type="primary"
          
            disabled={destroyLoading}
          >
     <i className="fa-regular fa-trash-can"></i>
          </Button>
        </Tooltip>
        </Popconfirm>
      )}

      {hasPermissionToAuditLogs && (
        <Link
          to={`/audit-logs?entityId=${encodeURIComponent(
            id,
          )}`}
        >
          <Button icon={<FileSearchOutlined />}>
            {i18n('auditLog.menu')}
          </Button>
        </Link>
      )}
    </Toolbar>
  );
};

export default CategoryEvenementViewToolbar;
