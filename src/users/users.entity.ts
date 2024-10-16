import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export default class User {
  @PrimaryGeneratedColumn() 
  id: number;
  @Column()
  email: string;
  @Column()
  password: string;
}