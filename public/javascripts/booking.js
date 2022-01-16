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






function getServices() {
  var listdata;
  fetch('https://backendsundara.herokuapp.com/service/get-all', {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  }).then(res =>
    res.json().then(data => {
      document.getElementById("services").innerHTML = data.data;
      listdata = data.data;
      console.log(listdata);
      return listdata;
    })
  );
}

function get_allbooking(callback) {
  var array = [];
  GET('https://backendsundara.herokuapp.com/booking/get-all').then(res =>
    res.json().then(data => {
      var template = $('#booking-table').html();
      var compiled = Handlebars.compile(template);
      var contextualHtml = compiled({ allservices: data.data });
      $('#allbooking').html(contextualHtml);
      array = data.data;
      return callback(array);
    })
  );
}

function get_detailbooking(id_booking, callback) {
  GET('https://backendsundara.herokuapp.com/booking/get-detail?id_booking=' + id_booking).then(res =>
    res.json().then(data => {
      var template = $('#booking-table').html();
      var compiled = Handlebars.compile(template);
      var contextualHtml = compiled({ allservices: data });
      $('#allbooking').html(contextualHtml);
      return callback(data);
    })
  );
}

function get_bookingbyphone(phone, callback) {
  var array = [];
  GET('https://backendsundara.herokuapp.com/booking/get-by-phone?phone=' + phone).then(res =>
    res.json().then(data => {
      var template = $('#booking-table').html();
      var compiled = Handlebars.compile(template);
      var contextualHtml = compiled({ allservices: data.data });
      $('#allbooking').html(contextualHtml);
      array = data.data;
      return callback(array);
    })
  );
}





