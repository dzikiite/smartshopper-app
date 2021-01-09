export const createProductsStore = () => {
    return {
        products: [],

        addProduct(name, link, brands, price, priority) {
            const product = {name, link, brands, price, priority};
            this.products.push(product);
        },

        removeProduct(id) {
            this.products = this.products.filter(product => id !== product.id);
        }
    }
}