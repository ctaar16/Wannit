import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Layout(props) {
  return (
    <div>
      <div className="App">
        <Header
          currentUser={props.currentUser}
          handleLogout={props.handleLogout}
        />
        {props.children}
      </div>

      <Footer />
    </div>
  );
}
