import ProfilePage from './pages/profile/ProfilePage';
import { mockUsers } from './mockData';

function App() {
  return (
    <ProfilePage users={mockUsers} />
  );
}

export default App;
