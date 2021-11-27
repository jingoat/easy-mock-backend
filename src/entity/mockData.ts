import { EntityModel } from '@midwayjs/orm';
import { Column, PrimaryGeneratedColumn } from 'typeorm';

@EntityModel('mock_data')
export class MockData {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  level1: string;

  @Column()
  level2: string;

  @Column()
  level3: string;

  @Column()
  level4: string;

  @Column()
  level5: string;

  @Column()
  level6: string;

  @Column()
  res_data: string;
}
