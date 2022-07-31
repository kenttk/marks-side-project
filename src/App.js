import SideNav from "./components/side-nav/SideNav";
import Header from "./components/header/Header";
import AppContents from "./components/app-contents/AppContents";

function App() {
  return (
    <main className="grid-container">
      <Header />
        <SideNav />
      <AppContents />
    </main>
  );
}

export default App;
