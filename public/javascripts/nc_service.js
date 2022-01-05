function getServices() {
  GET('https://backendsundara.herokuapp.com/service/get-all').then(res =>
    res.json().then(data => {
      var template = $('#service-table-template').html();
      var compiled = Handlebars.compile(template);
      var contextualHtml = compiled({ services: data.data });
      console.log(contextualHtml);
      $('#services').html(contextualHtml);
    })
  );
}


function getServices_byname(name, callback) {
  var array = [];
  console.log(name);
  GET('https://backendsundara.herokuapp.com/service/search?name=' + name).then(res =>
    res.json().then(data => {
      var template = $('#service-table1').html();
      var compiled = Handlebars.compile(template);
      var contextualHtml = compiled({ allservices1: data.data });
      $('#allservices1').html(contextualHtml);
      array = data.data;
      return callback(array);
    })
  );
}

function getemp_byname(name, callback) {
  var array = [];
  console.log(name);
  GET('https://backendsundara.herokuapp.com/employ/search?name=' + name).then(res =>
    res.json().then(data => {
      var template = $('#emp-table1').html();
      var compiled = Handlebars.compile(template);
      var contextualHtml = compiled({ allemp1: data.data });
      $('#allemp1').html(contextualHtml);
      array = data.data;
      return callback(array);
    })
  );
}

function getproduct_byname(name, callback) {
  var array = [];
  console.log(name);
  GET('https://backendsundara.herokuapp.com/product/search?name=' + name).then(res =>
    res.json().then(data => {
      var template = $('#product-table1').html();
      var compiled = Handlebars.compile(template);
      var contextualHtml = compiled({ allproduct1: data.data });
      $('#allproduct1').html(contextualHtml);
      array = data.data;
      return callback(array);
    })
  );
}

function getbranch_byname(name, callback) {
  var array = [];
  console.log(name);
  GET('https://backendsundara.herokuapp.com/branch/search?name=' + name).then(res =>
    res.json().then(data => {
      var template = $('#branch-table1').html();
      var compiled = Handlebars.compile(template);
      var contextualHtml = compiled({ allbranch1: data.data });
      $('#allbranch1').html(contextualHtml);
      array = data.data;
      return callback(array);
    })
  );
}

function get_allcategory(callback) {
  var array = [];
  GET('https://backendsundara.herokuapp.com/category/get-all').then(res =>
    res.json().then(data => {
      var template = $('#service-table2').html();
      var compiled = Handlebars.compile(template);
      var contextualHtml = compiled({ allservices1: data.data });
      $('#allservices1').html(contextualHtml);
      array = data.data;
      return callback(array);
    })
  );
}



function Login(username, password) {
  var array = [];
  POST('https://backendsundara.herokuapp.com/admin/login', {
    "username": username,
    "password": password
  }).then(res =>
    res.json().then(data => {
      console.log(data);
      if (data.code == 0) {
        window.location.assign("https://sundara.herokuapp.com/nc_service");
        console.log("cac");
      }
      else {
        alert(data.message);
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

function get_allcustomer(callback) {
  var array = [];
  GET('https://backendsundara.herokuapp.com/customer/get-all').then(res =>
    res.json().then(data => {
      var template = $('#customer-table').html();
      var compiled = Handlebars.compile(template);
      var contextualHtml = compiled({ allservices: data.data });
      $('#listproduct').html(contextualHtml);
      array = data.data;
      return callback(array);
    })
  );
}



function Add_service(name, price, time_treatment, description, products) {
  POST('https://backendsundara.herokuapp.com/service/add', {
    "name": name,
    "price": price,
    "time_treatment": time_treatment,
    "description": description,
    "products": products
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

function Add_branch(name, phone, address) {
  POST('https://backendsundara.herokuapp.com/branch/add', {
    "name": name,
    "phone": phone,
    "address": address
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

function Add_product(name, branch, category, quantity_remain) {
  POST('https://backendsundara.herokuapp.com/product/add', {
    "name": name,
    "brand": branch,
    "category": category,
    "quantity_remain": quantity_remain
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



