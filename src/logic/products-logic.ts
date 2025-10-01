import { ProductsDTO } from "@/interfaces/ProductsDTO";
import { ProductsRepository } from "@/repositories/implementations/products-repository";
import { AppError } from "@/utils/AppError";

class ProductsLogic {
  private productsRepository: ProductsRepository

  constructor() {
    this.productsRepository = new ProductsRepository()
  }
  async create({name, description, price, category }: ProductsDTO) {
    await this.productsRepository.save({
      name,
      price,
      description,
      category
    })
  }
  async index() {
    const products = await this.productsRepository.index()

    if(!products.length) {
      throw new AppError("Nenhum produto encontrado")
    }

    return products
  }
  async remove(id: string) {
    await this.productsRepository.remove(id)
  }
  async show(id: string) {
    const product = await this.productsRepository.show(id)

    if(!product) {
      throw new AppError("Nenhum produto encontrado")
    }

    return product
  }

  async update({ name, description, price, category }: ProductsDTO, id: string) {
    const product = await this.productsRepository.show(id)

    if(!product) {
      throw new AppError("Nenhum produto encontrado")
    }

    await this.productsRepository.update({ 
      name,
      description,
      price,
      category
    }, id)
  }
}

export { ProductsLogic }