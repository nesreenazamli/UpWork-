import Card from "./Components/Card/Card";
import CardImage from "./Assets/Card.png";
import Filter from "./Components/Filter/Filter";
import Cursor from "./Components/Cursor/Cursor";

function App() {
  const data = [
    {
      img: CardImage,
      title: "Whirlpool Of India",
      price: "$1576",
      rate: "+INR$0.01 (+0.05%)",
      content:
        " Whirlpool of India is a completely debt free subsidiary of the Whirlpool Corporation an American multinational manufacturer... ",
      date: "PUBLISHED ON JAN 23",
    },
    {
      img: CardImage,
      title: "Whirlpool Of India",
      price: "$1576",
      rate: "+INR$0.01 (+0.05%)",
      content:
        " Whirlpool of India is a completely debt free subsidiary of the Whirlpool Corporation an American multinational manufacturer... ",
      date: "PUBLISHED ON JAN 23",
    },
    {
      img: CardImage,
      title: "Whirlpool Of India",
      price: "$1576",
      rate: "+INR$0.01 (+0.05%)",
      content:
        " Whirlpool of India is a completely debt free subsidiary of the Whirlpool Corporation an American multinational manufacturer... ",
      date: "PUBLISHED ON JAN 23",
    },
  ];

  return (
    <div className="container App" id="app">
    <Cursor/> 
      <h1 className="tilte">
        Companies <br />
        suggested
      </h1>
      <Filter />
      <div className="cards-container">
        {data.map((item) => (
          <Card
            img={item.img}
            title={item.title}
            price={item.price}
            rate={item.rate}
            content={item.content}
            date={item.date}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
