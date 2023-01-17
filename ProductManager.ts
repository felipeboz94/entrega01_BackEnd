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
export class Product {
    title : string;
    description : string;
    price : number;
    thumbnail : string;
    code : string;
    stock : number;

    constructor(title : string, description : string, price : number, thumbnail : string, code : string,stock : number){

        //Valido que ningún campo sea nulo
        if (!title || !description || !price || !thumbnail || !code || !stock ){            
            console.log("Cuidado. Hay campos que están vacíos");
        }
        else{
            this.title = title;
            this.description = description;
            this.price = price;
            this.thumbnail = thumbnail;
            this.code = code;
            this.stock = stock;
        }

    }
}

export class ProductManager {
    //Propiedad productos. Array vacío
    //id : number = 0;
    //producto : Product;
    productos = [];
    constructor(...productos){
        //this.productos = [this.id,this.producto];
        if (productos){
            for (let producto of productos){
                this.addProduct(producto);
            }
        }
    }
    addProduct(newProduct : Product) {
        
        let estaEnProductManager : boolean = false;
        if (this.productos){
            for (let producto of this.productos){
                if (newProduct.code === producto.producto.code){
                    estaEnProductManager = true;
                }
            }
        }
        if (estaEnProductManager){
            console.log('Error. Este producto ya se encuentra en el ProductManager. Código repetido.');
        }
        else{
            let id = this.productos.length + 1 ;
            let productoNuevo : {id:number,producto: Product} = {id:id,producto: newProduct};
            this.productos.push(productoNuevo);
            console.log("Producto agregado satisfactoriamente");
            console.log("Su id es: %d",id);
        }

    }

    getProducts() {
        return this.productos;
    }

    getProductById(id:number){
        let productoEncontrado : Product;        
        for (let producto of this.productos){
            if(producto.id == id){
                productoEncontrado = producto;
            }
        }
        if (productoEncontrado ){
            return productoEncontrado;
        }
        else{
            console.log('Error. No se encuentra tal ID')
            return null;
        }
    }
}