fetch('products.json')
  .then(response => response.json())
  .then(data => {
    const templateSource = document.getElementById('product-template').innerHTML;
    const template = Handlebars.compile(templateSource);
    const compiledHtml = template(data);
    document.getElementById('product-container').innerHTML = compiledHtml;
  })
  .catch(error => console.error('Error loading products:', error));
