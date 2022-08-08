import React from 'react';
import Toolbar from 'src/view/shared/styles/Toolbar';
import { Button, Tooltip, Popconfirm } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import evenementSelectors from 'src/modules/evenement/evenementSelectors';
import selectors from 'src/modules/evenement/list/evenementListSelectors';
import auditLogSelectors from 'src/modules/auditLog/auditLogSelectors';
import actions from 'src/modules/evenement/list/evenementListActions';
import destroyActions from 'src/modules/evenement/destroy/evenementDestroyActions';
import { Link } from 'react-router-dom';
import { i18n } from 'src/i18n';
import destroySelectors from 'src/modules/evenement/destroy/evenementDestroySelectors';
import {
  FileExcelOutlined,
  DeleteOutlined,
  PlusOutlined,
  UploadOutlined,
  FileSearchOutlined,
} from '@ant-design/icons';

import { Input, Space } from 'antd';

const { Search } = Input;

const EvenementToolbar = (props) => {
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
    evenementSelectors.selectPermissionToDestroy,
  );
  const hasPermissionToCreate = useSelector(
    evenementSelectors.selectPermissionToCreate,
  );
  const hasPermissionToImport = useSelector(
    evenementSelectors.selectPermissionToImport,
  );

  const onSearch = (value: string) => console.log(value);

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
      <Link to="/evenement/new">
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
        <Link to="/audit-logs?entityNames=evenement">
          <Button icon={<FileSearchOutlined />}>
            {i18n('auditLog.menu')}
          </Button>
        </Link>
      )}

      {renderExportButton()}
      {/* <Search
        placeholder={i18n('common.search')}
        onSearch={onSearch}
        style={{ width: 'auto' }}
      /> */}
    </Toolbar>
  );
};

export default EvenementToolbar;
