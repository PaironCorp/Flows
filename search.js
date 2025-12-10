function search(query, data) {
  return data.filter(item => item.toLowerCase().includes(query.toLowerCase()));
}

module.exports = search;
