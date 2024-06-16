let NhanVien = function (
  tknv,
  name,
  email,
  password,
  datepicker,
  luongCB,
  chucVu,
  gioLam
) {
  this.tknv = tknv;
  this.name = name;
  this.email = email;
  this.password = password;
  this.datepicker = datepicker;
  this.luongCB = luongCB;
  this.chucVu = chucVu;
  this.gioLam = gioLam;

  // Tính tổng lương
  this.tongLuong = function () {
    let tongLuong = 0;
    if (this.chucVu == "Sếp") {
      tongLuong = this.luongCB * 3;
    } else if (this.chucVu == "Trưởng phòng") {
      tongLuong = this.luongCB * 2;
    } else if (this.chucVu == "Nhân viên") {
      tongLuong = this.luongCB * 1;
    }
    return tongLuong;
  };

  // Xếp loại nhân viên
  this.xepLoaiNhanVien = function () {
    if (this.gioLam * 1 >= 192) {
      return "Nhân viên xuất sắc";
    } else if (this.gioLam * 1 >= 176 && this.gioLam * 1 < 192) {
      return "Nhân viên giỏi";
    } else if (this.gioLam * 1 >= 160 && this.gioLam * 1 < 176) {
      return "Nhân viên khá";
    } else {
      return "Nhân viên trung bình";
    }
  };
};

let nv1 = new NhanVien(
  "001",
  "Nguyen Van A",
  "a@example.com",
  "password123",
  "2022-01-01",
  5000000,
  "Sếp",
  200
);

console.log("Tổng lương: " + nv1.tongLuong());
console.log("Xếp loại: " + nv1.xepLoaiNhanVien());
