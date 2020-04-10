function inventorySearch() {
  var section = 'inventory';
  var query = `query inventoryQuery($section:String!) {
  entries (section: $section) {
    title
  }
}`;

  fetch('/api', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({
      query,
      variables: {
        section
      },
    })
  })
}
