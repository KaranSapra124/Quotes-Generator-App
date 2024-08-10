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
      <div className="flex flex-wrap">
        {quotesData?.map((elem) => {
          return (
            <div className="border w-fit m-5 p-10 rounded bg-black text-gray-200 hover:bg-gray-400 hover:text-black duration-500">
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
