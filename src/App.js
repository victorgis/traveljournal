import Header from "./components/Header"
import Footer from "./components/Footer"
import Card from "./components/Card";
import './App.css';
import data from "./data"


function App() {
  const mappedData = data.map((x) => {
    // console.log(x)
    return (
      <Card 
        key ={x.id}
        img={x.img}
        state={x.state}
        site={x.site}
        date={x.date}
        para={x.para}
        map={x.map}
      />
    )
  })
  return (
    <div className="back">
      <Header />
      {mappedData}
      <Footer />

    </div>
    
    
  );
}

export default App;
