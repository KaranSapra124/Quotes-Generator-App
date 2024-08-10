import React, { useEffect, useState } from "react";

const QuotesData = () => {
  // https://dummyjson.com/quotes
  const [quotesData, setQuotesData] = useState([]); //Array Destructuring

  useEffect(() => {
    const fetchQuotes = async (url) => {
      const res = await fetch(url);
      const data = await res.json();
      // console.log("HELLo")
      const { quotes } = data;
      setQuotesData(quotes);
    };
    fetchQuotes("https://dummyjson.com/quotes");
  }, []);

  return (
    <>
      <div>
        {quotesData?.map((elem) => {
          return (
            <div>
              <h1>{elem.quote}</h1>
              <p>-{elem.author}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default QuotesData;
