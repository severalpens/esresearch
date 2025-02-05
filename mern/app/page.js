'use client';

import { useState, useEffect } from 'react';

export default function Page() {
  const [faqs, setFaqs] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchFaqs = async () => {
      const data = await fetch('http://localhost:5000/faqs');
      const faqs = await data.json();
      setFaqs(faqs);
    };
    fetchFaqs();
  }, []); 

  const newSearch = async (e) => {
    e.preventDefault();
    const search = e.target[0].value;
    const data = await fetch(`http://localhost:5000/faqs?search=${search}`);
    const jsonData = await data.json();
    setSearchResults(jsonData);
  };

  return (
    <div  className='border mx-4 p-4'>
      <h1>FAQs</h1>
      <div>
        <div>
          <h2>Search</h2>
          <form onSubmit={newSearch}>
            <input type="text" />
            <button type="submit">Search</button>
          </form>
        </div>
        <div id="searchResultDiv" className='border mx-4 p-4'>
        <ul>
          {searchResults.map((searchResult) => (
            <li key={searchResult._id}>
              <div><strong>Q:</strong> {searchResult._source.Question}</div>
              <div><strong>A:</strong> {searchResult._source.Answer}</div>
            </li>
          ))}
        </ul>
        </div>
        <ul>
          {faqs.map((faq) => (
            <li key={faq._id}>
              <div><strong>Q:</strong> {faq._source.Question}</div>
              <div><strong>A:</strong> {faq._source.Answer}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
