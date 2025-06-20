import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migration1747467774323 implements MigrationInterface {
  name = 'Migration1747467774323';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "students" ("id" character varying NOT NULL, "name" character varying NOT NULL, "birth_date" TIMESTAMP NOT NULL, "university" character varying NOT NULL, CONSTRAINT "PK_60f16c54676f44bc73073037eee" PRIMARY KEY ("id"))`,
    );

    await queryRunner.query(
      `INSERT INTO students (id, name, birth_date, university) VALUES
('S001', 'Nguyễn Đăng Quân', '2004-05-11', 'Đại học Công nghệ (UET)'),
('S002', 'Trịnh Vinh Tuấn Đạt', '2003-10-05', 'Học viện Công nghệ Bưu chính Viễn thông - Cơ sở phía Bắc'),
('S003', 'Ngô Xuân Hòa', '2004-07-27', 'Học viện Công nghệ Bưu chính Viễn thông - Cơ sở phía Bắc'),
('S004', 'Bùi Đức Hùng', '2004-07-31', 'Đại học Bách Khoa Hà Nội (HUST)'),
('S005', 'Nguyễn Tuấn Anh', '2003-01-25', 'Đại học Bách Khoa Hà Nội (HUST)'),
('S006', 'Lương Nhật Hào', '2003-07-09', 'Đại học Công nghệ (UET)'),
('S007', 'Nguyễn Đức Anh', '2003-01-23', 'Học viện Công nghệ Bưu chính Viễn thông - Cơ sở phía Bắc'),
('S008', 'Đinh Trường Lãm', '2001-02-23', 'Đại học tổng hợp ITMO'),
('S009', 'Nguyễn Đăng Bảo Lâm', '2004-08-17', 'Đại học Bách Khoa Hà Nội (HUST)'),
('S010', 'Phạm Ngọc Hải Dương', '2005-03-20', 'Đại học Công nghệ (UET)'),
('S011', 'Nguyễn Minh Quân', '2004-01-05', 'Đại học Bách Khoa Hà Nội (HUST)'),
('S012', 'Nguyễn Sỹ Tân', '2004-07-07', 'Đại học Công nghệ (UET)'),
('S013', 'Mai Xuân Duy Quang', '2003-07-04', 'Đại học Bách Khoa Hà Nội (HUST)'),
('S014', 'Lê Tấn Phát', '2004-12-15', 'ĐH Mở Tp.HCM'),
('S015', 'Nguyễn Quang Ninh', '2004-04-24', 'Đại học Công nghệ (UET)'),
('S016', 'Nguyễn Trung Vương', '2003-10-03', 'Đại học Bách Khoa - ĐHQG TPHCM (HCMUT)'),
('S017', 'Nguyễn Phước Ngưỡng Long', '2005-10-18', 'Đại học Công nghệ (UET)'),
('S018', 'Nguyễn Văn Dương', '2003-10-30', 'Đại học Công nghệ (UET)'),
('S019', 'Lê Minh Hoàng', '2004-05-17', 'Đại học Khoa học tự nhiên - ĐHQG TPHCM (HCMUS)'),
('S020', 'Nguyễn Đức Thịnh', '2001-09-10', 'Đại học Thủy Lợi'),
('S021', 'Hoàng Minh Thắng', '1999-06-09', 'Đại học tổng hợp ITMO'),
('S022', 'Vũ Đình Ngọc Bảo', '2005-01-29', 'Đại học Khoa học tự nhiên - ĐHQG TPHCM (HCMUS)'),
('S023', 'Nguyễn Hồng Lĩnh', '2003-12-08', 'Đại học Công nghệ (UET)') ON CONFLICT (id) DO NOTHING;`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "students"`);
  }
}
