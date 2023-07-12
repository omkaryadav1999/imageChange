import DisplayData from "./Services/Component/Display";
import "./styles.css";
import { Routes, Route } from "react-router-dom";
import CreatePost from "./Services/Component/CreatePost";
import EditPage from "./Services/Component/EditPage";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<DisplayData />} />
        <Route path="/createPost" element={<CreatePost />} />
        <Route path="/editPage/:id" element={<EditPage />} />
      </Routes>
    </div>
  );
}

export default App;
