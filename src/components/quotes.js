import React, { useState, useEffect } from 'react';
import './quotes.css';

export default function Quotes() {
  const [quote, setQuote] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);

  useEffect(() => {
    let isMounted = true;
    const getQuote = async () => {
      setLoading(true);
      try {
        const req = await fetch(
          'https://api.api-ninjas.com/v1/quotes?category=computers',
          {
            headers: {
              'X-Api-Key': 'eS0+5EBU7GMIEIXHB5+6FA==m6Q9ZwKInA5U2Pex',
            },
            contentType: 'application/json',
          },
        );
        if (isMounted) {
          const resp = await req.json();
          const data = resp[0].quote;
          setQuote(`${data}`);
        }
      } catch (err) {
        setError(true);
      }
      setLoading(false);
    };
    getQuote();

    return () => {
      isMounted = false;
    };
  }, []);

  let content;
  if (isLoading) {
    content = <span className="loading" />;
  } else if (isError) {
    content = <h1>Error loading the quotes. Please try again.</h1>;
  } else if (quote) {
    content = <q className="quote">{quote}</q>;
  }
  return <div className="quotes">{content}</div>;
}
