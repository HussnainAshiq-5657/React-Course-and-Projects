import WithAuth from '../HOC/WithAuth';
import Dashboard from './Dashboard';

const WithAuthDashborad = WithAuth(Dashboard);
export default WithAuthDashborad;
