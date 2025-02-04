'use client';

import { useState, useEffect } from 'react';

export default function Page() {
  const [faqs, setFaqs] = useState([]);
  const [searchResult, setSearchResult] = useState("");

  useEffect(() => {
    // Fetch FAQs when the component mounts
    const fetchFaqs = async () => {
      const data = await fetch('http://localhost:5000/faqs');
      const faqs = await data.json();
      setFaqs(faqs);
    };
    fetchFaqs();
  }, []); // Empty dependency array ensures this runs only once on mount

  const newSearch = async (e) => {
    e.preventDefault();
    const search = e.target[0].value;
    const data = await fetch(`http://localhost:5000/faqs?search=${search}`);
    const searchResults = await data.json();
    setSearchResult(searchResults[0]?.Answer || "No results found.");
  };

  return (
    <div>
      <h1>FAQs</h1>
      <div>
        <div>
          <h2>Search</h2>
          <form onSubmit={newSearch}>
            <input type="text" />
            <button type="submit">Search</button>
          </form>
        </div>
        <div id="searchResultDiv">
          <p>{searchResult}</p>
        </div>
        <ul>
          {faqs.map((faq) => (
            <li key={faq._id}>
              <div><strong>Q:</strong> {faq.Question}</div>
              <div><strong>A:</strong> {faq.Answer}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
