

function getService_byid(id,callback) {
  var array = [];
  GET('http://localhost:8081/api/sanpham/' + id).then(res =>
    res.json().then(data => {
      var template = $('#service-table').html();
      var compiled = Handlebars.compile(template);

      var contextualHtml = compiled({ allservices: data});
      $('#allservices').html(contextualHtml);
      array = data;
      console.log(array);
      return callback(array);
    })
  );
}

function getServices_byname(name,callback) {
  var array = [];
  GET('http://localhost:8081/api/sanpham/timkiem?tensp=' + name).then(res =>
    res.json().then(data => {
      var template = $('#service-table').html();
      var compiled = Handlebars.compile(template);

      var contextualHtml = compiled({ allservices: data});
      $('#allservices').html(contextualHtml);
      array = data;
      console.log(array);
      return callback(array);
    })
  );
}



function dangnhap_khachhang(username, password) {
  var array = [];

  GET('http://localhost:8080/api/dangnhap_khachhang/'+username+'/'+password+'').then(res =>
    res.json().then(data => {
      if (data.length > 0) {
        localStorage.setItem("senddata_login", JSON.stringify(data));
        window.location.assign("http://localhost:8888/service");
      }
      else{
        alert("Tài khoản hoặc mật khẩu không đúng, Vui lòng nhập lại");
      }

    })
  );
}

function dangnhap_shipper(username, password) {
  var array = [];

  GET('http://localhost:8080/api/dangnhap_shipper/'+username+'/'+password+'').then(res =>
    res.json().then(data => {
      if (data.length > 0) {
        localStorage.setItem("senddata_login", JSON.stringify(data));
        window.location.assign("http://localhost:8888/nc_service");
      }
      else{
        alert("Tài khoản hoặc mật khẩu không đúng, Vui lòng nhập lại");
      }

    })
  );
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

function get_noorders(callback) {
  var array = [];
  GET('http://localhost:8080/api/xemdonhang1/0').then(res =>
    res.json().then(data => {
      var template = $('#service-table').html();
      var compiled = Handlebars.compile(template);

      var contextualHtml = compiled({ allservices: data});
      $('#allservices').html(contextualHtml);
      array = data;
      console.log(array);
      return callback(array);
    })
  );
}






function Add_employee(name, email, phone, primary_salary, salary_per_service) {
  POST('https://backendsundara.herokuapp.com/employ/add', {
    "name": name,
    "email": email,
    "phone": phone,
    "primary_salary": primary_salary,
    "salary_service": salary_per_service
  }).then(res =>
    res.json().then(data => {
      if (data.code == 0) {
        alert("Successfully Add");
      }
      else {
        alert("Failed Add");
      }
    })
  );
}


function Delete_service(id) {
  DELETE('https://backendsundara.herokuapp.com/service/remove/' + id, {

  }).then(res =>
    res.json().then(data => {
      if (data.code == 0) {
        alert("Successfully Deleted");
      }
      else {
        alert("Failed Deleted");
      }
    })
  );
}


function Delete_branch(id) {
  DELETE('https://backendsundara.herokuapp.com/branch/remove/' + id, {

  }).then(res =>
    res.json().then(data => {
      if (data.code == 0) {
        alert("Successfully Deleted");
      }
      else {
        alert("Failed Deleted");
      }
    })
  );
}

function Delete_customer(id) {
  DELETE('https://backendsundara.herokuapp.com/customer/remove/:id', {
    "id": id
  }).then(res =>
    res.json().then(data => {
      if (data.code == 0) {
        alert("Successfully Deleted");
      }
      else {
        alert("Failed Deleted");
      }
    })
  );
}

function Delete_emp(id) {
  DELETE('' + id, {

  }).then(res =>
    res.json().then(data => {
      if (data.code == 0) {
        alert("Successfully Deleted");
      }
      else {
        alert("Failed Deleted");
      }
    })
  );
}

function Delete_booking(id) {
  PUT("http://backendsundara.herokuapp.com/booking/cancel", {
    "id_booking": id
  }).then(res =>
    res.json().then(data => {
      if (data.code == 0) {
        alert("Successfully Deleted");
      }
      else {
        alert("Failed Deleted");
      }
    })
  );
}

function Update_status_booking(id) {
  PUT("https://backendsundara.herokuapp.com/booking/change-status", {
    "id_booking": id
  }).then(res =>
    res.json().then(data => {
      if (data.code == 0) {
        alert("Successfully Update");
      }
      else {
        alert("Failed Update");
      }
    })
  );
}



