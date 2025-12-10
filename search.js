function search(query, data) {
  query = query.trim();

  if (!query) return []; 

  return data.filter(item => item.toLowerCase().includes(query.toLowerCase()));
}

module.exports = search; 

return data
  .filter(...)
  .sort();


//parametrest
 function search(query, data, limit = 10) {


// Basic search function
// Sort results alphabetically
