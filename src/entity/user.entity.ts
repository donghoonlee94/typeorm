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

  // 데이터의 타입을 지정하고 싶다면 Column을 사용하면 된다.
  // 자동으로 유추됨
  @Column({
    type: 'varchar',
    // 데이터베이스 칼럼 이름
    // 프로퍼티 이름으로 자동 유추
    name: 'title',
    // 데이터의 길이를 지정하고 싶다면 length를 사용하면 된다.
    length: 300,
    // 데이터의 기본값을 지정하고 싶다면 default를 사용하면 된다.
    default: 'default value',
    // 데이터의 필수 여부를 지정하고 싶다면 nullable을 사용하면 된다.
    nullable: true,
    // 데이터가 수정되지 않도록 하고 싶다면 update를 사용하면 된다.
    update: false,
    // 데이터가 선택되지 않도록 하고 싶다면 select를 사용하면 된다.
    // find 메서드를 호출할 때 데이터가 선택되지 않는다.
    select: false,
    // 데이터가 유니크해야 하는 경우 unique를 사용하면 된다.
    // 예를 들어 이메일 주소가 유니크해야 하는 경우 unique를 사용하면 된다.
    // 겹치지 않는 값을 사용하고 싶다면 unique를 사용하면 된다.
    unique: false,
  })
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
