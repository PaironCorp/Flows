function search(query, data) {
  query = query.trim();

  if (!query) return []; 

  return data.filter(item => item.toLowerCase().includes(query.toLowerCase()));
}

module.exports = search;

// Basic search function
