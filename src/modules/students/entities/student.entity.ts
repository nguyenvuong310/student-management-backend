import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('students')
export class Student {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  birth_date: Date;

  @Column()
  university: string;
}
