function search(query, data) {
  query = query.trim();

  if (!query) return []; 

  return data.filter(item => item.toLowerCase().includes(query.toLowerCase()));
}

module.exports = search; 

return data
  .filter(...)
  .sort();


// Basic search function
