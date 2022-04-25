class Product {
 constructor(name, price, year) {
  this.name = name
  this.price = price
  this.year = year
 }
}
class UI {
 addPr(product) {
  const productList = document.getElementById('product-list')
  const element = document.createElement('div')
  element.innerHTML = `
       <div class="card text-center mb-4">
         <div class="card-body">
             <strong>product name</strong>;${product.name}
             <strong>product price</strong>;${product.price}
             <strong>product year</strong>;${product.year}
             <a href="#" class="btn btn-danger" name="borrar">borrar</a>
         </div>
      </div> 
    `
  productList.appendChild(element)
 }

 resetform() {
  document.getElementById('product-form').rest()
 }
 deleteProduct(element) {
  if (element.name === 'borrar') {
   element.parentElement.parentElement.parentElement.remove()
   this.showMessage('Producto eliminado correctamente', 'info')
  }
 }

 showMessage(menssage, cssClass) {
  const div = document.createElement('div')
  div.className = `alert alert-${cssClass} mt-2`
  div.appendchild(document.createTextNode(menssage))
  //Showing in DOM
  const container = document.querySelector('.container')
  const app = document.queryselector('#App')
  container.insertBefore(div, app)
  setTimeout(function () {
   document.queryselector('alert').remove()
  }, 1000)
 }
}
//DOM Events
document
 .getElementById('product-form')
 .addEventListener('submit', function (e) {
  const name = document.getElementById('name').value
  const price = document.getElementById('price').value
  const year = document.getElementById('year').value

  const produc = new product(name, price, year)

  const ui = new UI()
  if (name === '' || price === '' || year === '') {
   return ui.showMessage('Complete todos los campos por favor', 'danger')
  }
  // Save Product
  ui.addProduct(product)
  ui.restForm()
  ui.showMessage('Producto Agregado correctamente', 'success')

  e.preventDefaut()
 })
{
 document.getElementById('product-list').addEventListener('click', (e) => {
  const ui = new UI()
  ui.deleteProduct(e.target)
  e.preventDefault()
 })
}
