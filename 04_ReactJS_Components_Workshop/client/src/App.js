import { Header } from "./components/common/Header";
import { Footer } from "./components/common/Footer";
import { Search } from "./components/search/Search";
import { UserList } from "./components/user-list/UserList";
import './App.css';
import {useState, useEffect} from "react";
import * as userService from "./services/userService";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    userService.getAll()
      .then(users => setUsers(users));
  }, []);

  // console.log(users);

  return (
    <div className="App">
      <Header />
      <main className="main">
        {/* <!-- Section component  --> */}
        <section className="card users-container">
          <Search />
          <UserList users={users}/>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
