data = {
  description: '',
  header_image: '',
  data: []
}

description = document.querySelector('.subTitle.desc').textContent
header_image = document.querySelector('.BackgroundImage')
src = 'https:' + header_image.getAttribute('src')

data.description = description
data.header_image = src

products = document.querySelectorAll('.product-row')
for( let product of products){
  img = product.querySelector('.logo__image').getAttribute('src')
  title = product.querySelector('.bottom-line__content').textContent
  link = product.querySelector('.cta-button').getAttribute('href')
  link = decodeURIComponent(link)
  link = link.substr( link.indexOf('http'), link.length)

  pathArray = link.split( '/' );
  protocol = pathArray[0];
  host = pathArray[2];
  url = protocol + '//' + host;

  attributes = products[0].querySelector('.attributes')
  attrItems = []
  if( attributes != null ){
    attributes.querySelectorAll('li').forEach( function(item){
      attrItems.push(item.textContent)
    } )
  }

  data.data.push({
    img,
    title,
    url,
    attributes: attrItems
  })
}