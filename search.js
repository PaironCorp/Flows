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
return results.slice(0, limit);

 function search(query, data, limit = 10) {
// typers
if (!Array.isArray(data)) return [];

// Basic search function
// Sort results alphabetically

try { ... } catch(e) { return []; }


console.log("query:", query);
