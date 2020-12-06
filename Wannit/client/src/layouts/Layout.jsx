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
        <div className="kashiff">
        {props.children}
        </div>
      </div>

        <Footer />
    </div>
  );
}
