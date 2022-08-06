import { Header } from '../../components/Header/Header';
import { CustomSpinner } from '../../components/common/CustomSpinner/CustomSpinner';
import './DashboardContainer.css';

export const DashboardContainer = () => {
  const showCookies = async () => {
    const res = await fetch('http://localhost:3001/auth/check-user', {
      credentials: 'include',
    });
    const data = await res.json();
    console.log(data);
  };
  return (
    <div className="dashboard-wrapper">
      <Header />
      <button onClick={showCookies}>Click</button>
      <CustomSpinner />
    </div>
  );
};
