/* http://localhost:8081/api/nhacungcap */

/* http://localhost:8080/api/xemdonhang */

function get_allService(callback) {
  var array = [];
  GET('http://localhost:8081/api/sanpham').then(res =>
    res.json().then(data => {

      var template = $('#service-table').html();
      var compiled = Handlebars.compile(template);

      var contextualHtml = compiled({ allservices: data });
      $('#allservices').html(contextualHtml);
      array = data;
      console.log(array);
      return callback(array);
    })
  );
}

function view_cartof_customer(id_cus,callback) {
  var array = [];
  GET('http://localhost:8080/api/xemgiohang/' + id_cus).then(res =>
    res.json().then(data => {

      var template = $('#service-table').html();
      var compiled = Handlebars.compile(template);

      var contextualHtml = compiled({ allservices: data });
      $('#allservices').html(contextualHtml);
      array = data;
      console.log(array);
      return callback(array);
    })
  );
}



function Register_account_Customer(name, username, pass, phone, email, address, area) {
  POST('http://localhost:8081/api/khachhang', {
    "Hoten": name,
    "Tendangnhap": username,
    "Matkhau": pass,
    "Sdt": phone,
    "Email": email,
    "Diachi": address,
    "Mavung": area
  }).then(res =>
    res.json().then(data => {
      if (data != "") {
        alert("Đăng ký tài khoản thành công");
        window.location = "http://localhost:8888/login";
        console.log(data.lenght);

      }
      else {
        alert("Đăng ký tài khoản thất bại");
      }
    })
  );
}

function Register_account_Shipper(name, username, pass, phone, email, address, somuitiem) {
  POST('http://localhost:8080/api/themshipper', {
    "hoten": name,
    "tendangnhap": username,
    "matkhau": pass,
    "sdt": phone,
    "email": email,
    "diachi": address,
    "soMuiTiem": somuitiem
  }).then(res =>
    res.json().then(data => {
      console.log(data);
      if (data != "") {
        alert("Đăng ký tài khoản thành công");
        window.location.assign("http://localhost:8888/login_shipper");
        console.log(data.lenght);

      }
      else {
        alert("Đăng ký tài khoản thất bại");
      }

    })
  );
}

function Register_account_supplier(name, username, pass, phone, email, address, somuitiem) {
  POST('http://localhost:8081/api/nhacungcap', {
    "hoten": name,
    "tendangnhap": username,
    "matkhau": pass,
    "sdt": phone,
    "email": email,
    "diachi": address,
    "soMuiTiem": somuitiem
  }).then(res =>
    res.json().then(data => {
      console.log(data);
      if (data != "") {
        alert("Đăng ký tài khoản thành công");
        window.location.assign("http://localhost:8888/login_ncc");
        console.log(data.lenght);

      }
      else {
        alert("Đăng ký tài khoản thất bại");
      }

    })
  );
}


function add_product_into_cart(masanpham, makhachhang, soluong) {
  POST('http://localhost:8080/api/themgiohang', {
    "maSP": masanpham,
    "maKH": makhachhang,
    "sl": soluong

  }).then(res =>
    res.json().then(data => {
      console.log(data);
    
    })
  );
}

function add_service(tensp, maloai, mancc, giatien, sl, min, link_image) {
  console.log(tensp);
  console.log(maloai);
  console.log(mancc);
  console.log(giatien);
  console.log(sl);
  console.log(min);
  console.log(link_image);
  maloai = parseInt(maloai);
  giatien = parseInt(giatien);
  sl = parseInt(sl);
  min = parseInt(min);

  POST('http://localhost:8081/api/sanpham', {
    "tenSP": tensp,
    "maLoai": maloai,
    "maNCC": mancc,
    "giaTien": giatien,
    "sl": sl,
    "min": min,
    "image": link_image
  }).then(res =>
    res.json().then(data => {
      console.log(data);
      if (data != "") {
        alert("Thêm sản phẩm thành công");
      }
      else {
        alert("Thêm sản phẩm thất bại");
      }

    })
  );
}

http://localhost:8081/api/sanpham

function delete_service_ofcart(idchitiet) {
  DELETE('http://localhost:8080/api/deletegiohang/' + idchitiet).then(res =>
    res.json().then(data => {
      console.log(data);
      if (data != "") {
        alert("Xoá sản phẩm thành công");
      }
      else {
        alert("Xóa thất bại");
      }
    })
  );
}






function getlistservice_byidcategory(id, callback) {
  var array = [];
  console.log(id);
  GET('http://localhost:8081/api/sanpham/filter/' + id).then(res =>
    res.json().then(data => {

      var template = $('#service-table').html();
      var compiled = Handlebars.compile(template);

      var contextualHtml = compiled({ allservices: data });
      $('#allservices').html(contextualHtml);
      array = data;
      console.log(array);
      return callback(array);
    })
  );
}

function Receive_order(mashp, madonhang) {
  /*  PUT('http://localhost:8080/api/tiepnhandonhang/', {
     "MaShipper_input": mashp,
     "MaDH_input": madonhang
   }).then(res => */
  PUT('http://localhost:8080/api/tiepnhandonhang?MaShipper_input=' + mashp + '&MaDH_input=' + madonhang).then(res =>
    res.json().then(data => {
      console.log(data);
      if (data != "") {
        alert("Nhận đơn thành công");
        console.log(data.lenght);

      }
      else {
        alert("Không thể nhận đơn hàng này");
      }


    })
  );
}










