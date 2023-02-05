function App() {
    const [quotes, setQuotes] = React.useState([]);
    const [randomQuotes, setRandomQuotes] = React.useState([]);
    
    React.useEffect(() => {
      async function fetchData() {
        const response = await fetch("https://type.fit/api/quotes")
        const data = await response.json();
  
        setQuotes(data);
        let randomIndex = Math.floor(Math.random() * data.length);
        setRandomQuotes(data[randomIndex]);
      }
      fetchData();
    }, [])
  
    return (
      <div className="padding 5"> hello World
        {quotes.map(quote => (
          <div>{quote.text}</div>
        ))}
      </div>
    );
  }
  
  ReactDOM.render(<App />, document.getElementById("app"));