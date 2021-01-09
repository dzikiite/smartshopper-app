export const createBrandsStore = () => {
    return {
        brands: [{name: 'house', link: 'https://google.pl'}],

        addBrand(name, link) {
            const brand = {name, link};
            this.brands.push(brand);
        },

        removeBrand(id) {
            this.brands = this.brands.filter(brand => id !== brand.name);
        }

    }
}