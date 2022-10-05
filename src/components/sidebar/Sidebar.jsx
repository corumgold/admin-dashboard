import "./sidebar.scss";
import {
  DashboardOutlined,
  SettingsSystemDaydreamOutlined,
  PsychologyOutlined,
  SettingsApplicationsOutlined,
  AccountCircleOutlined,
  ExitToAppOutlined,
  NotificationsNoneOutlined,
  InsertChartOutlined,
  LocalShippingOutlined,
  CreditCardOutlined,
  StoreOutlined,
  PersonOutlined
} from "@mui/icons-material";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">AcmeAdmin</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardOutlined className="icon" />
            <span>Dashboard</span>
          </li>
          <p className="title">LISTS</p>
          <li>
          <PersonOutlined className="icon" />

            <span>Users</span>
          </li>
          <li>
          <StoreOutlined className="icon" />
            <span>Products</span>
          </li>
          <li>
          <CreditCardOutlined className="icon" />
            <span>Orders</span>
          </li>
          <li>
          <LocalShippingOutlined className="icon" />
            <span>Delivery</span>
          </li>
          <p className="title">USEFUL</p>
          <li>
          <InsertChartOutlined className="icon" />
            <span>Stats</span>
          </li>
          <li>
          <NotificationsNoneOutlined className="icon" />
            <span>Notifications</span>
          </li>
          <p className="title">SERVICE</p>
          <li>
            <SettingsSystemDaydreamOutlined className="icon" />
            <span>System Health</span>
          </li>
          <li>
            <PsychologyOutlined className="icon" />
            <span>Logs</span>
          </li>
          <li>
          <SettingsApplicationsOutlined className="icon" />
            <span>Setting</span>
          </li>
          <p className="title">USER</p>
          <li>
          <AccountCircleOutlined className="icon" />
            <span>Profile</span>
          </li>
          <li>
          <ExitToAppOutlined className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">color options</div>
    </div>
  );
};

export default Sidebar;
