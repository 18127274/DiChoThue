function get_allService(callback) {
  var array = [];
  GET('https://backendsundara.herokuapp.com/service/get-all').then(res =>
    res.json().then(data => {
      var template = $('#service-table').html();
      var compiled = Handlebars.compile(template);
/*            console.log(data.data[0]);
           var view = compiled('data.data[0]');
           console.log(view);
           $('#services').html(view);
           $('body').append(view); */

     /*  var contextualHtml = compiled({ services: data.data}) */
      var contextualHtml = compiled({ allservices: data.data});
      $('#allservices').html(contextualHtml);
      array = data.data;
 
      return callback(array);
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





  