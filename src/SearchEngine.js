import React, { useState } from "react";

export default function SearchEngine() {
  let [keyword, setKeyword] = useState("");
  function search(event) {
    event.preventDefault();
    alert(`Hello, You typed ${keyword}`);
  }

  function handleKeyword(event) {
    setKeyword(event.target.value);
  }
  return (
    <div className="row">
      <div className="col-12 searchbar">
        <form onSubmit={search}>
          <input
            type="search"
            placeholder="Write whatever"
            onChange={handleKeyword}
          />
        </form>
      </div>
    </div>
  );
}
