

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
            if (data.code == 0) {
                alert("thanh cong");
            }
        })
    );
}


function add_booking(magh, phiship) {
    console.log(magh);
    console.log(phiship);
    POST('http://localhost:8080/api/themdonhang', {
        "maGH": magh,
        "phiShip": phiship
    }).then(res =>
        res.json().then(data => {
            console.log(data.code);
            if (data != "") {
                alert("Đặt hàng thành công");
            }
            else {
                alert("Đặt hàng thất bại");
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


