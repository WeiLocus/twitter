import { Outlet, useLocation } from 'react-router-dom';
import { GridContainer } from '../../globalStyles';
import { Navbar } from '../Navbar';
import Popular from '../Popular';

export default function TweetLayout() {
  const { pathname } = useLocation();

  return (
    <GridContainer>
      <div className="fr1">
        <Navbar />
      </div>
      <div className="fr2">
        <Outlet />
      </div>
      <div className="fr3">{!pathname.includes('settings') && <Popular />}</div>
    </GridContainer>
  );
}
