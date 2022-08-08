import React from 'react';
import Toolbar from 'src/view/shared/styles/Toolbar';
import { Button, Tooltip, Popconfirm } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import categoryPublicationSelectors from 'src/modules/categoryPublication/categoryPublicationSelectors';
import selectors from 'src/modules/categoryPublication/list/categoryPublicationListSelectors';
import auditLogSelectors from 'src/modules/auditLog/auditLogSelectors';
import actions from 'src/modules/categoryPublication/list/categoryPublicationListActions';
import destroyActions from 'src/modules/categoryPublication/destroy/categoryPublicationDestroyActions';
import { Link } from 'react-router-dom';
import { i18n } from 'src/i18n';
import destroySelectors from 'src/modules/categoryPublication/destroy/categoryPublicationDestroySelectors';
import {
  FileExcelOutlined,
  DeleteOutlined,
  PlusOutlined,
  UploadOutlined,
  FileSearchOutlined,
} from '@ant-design/icons';

const CategoryPublicationToolbar = (props) => {
  const dispatch = useDispatch();
  const selectedKeys = useSelector(
    selectors.selectSelectedKeys,
  );
  const loading = useSelector(selectors.selectLoading);
  const destroyLoading = useSelector(
    destroySelectors.selectLoading,
  );
  const exportLoading = useSelector(
    selectors.selectExportLoading,
  );
  const hasRows = useSelector(selectors.selectHasRows);
  const hasPermissionToAuditLogs = useSelector(
    auditLogSelectors.selectPermissionToRead,
  );
  const hasPermissionToDestroy = useSelector(
    categoryPublicationSelectors.selectPermissionToDestroy,
  );
  const hasPermissionToCreate = useSelector(
    categoryPublicationSelectors.selectPermissionToCreate,
  );
  const hasPermissionToImport = useSelector(
    categoryPublicationSelectors.selectPermissionToImport,
  );

  const doExport = () => {
    dispatch(actions.doExport());
  };

  const doDestroyAllSelected = () => {
    dispatch(destroyActions.doDestroyAll(selectedKeys));
  };

  const renderExportButton = () => {
    const disabled = !hasRows || loading;
    const button = (
      <Button
        disabled={disabled}

        onClick={doExport}
        loading={exportLoading}
      >
   <i className="fa-regular fa-file-excel"></i>
      </Button>
    );

    if (disabled) {
      return (
        <Tooltip title={i18n('common.noDataToExport')}>
          {button}
        </Tooltip>
      );
    }
   return (
        <Tooltip title={i18n('common.export')}>
          {button}
        </Tooltip>
      );
  };

  const renderDestroyButton = () => {
    if (!hasPermissionToDestroy) {
      return null;
    }

    const disabled = !selectedKeys.length || loading;
    const button = (

      <Button
        disabled={disabled}
        loading={destroyLoading}
        type="primary"

      >
     <i className="fa-regular fa-trash-can"></i>
      </Button>
  
    );
    const buttonWithConfirm = (
      <Popconfirm
        title={i18n('common.areYouSure')}
        onConfirm={() => doDestroyAllSelected()}
        okText={i18n('common.yes')}
        cancelText={i18n('common.no')}
      >
        {button}
      </Popconfirm>
    );

    if (disabled) {
      return (
        <Tooltip title={i18n('common.mustSelectARow')}>
          {button}
        </Tooltip>
      );
    }
    return (
      <Tooltip title={i18n('common.destroy')}>
        {buttonWithConfirm}
      </Tooltip>
    );


  };

  return (
    <Toolbar>
      {hasPermissionToCreate && (
        <Link to="/category-publication/new">
              <Tooltip title={i18n('common.new')}>
          <Button type="primary" >
          <i className=
"fa-regular fa-square-plus"></i>
          </Button>
          </Tooltip>

        </Link>
      )}

     

      {renderDestroyButton()}

      {hasPermissionToAuditLogs && (
        <Link to="/audit-logs?entityNames=categoryPublication">
          <Button icon={<FileSearchOutlined />}>
            {i18n('auditLog.menu')}
          </Button>
        </Link>
      )}

      {renderExportButton()}
    </Toolbar>
  );
};

export default CategoryPublicationToolbar;
