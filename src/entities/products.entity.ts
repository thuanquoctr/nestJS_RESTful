import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { CategoriesEntity } from './categories.entity';

@Entity('products')
export class ProductsEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  productName: string;
  @Column()
  price: number;
  @ManyToOne(() => CategoriesEntity)
  category: CategoriesEntity;
}
