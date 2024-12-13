import './App.css';
import {Navigate, Route, Routes} from "react-router-dom";
import Login from "./components/Login";
import Profile   from "./components/Profile";

function ProtectedRoute(props) {
  alert("Inside ProtectedRoute");
    const isAuthenticated = false; // Replace with your authentication logic

    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    }

    let children;
    return children;
}
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
        />
      </Routes>
    </div>
  );
}
export default App;
