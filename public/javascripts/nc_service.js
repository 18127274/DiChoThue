

function getService_byid(id, callback) {
  var array = [];
  GET('http://localhost:8081/api/sanpham/' + id).then(res =>
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






function getServices_byname(name, callback) {
  var array = [];
  GET('http://localhost:8081/api/sanpham/timkiem?tensp=' + name).then(res =>
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



function dangnhap_khachhang(username, password) {
  var array = [];

  GET('http://localhost:8080/api/dangnhap_khachhang/' + username + '/' + password + '').then(res =>
    res.json().then(data => {
      if (data != "") {
        localStorage.setItem("senddata_login", JSON.stringify(data));
        window.location.assign("http://localhost:8888/service");
      }
      else {
        alert("Tài khoản hoặc mật khẩu không đúng, Vui lòng nhập lại");
      }

    })
  );
}

function dangnhap_shipper(username, password) {
  var array = [];

  GET('http://localhost:8080/api/dangnhap_shipper/' + username + '/' + password + '').then(res =>
    res.json().then(data => {
      if (data != "") {
        console.log(data);
        localStorage.setItem("senddata_login_shipper", JSON.stringify(data));
        window.location.assign("http://localhost:8888/orders");
      }
      else {
        alert("Tài khoản hoặc mật khẩu không đúng, Vui lòng nhập lại");
      }

    })
  );
}

function dangnhap_ncc(username, password) {

  if (username = "sp3" && password == "123") {
    window.location.assign("http://localhost:8888/supplier");
  }
  else {
    alert("Tài khoản hoặc mật khẩu không đúng, Vui lòng nhập lại");
  }

}




function get_Products(callback) {
  var array = [];
  GET('http://localhost:8081/api/nhacungcap').then(res =>
    res.json().then(data => {
      var template = $('#product-table').html();
      var compiled = Handlebars.compile(template);
      var contextualHtml = compiled({ allservices: data.data });
      $('#listproduct').html(contextualHtml);
      array = data.data;
      console.log(data.data);
      console.log(data);
      return callback(array);
    })
  );
}

function get_orderofcustomer(id_kh, callback) {
  var array = [];
  GET('http://localhost:8080/api/donmua/' + id_kh).then(res =>
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




function get_noorders(callback) {
  var array = [];
  GET('http://localhost:8080/api/donchuanhan').then(res =>
    res.json().then(data => {
      var template = $('#service-table3').html();
      var compiled = Handlebars.compile(template);

      var contextualHtml = compiled({ allservices: data });
      $('#allservices').html(contextualHtml);
      array = data;
      console.log(array);
      return callback(array);
    })
  );
}

function get_orders_ofshipper(id_shp, callback) {
  var array = [];
  GET('http://localhost:8080/api/dondanhan/' + id_shp).then(res =>
    res.json().then(data => {
      var template = $('#service-table3').html();
      var compiled = Handlebars.compile(template);

      var contextualHtml = compiled({ allservices: data });
      $('#allservices').html(contextualHtml);
      array = data;

      return callback(array);
    })
  );
}

function get_orders_ofshipper_hasstatus_dalayhang(id_shp, callback) {
  var array = [];
  console.log(id_shp);
  GET('http://localhost:8080/api/dondalay/' + id_shp).then(res =>
    res.json().then(data => {
      var template = $('#service-table3').html();
      var compiled = Handlebars.compile(template);

      var contextualHtml = compiled({ allservices: data });
      $('#allservices').html(contextualHtml);
      array = data;
      console.log(array);
      return callback(array);
    })
  );
}

function get_orders_ofshipper_hasstatus_danggiao(id_shp, callback) {
  var array = [];
  GET('http://localhost:8080/api/dondanggiao/' + id_shp).then(res =>
    res.json().then(data => {
      var template = $('#service-table3').html();
      var compiled = Handlebars.compile(template);

      var contextualHtml = compiled({ allservices: data });
      $('#allservices').html(contextualHtml);
      array = data;
      console.log(array);
      return callback(array);
    })
  );
}

function get_orders_ofshipper_hasstatus_dagiao(id_shp, callback) {
  var array = [];
  GET('http://localhost:8080/api/dondagiao/' + id_shp).then(res =>
    res.json().then(data => {
      var template = $('#service-table3').html();
      var compiled = Handlebars.compile(template);

      var contextualHtml = compiled({ allservices: data });
      $('#allservices').html(contextualHtml);
      array = data;
      console.log(array);
      return callback(array);
    })
  );
}

function get_orders_ofshipper_bystatus(status) {

  var id_shp1 = localStorage.getItem("senddata_login_shipper");
  id_shp1 = JSON.parse(id_shp1);

  console.log(id_shp1);

  if (status == "Đã tiếp nhận") {
    console.log("da tiep nhan ne");
    get_orders_ofshipper(id_shp1[0].id, (result) => {

      var birds = result;

      var html1 = "<input type=\"button\" value=\"Update\" onclick=\"Update_status(this)\">";
      document.getElementById("data_table_service").innerHTML = "";
      var ele = document.getElementById('data_table_service');

      for (var i = 0; i < birds.length; i++) {
        // POPULATE SELECT ELEMENT WITH JSON.
        ele.innerHTML = ele.innerHTML + "<tr>" +
          "<td hidden>" + birds[i].id + "</td>" +
          "<td>" + birds[i].phiShip + "</td>" +
          "<td>" + birds[i].tongTien + "</td>" +
          "<td>" + birds[i].tinhTrangDonHang + "</td>" +
          "<td>" + birds[i].tinhTrangThanhToan + "</td>" +
          "<td>" + birds[i].ngayLapDon + "</td>" +
          "<td>" + html1 + "</td>" +

          "</tr>";
      }
      document.getElementById("data_table_service").innerHTML = ele.innerHTML;
    });
  }
  else if (status == "Đã lấy hàng") {

    get_orders_ofshipper_hasstatus_dalayhang(id_shp1[0].id, (result) => {
      var birds = result;

      var html1 = "<input type=\"button\" value=\"Update\" onclick=\"Update_status(this)\">";
      var ele = document.getElementById('data_table_service');
      for (var i = 0; i < birds.length; i++) {
        // POPULATE SELECT ELEMENT WITH JSON.
        ele.innerHTML = ele.innerHTML + "<tr>" +
          "<td hidden>" + birds[i].id + "</td>" +
          "<td>" + birds[i].phiShip + "</td>" +
          "<td>" + birds[i].tongTien + "</td>" +
          "<td>" + birds[i].tinhTrangDonHang + "</td>" +
          "<td>" + birds[i].tinhTrangThanhToan + "</td>" +
          "<td>" + birds[i].ngayLapDon + "</td>" +
          "<td>" + html1 + "</td>" +

          "</tr>";
      }
      document.getElementById("data_table_service").innerHTML = ele.innerHTML;
    });
  }
  else if (status == "Đang giao") {

    get_orders_ofshipper_hasstatus_danggiao(id_shp1[0].id, (result) => {
      var birds = result;

      var html1 = "<input type=\"button\" value=\"Update\" onclick=\"Update_status(this)\">";

      var ele = document.getElementById('data_table_service');
      for (var i = 0; i < birds.length; i++) {
        // POPULATE SELECT ELEMENT WITH JSON.
        ele.innerHTML = ele.innerHTML + "<tr>" +
          "<td hidden>" + birds[i].id + "</td>" +
          "<td>" + birds[i].phiShip + "</td>" +
          "<td>" + birds[i].tongTien + "</td>" +
          "<td>" + birds[i].tinhTrangDonHang + "</td>" +
          "<td>" + birds[i].tinhTrangThanhToan + "</td>" +
          "<td>" + birds[i].ngayLapDon + "</td>" +
          "<td>" + html1 + "</td>" +

          "</tr>";
      }
      document.getElementById("data_table_service").innerHTML = ele.innerHTML;
    });
  }
  else if (status == "Đã giao") {

    get_orders_ofshipper_hasstatus_dagiao(id_shp1[0].id, (result) => {
      var birds = result;

      var html1 = "<input type=\"button\" value=\"Update\" onclick=\"Update_status(this)\">";
      var ele = document.getElementById('data_table_service');
      for (var i = 0; i < birds.length; i++) {
        // POPULATE SELECT ELEMENT WITH JSON.
        ele.innerHTML = ele.innerHTML + "<tr>" +
          "<td hidden>" + birds[i].id + "</td>" +
          "<td>" + birds[i].phiShip + "</td>" +
          "<td>" + birds[i].tongTien + "</td>" +
          "<td>" + birds[i].tinhTrangDonHang + "</td>" +
          "<td>" + birds[i].tinhTrangThanhToan + "</td>" +
          "<td>" + birds[i].ngayLapDon + "</td>" +
          "<td>" + html1 + "</td>" +

          "</tr>";
      }
      document.getElementById("data_table_service").innerHTML = ele.innerHTML;
    });
  }

}



/* function vieworderandstatus_byid(id, callback) {
  var array = [];
  GET('http://localhost:8080/api/xemdonhangtheomadon/' + id).then(res =>
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
} */


function update_status_order(orders, status) {
  PUT('http://localhost:8080/api/tinhtrangdonhang?MaDH_input=' + orders + '&TinhTrangDH_input=' + status).then(res =>
    res.json().then(data => {
      console.log(orders);
      console.log(status);
      if (data != "") {
        alert("Cập nhật thành công");
      }
      else {
        alert("Cập nhật thất bại");
      }
    })
  );
}

function update_status_payment(orders, status) {
  PUT('http://localhost:8080/api/tinhtrangthanhtoan?MaDH_input=' + orders + '&TinhTrangTT_input=' + status).then(res =>
    res.json().then(data => {
      console.log(orders);
      console.log(status);

    })
  );
}



function Delete_order(id) {
  DELETE('http://localhost:8080/api/xoadonhang/' + id, {

  }).then(res =>
    res.json().then(data => {
      if (data != "") {
        alert("Xóa thành công");
      }
      else {
        alert("Failed Deleted");
      }
    })
  );
}






