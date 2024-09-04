import { IsString } from 'class-validator';

export class CategoryDto {
  categoryName?: string;
  @IsString()
  description?: string;
}
