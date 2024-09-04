import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoryDto } from 'src/dto/categoryDto';
import { CategoriesEntity } from 'src/entities/categories.entity';
import { Category } from 'src/models/category.model';
import { DeleteResult, Repository } from 'typeorm';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(CategoriesEntity)
    private categoryRepository: Repository<CategoriesEntity>,
  ) {}
  async findAll(): Promise<Category[]> {
    return this.categoryRepository.find();
  }
  async findById(id: number): Promise<Category> {
    return this.categoryRepository.findOneBy({ id });
  }
  async create(categoryDto: CategoryDto): Promise<Category> {
    return this.categoryRepository.save(categoryDto);
  }
  async update(id: number, categoryDto: CategoryDto): Promise<Category> {
    await this.categoryRepository.update(id, categoryDto);
    return this.findById(id);
  }
  async delete(id: number): Promise<boolean> {
    const isFlag: DeleteResult = await this.categoryRepository.delete(id);
    console.log(isFlag.affected);

    return isFlag.affected === 1;
  }
}
