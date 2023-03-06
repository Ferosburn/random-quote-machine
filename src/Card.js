import { randomQuote } from "randomquote-api";
import { useState } from "react";

function Card() {
  const [quote, setQuote] = useState(randomQuote())
  const twitter = `https://twitter.com/intent/tweet?hashtags=quotes&text="${quote.quote}" ${quote.author}`;

  const newQuote = () => {
    setQuote(randomQuote());
  }

  return (
    <div
      id="quote-box"
      className="card position-absolute top-50 start-50 translate-middle p-4"
      style={{maxWidth: 30+"rem"}}
    >
      <div className="card-body p-0">
        <p id="text" className="fs-3 card-text">
          {quote.quote}
        </p>
        <p id="author" className="fs-6 float-end">- {quote.author}</p>
      </div>
      <div className="d-flex justify-content-between">
        <a id="tweet-quote" href={twitter} target="_blank">
          <button className="btn btn-primary">
            twitter
          </button>
        </a>
        <button onClick={newQuote} id="new-quote" className="btn btn-primary">
          new quote
        </button>
      </div>
    </div>
  );
}

export default Card;
