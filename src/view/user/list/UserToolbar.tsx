import {
  FileExcelOutlined,
  FileSearchOutlined,
  MailOutlined,
  DeleteOutlined,
  ImportOutlined,
} from '@ant-design/icons';
import { Button, Tooltip } from 'antd';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { i18n } from 'src/i18n';
import auditLogSelectors from 'src/modules/auditLog/auditLogSelectors';
import actions from 'src/modules/user/list/userListActions';
import selectors from 'src/modules/user/list/userListSelectors';
import userSelectors from 'src/modules/user/userSelectors';
import Toolbar from 'src/view/shared/styles/Toolbar';
import { SearchOutlined } from '@ant-design/icons';

const UserToolbar = (props) => {
  const dispatch = useDispatch();

  const selectedKeys = useSelector(
    selectors.selectSelectedKeys,
  );
  const loading = useSelector(selectors.selectLoading);
  const exportLoading = useSelector(
    selectors.selectExportLoading,
  );
  const hasRows = useSelector(selectors.selectHasRows);
  const hasPermissionToAuditLogs = useSelector(
    auditLogSelectors.selectPermissionToRead,
  );
  const hasPermissionToDestroy = useSelector(
    userSelectors.selectPermissionToDestroy,
  );
  const hasPermissionToCreate = useSelector(
    userSelectors.selectPermissionToCreate,
  );
  const hasPermissionToImport = useSelector(
    userSelectors.selectPermissionToImport,
  );

  const doExport = () => {
    dispatch(actions.doExport());
  };

  const doDestroyAllSelected = () => {
    dispatch(actions.doDestroyAllSelected());
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

    return(
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
        type="primary"

        onClick={doDestroyAllSelected}
      >
     <i className="fa-regular fa-trash-can"></i>
      </Button>
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
        {button}
      </Tooltip>
    );
  };

  return (
    <Toolbar>
      {hasPermissionToCreate && (
        <Link to="/user/new">
          <Tooltip  title={i18n('user.invite')}>
          <Button type="primary" >
          <i className="fa-regular fa-envelope"></i>
          </Button>
          </Tooltip>
        </Link>
      )}

      {/* {hasPermissionToImport && (
        <Link to="/user/importer">
          <Button type="primary" icon={<ImportOutlined />}>
            {i18n('common.import')}
          </Button>
        </Link>
      )} */}

      {renderDestroyButton()}

      {hasPermissionToAuditLogs && (
        <Link to="/audit-logs?entityNames=user">
          <Button icon={<FileSearchOutlined />}>
            {i18n('auditLog.menu')}
          </Button>
        </Link>
      )}

      {renderExportButton()}
    </Toolbar>
  );
};

export default UserToolbar;
