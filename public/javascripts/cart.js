

/* window.populateSelect = function populateSelect() {
    get_allService()
}  */

/* const { response } = require("../../app"); */

function get_allbranch(callback) {
    var array = [];
    GET('https://backendsundara.herokuapp.com/branch/get-all').then(res =>
        res.json().then(data => {
            var template = $('#branch-table').html();
            var compiled = Handlebars.compile(template);
            var contextualHtml = compiled({ allservices: data.data });
            $('#allbranch').html(contextualHtml);
            array = data.data;
            return callback(array);
        })
    );
}

function get_id_emp() {
    get_allemployee((result) => {
        var birds = result;
        var ele = document.getElementById('allemp');
        for (var i = 0; i <= birds.length; i++) {
            // POPULATE SELECT ELEMENT WITH JSON.
            ele.innerHTML = ele.innerHTML +
                '<option value="' + birds[i]['id'] + '">' + birds[i]['name'] + '</option>';
        }
    });
}
function get_id_branch() {
    get_allbranch((result) => {
        var birds = result;
        var ele = document.getElementById('allbranch');
        for (var i = 0; i <= birds.length; i++) {
            // POPULATE SELECT ELEMENT WITH JSON.
            ele.innerHTML = ele.innerHTML +
                '<option value="' + birds[i]['id'] + '">' + birds[i]['name'] + '</option>';
        }
    });

}

function get_allemployee(callback) {
    var array = [];
    GET('https://backendsundara.herokuapp.com/employ/get-all').then(res =>
        res.json().then(data => {
            var template = $('#emp-table').html();
            var compiled = Handlebars.compile(template);
            var contextualHtml = compiled({ allservices: data.data });
            $('#allemp').html(contextualHtml);
            array = data.data;
            return callback(array);
        })
    );
}

function add_branch(name, phone, address) {
    POST('https://backendsundara.herokuapp.com/branch/add', {
        "name": name,
        "phone": phone,
        "address": address,
    }).then(res =>
        res.json().then(data => {
           console.log(data.code);
           if(data.code == 0){
               alert("thanh cong");
           }
        })
    );
}


function add_booking(date, time, id_branch, name_customer, phone_customer, email_customer, total_price, id_employ, services) {
    POST('https://backendsundara.herokuapp.com/booking/add', {
        "date": date,
        "time": time,
        "id_branch": id_branch,
        "name_customer": name_customer,
        "phone_customer": phone_customer,
        "email_customer": email_customer,
        "total_price": total_price,
        "id_employ": id_employ,
        "services": services
    }).then(res =>
        res.json().then(data => {
            console.log("cac");
            if (data.code == 0) {
                window.localStorage.clear(); //clear all localstorage
                window.location.assign(data.url);
                console.log("cac");
            }
            else {
                alert(data.message);
            }
        })
    );
}


function getServices1() {
    GET('https://backendsundara.herokuapp.com/service/get-all').then(res =>
        res.json().then(data => {
            var template = $('#service-table-template').html();
            var compiled = Handlebars.compile(template);
            /*            console.log(data.data[0]);
                       var view = compiled('data.data[0]');
                       console.log(view);
                       $('#services').html(view);
                       $('body').append(view); */

            /*  var contextualHtml = compiled({ services: data.data}) */
            var contextualHtml = compiled({ services: data.data });
            console.log(contextualHtml);
            $('#services').html(contextualHtml);
        })
    );
}



function get_allemployee(callback) {
    var array = [];
    GET('https://backendsundara.herokuapp.com/employ/get-all').then(res =>
        res.json().then(data => {
            var template = $('#emp-table').html();
            var compiled = Handlebars.compile(template);
            var contextualHtml = compiled({ allservices: data.data });
            $('#allbranch').html(contextualHtml);
            array = data.data;
            return callback(array);
        })
    );
}


function formatDate(dateString) {
    var allDate = dateString.split(' ');
    var thisDate = allDate[0].split('-');
    var newDate = [thisDate[2], thisDate[1], thisDate[0]].join("-");
    return newDate;
}


