import "./App.css";
import PostCreate from "./features/PostCreate";
import Posts from "./features/Posts";

function App() {
  return (
    <main className="container mx-auto my-10">
      <PostCreate />
      <Posts />
    </main>
  );
}

export default App;
