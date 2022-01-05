function GET(address) {
    return fetch(address, {
        mode: 'cors',
        method: 'GET',
        headers: {
            /* 'Access-Control-Allow-Origin' : '*', */
            Accept: 'application/json',
        },     
        
    });
}

function POST(address, body) {
    return fetch(address, {
        mode: 'cors',
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }, body: JSON.stringify(body),
    });
}


function DELETE(address, body) {
    return fetch(address, {
        mode: 'cors',
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }, body: JSON.stringify(body),
    });
}

function PUT(address, body) {
    return fetch(address, {
        mode: 'cors',
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }, body: JSON.stringify(body),
    });
}


/* function Getdata(template_id, output_id, data) {
    
} */

/* function loaddata(templateid, outputid, data) {
    GET('http://localhost:3000/product/get-all').then(res =>
      res.text().then(data => {

        document.getElementById("service").innerHTML = data;
      })

    );
} */