require("isomorphic-fetch");

module.exports = {
  search: function(searchTerm, sortBy) {
    return fetch(
      `https://www.reddit.com/r/buildapcsales/search.json?q=${searchTerm}&sort=${sortBy}&limit=100&restrict_sr=on&include_over_18=on`
    )
      .then(res => res.json())
      .then(data => data.data.children.map(post_thread => post_thread.data))
      .catch(err => console.log(err));
  }
};
