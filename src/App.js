import styles from './App.module.scss';
import Navbar from './components/Navbar/Navbar';
import SocialMediaBadge from './components/SocialMediaBadge/SocialMediaBadge';
import AppRoutes from './components/AppRoutes/AppRoutes';

function App() {
  return (
      <div className={styles.app} id="app">
        <Navbar />
        <SocialMediaBadge />
        <AppRoutes />
      </div>
  );
}

export default App;