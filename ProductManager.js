"use strict";
exports.__esModule = true;
exports.ProductManager = exports.Product = void 0;
/*
Clase ProductManager: Contenedora de productos.

Los productos tendrán las propiedades:

1. title        --> Nombre del producto;
2. description  --> Descripción del producto;
3. price        --> Precio;
4. thumbnail    --> Ruta de imagen;
5. code         --> Código identificador;
6. stock        --> Número de piezas disponibles.

Además tendrá los métodos:

1. addProduct   --> Agrega un producto al arreglo inicial. Valida
que no se repita la propiedad 'code' y que todos los campos sean obligatorios.
Además crea un id autoincrementable;
2. getProducts  --> Devuelve el arreglo con todos los productos creados hasta el momento;
3. getProductById > Busca en el arreglo el producto que coincida con el id. Si no coincide,
muestra en la consola un error de 'Not found'.
*/
var Product = /** @class */ (function () {
    function Product(title, description, price, thumbnail, code, stock) {
        //Valido que ningún campo sea nulo
        if (!title || !description || !price || !thumbnail || !code || !stock) {
            console.log("Cuidado. Hay campos que están vacíos");
        }
        else {
            this.title = title;
            this.description = description;
            this.price = price;
            this.thumbnail = thumbnail;
            this.code = code;
            this.stock = stock;
        }
    }
    return Product;
}());
exports.Product = Product;
var ProductManager = /** @class */ (function () {
    function ProductManager() {
        var productos = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            productos[_i] = arguments[_i];
        }
        //Propiedad productos. Array vacío
        //id : number = 0;
        //producto : Product;
        this.productos = [];
        //this.productos = [this.id,this.producto];
        if (productos) {
            for (var _a = 0, productos_1 = productos; _a < productos_1.length; _a++) {
                var producto = productos_1[_a];
                this.addProduct(producto);
            }
        }
    }
    ProductManager.prototype.addProduct = function (newProduct) {
        var estaEnProductManager = false;
        if (this.productos) {
            for (var _i = 0, _a = this.productos; _i < _a.length; _i++) {
                var producto = _a[_i];
                if (newProduct.code === producto.producto.code) {
                    estaEnProductManager = true;
                }
            }
        }
        if (estaEnProductManager) {
            console.log('Error. Este producto ya se encuentra en el ProductManager. Código repetido.');
        }
        else {
            var id = this.productos.length + 1;
            var productoNuevo = { id: id, producto: newProduct };
            this.productos.push(productoNuevo);
            console.log("Producto agregado satisfactoriamente");
            console.log("Su id es: %d", id);
        }
    };
    ProductManager.prototype.getProducts = function () {
        return this.productos;
    };
    ProductManager.prototype.getProductById = function (id) {
        var productoEncontrado;
        for (var _i = 0, _a = this.productos; _i < _a.length; _i++) {
            var producto = _a[_i];
            if (producto.id == id) {
                productoEncontrado = producto;
            }
        }
        if (productoEncontrado) {
            return productoEncontrado;
        }
        else {
            console.log('Error. No se encuentra tal ID');
            return null;
        }
    };
    return ProductManager;
}());
exports.ProductManager = ProductManager;


//-------------------TESTING-------------------

//PASO 1: Se crea instancia de objeto ProductManager
let productManager = new ProductManager();

//PASO 2: Se llama a getProducts() de la instancia creada, y debe devolver 
//un arreglo vacío
console.log("-------------------PASO 2-------------------");
console.log(productManager.getProducts());

//PASO 3: Se crea instancia de nuevo producto y se lo agrega con addProduct()
console.log("-------------------PASO 3-------------------");
let producto = new Product('zapatilla','deportivas',1500,'Mis Documentos','xsNike',2); 
productManager.addProduct(producto);    //addProduct() ya consolea
console.log(productManager.getProducts());

//PASO 4: Se intentaagregar nuevamente el producto anterior. Debe arrojar de repetición
//por código
console.log("-------------------PASO 4-------------------");
productManager.addProduct(producto);    //addProduct() ya consolea
console.log(productManager.getProducts());

//PASO 4-intermedio: Se crea instancia de nuevo producto y se lo agrega con addProduct()
console.log("-------------------PASO 4-intermedio-------------------");
let producto2 = new Product('zapatilla2','deportivas',1500,'Mis Documentos','xsAdidas',2) 
productManager.addProduct(producto2);    //addProduct() ya consolea
console.log(productManager.getProducts());

//PASO 5: Se usa la función getProductByID con un ID correcto:
console.log("-------------------PASO 5-------------------");
console.log(productManager.getProductById(1));

//PASO 6: Se usa la función getProductByID con un ID incorrecto:
console.log("-------------------PASO 6-------------------");
console.log(productManager.getProductById(15));