import Sidebar from './Component/Page/Sidebar';
import Footer from './Component/Page/Footer';
import Content from './Component/Page/Content';
function App(props) {
  return (
    <section>
		    <div class="container">
          <Sidebar />
          <Content />
          <Footer />
        </div >
    </section>
    );
}
export default App;
