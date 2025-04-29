import { Outlet, Link } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="flex h-dvh">
      {/* سايد منيو ثابت */}
      <div className="w-[200px] bg-black text-white p-4">
        <div className="logo text-3xl text-white/50 pt-3 text-center font-bold mb-6">
          LOGO
        </div>
        <ul className="space-y-2">
          <li><Link to="/" className="hover:text-blue-300">General</Link></li>
          <li><Link to="/users" className="hover:text-blue-300">Users</Link></li>
          <li><Link to="/settings" className="hover:text-blue-300">Settings</Link></li>
          <li><Link to="/logout" className="hover:text-blue-300">Log out</Link></li>
        </ul>
      </div>

      {/* المحتوى المتغير */}
      <div className="flex-1 bg-gray-100 p-6">
        <Outlet />
      </div>
    </div>
  );
}

export default App;

