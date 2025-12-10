function search(query, data) {
  query = query.trim();
  return data.filter(item => item.toLowerCase().includes(query.toLowerCase()));
}

module.exports = search;
// Basic search function
