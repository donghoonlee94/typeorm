import {
  Column,
  CreateDateColumn,
  Entity,
  Generated,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  VersionColumn,
} from 'typeorm';

@Entity()
export class UserModel {
  // 자동으로 증가하는 값을 사용하고 싶다면 PrimaryGeneratedColumn을 사용하면 된다.
  // 자동으로 증가하는 값을 사용하고 싶지 않다면 PrimaryColumn을 사용하면 된다.
  // 하지만 이렇게 사용하면 자동으로 증가하는 값을 사용하지 않는다.
  @PrimaryGeneratedColumn()
  //   @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  title: string;

  // 데이터가 생성되는 날까지 표시하고 싶다면 CreateDateColumn을 사용하면 된다.
  @CreateDateColumn()
  createdAt: Date;

  // 데이터가 수정되는 날까지 표시하고 싶다면 UpdateDateColumn을 사용하면 된다.
  @UpdateDateColumn()
  updatedAt: Date;

  // 업데이트 될 때마다 버전을 증가시키고 싶다면 VersionColumn을 사용하면 된다.
  // Save 메서드를 호출할 때마다 버전을 증가시킨다.
  @VersionColumn()
  version: number;

  // 추가적인 값을 사용하고 싶다면 Generated을 사용하면 된다.
  // increment: 1씩 증가
  // uuid: UUID 생성
  // rowid: 테이블 내에서 유니크한 값 생성
  @Column()
  @Generated('increment')
  additionalId: number;
}
