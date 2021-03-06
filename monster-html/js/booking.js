(function() {

    var index = 1;

    $('.btn-choose').on('click', choose);
    $('#bill-table').on('change keyup paste', '.bill-quantity', changeValue);

    function choose() {
        var self = this,
            bill = $('#bill-table'),
            data = getDataMenu($(self).parent().parent()),
            html = createRow(data);

        if (bill.find('.empty').length) {
            bill.empty();
        }

        bill.append(html);
    }

    function changeValue() {
        var self = this,
            row = $(self).parent().parent(),
            data = getDataBill(row);

        row.find('.bill-total').html(calculate(data.price, data.quantity));
    }

    function getDataMenu(row) {

        name = $(row.find('.col-name')).html(),
            price = $(row.find('.col-price')).html();

        var data = {

            name: name,
            price: price
        }

        return data;
    }

    function getDataBill(row) {
        var price = $(row.find('.bill-price')).html(),
            quantity = $(row.find('.bill-quantity')).val();

        var data = {
            price: price,
            quantity: quantity
        }

        return data;
    }

    function createRow(data) {
        var html = '<tr>';

        html += '<td>' + index++ + '</td>';

        html += '<td>' + data.name + '</td>';
        html += '<td class="bill-price">' + data.price + '</td>';
        html += '<td><input type="text" value="1" class="bill-quantity" /></td>';
        html += '<td class="bill-total">' + calculate(data.price, 1) + '</td>';
        html += '<td></td>';
        html += '<td></td>';
        html += '</tr>';

        return html;
    }

    function calculate(price, quantity) {
        return price * quantity;
    }

})();


function validate() {
    var vdateIn = document.getElementById("dateIn").value;
    var vdateOut = document.getElementById("dateOut").value;
    var vnum_booking = document.getElementById("num_booking").value;
    var vnum_adult = document.getElementById("num_adult").value;
    var vnum_child = document.getElementById("num_child").value;
    var vcmnd = document.getElementById("cmnd").value;
    var vname = document.getElementById("fullname").value;
    var vcmnd = document.getElementById("cmnd").value;

    var vphone = document.getElementById("phone").value;
    var vemail = document.getElementById("email").value;
    var vaddress = document.getElementById("address").value;

    if (vdateIn == "") {
        alert("Vui l??ng nh???p ng??y nh???n ph??ng!");
        return false;
    }

    if (vdateOut == "") {
        alert("Vui l??ng nh???p ng??y tr??? ph??ng!");
        return false;
    }

    if (vnum_booking == "") {
        alert("Vui l??ng nh???p s??? ph??ng m?? b???n ?????t!");
        return false;
    }

    if (vnum_adult == "") {
        alert("Vui l??ng nh???p s??? ng?????i l???n m?? b???n mu???n ?????t!");
        return false;
    }

    if (vnum_child == "") {
        alert("Vui l??ng nh???p s??? tr??? em m?? b???n mu???n ?????t!");
        return false;
    }

    if (vname == "") {
        alert("Vui l??ng nh???p l???i t??n!");
        return false;
    }

    if (vcmnd == "") {
        alert("Vui l??ng nh???p l???i CMND!");
        return false;
    }
    if (vphone == "") {
        alert("Vui l??ng nh???p l???i s??? ??i???n tho???i!");
        return false;
    }


    if (vaddress == "") {
        alert("Vui l??ng nh???p l???i ?????a ch??? !");
        return false;
    }

    var aCong = vemail.indexOf("@");
    var dauCham = vemail.lastIndexOf(".");
    if (vemail == "") {
        alert("Vui l??ng nh???p l???i email!");
        return false;

    } else if ((aCong < 1) || (dauCham < aCong + 2) || (dauCham + 2 > vemail.length)) {
        alert("Email b???n ??i???n kh??ng ch??nh x??c");
        return false;
    }

    alert("B???n ???? ?????t ph??ng th??nh c??ng ! C???m ??n b???n r???t nhi???u.")
    return true;
}


Email.send({
    SecureToken: "e76eeab8-5f0a-4ad1-b50e-73830e79abfa",
    To: 'info.wolfactive@gmail.com',
    From: "maianhtran891@gmail.com",
    Subject: "This is the subject",
    Body: "And this is the body"
}).then(
    message => alert(message)
);



// function parseDate(str) {
//     var mdy = str.split("-");
//     return new Date(mdy[1], mdy[0] - 1, mdy[2]);
// }

// function datediff(first, second) {
//     return Math.round((second - first) / (1000 * 60 * 60 * 24));
// }

// function onloadcheckout() {
//     var cart = JSON.parse(localStorage.getItem("cart")) || [];
//     var customer = JSON.parse(localStorage.getItem("customer")) || [];
//     var user = JSON.parse(localStorage.getItem("users")) || [];

//     for (i in user) {
//         if (user[i].id == customer[0].id) {
//             let html = `<div class="form-group">			
//     <span>T??n: ${customer[0].user}</span>			
//     </div>			
//     <div class="form-group">			
//     <span>S??T: ${user[i].phone}</span>			
//     </div>			
//     <div class="form-group">			
//     <span>Email: ${user[i].email}</span>			
//     </div>			
//     <div class="form-group">			
//     <span>?????a ch???: ${user[i].address}</span>			
//     </div>			
//     <table class="table table-bordered">			
//     <thead >			
//     <tr>			
//     <th scope="col">T??n ph??ng</th>			
//     <th scope="col">Ng??y ?????t</th>			
//     <th scope="col">Ng??y tr???</th>			
//     <th scope="col">Th??nh ti???n</th>			
//     </tr>			
//     </thead>			
//     <tbody id="table">			

//     </tbody>			
//     <tfoot>			
//     <tr id="total">			


//     </tr>			
//     </tfoot>			
//     </table>			

//     <div class="form-group">			
//     <button onclick="completed()" class="btn btn-primary py-3 px-5">Ho??n t???t</button>			
//     </div>`;
//             document.getElementById("checkoutcompleted").innerHTML = html;
//         }
//     }
//     var total = 0;
//     for (j in cart) {
//         var date = datediff(parseDate(cart[j].dateIn), parseDate(cart[j].dateOut));
//         total += parseFloat(date * cart[j].priceRoom);
//         let table = `			
//     <tr>			
//     <td>${cart[j].nameRoom}</td>			
//     <td>${cart[j].dateIn}</td>			
//     <td>${cart[j].dateOut}</td>			
//     <td>${cart[j].priceRoom} VN??</td>			
//     </tr>			
//     `;
//         document.getElementById("table").innerHTML += table;

//     }
//     var htmlTotal = `			

//     <td colspan="4" style="text-align: right">T???ng ti???n:  ${total} VN??</td>			
//     `;
//     document.getElementById("total").innerHTML = htmlTotal;
// }

// var OrderComplete;
// function completed() {
//     var order = JSON.parse(localStorage.getItem("OrderCompleted")) || [];
//     var cart = JSON.parse(localStorage.getItem("cart")) || [];
//     var customer = JSON.parse(localStorage.getItem("customer")) || [];
//     var user = JSON.parse(localStorage.getItem("users")) || [];
//     var total = 0;
//     var ressss = `			
//     <table class="table" name='tab'>			
//     <thead>			
//     <tr class="thead-dark">			
//     <th scope="col">T??n ph??ng</th>			
//     <th scope="col">Ng??y ?????t</th>			
//     <th scope="col">Ng??y tr???</th>			
//     <th scope="col">Gi?? ph??ng</th>			
//     </tr>			
//     </tr>			
//     </thead>			
//     <tbody id="tab">			
//     `;
//     for (h in cart) {
//         var date = datediff(parseDate(cart[h].dateIn), parseDate(cart[h].dateOut));
//         total += parseFloat(date * cart[h].priceRoom);
//         let ii = j;
//         ii++;
//         var row = "<tr class='table-success'>";
//         row += "<td>" + ii + "</td>";
//         row += "<td>" + cart[h].nameRoom + "</td>";
//         row += "<td>" + cart[h].dateIn + "</td>";
//         row += "<td>" + cart[h].dateOut + "</td>";
//         row += "<td>" + cart[h].priceRoom + " VN??" + "</td>";
//         row += "</tr>";
//         ressss += row;
//     }
//     ressss += '</tbody></table>';
//     var hmtl = '<div class="modal-content">' + ressss + '<div>'



//     for (i in user) {
//         if (user[i].id == customer[0].id) {
//             for (j = 0; j <= order.length; j++) {
//                 OrderComplete = {
//                     id: j,
//                     idCustomer: user[i].id,
//                     nameCustomer: user[i].username,
//                     name: user[i].name,
//                     sdt: user[i].phone,
//                     email: user[i].email,
//                     diachi: user[i].address,
//                     hotels: cart,
//                     total: total,
//                     messages: "??ang ch??? x??? l??",
//                     isActive: false,
//                 };
//                 var mail = {
//                     SecureToken: "74c01be1-b851-4b5f-9bcf-ab45e9b7f05d",
//                     Host: "smtp.gmail.com",
//                     Username: "kienquat2005@gmail.com",
//                     Password: "hghghg",
//                     To: user[i].email,
//                     From: "kienquat2005@gmail.com",
//                     Subject: "C???m ??n b???n ???? ?????t ph??ng c???a kh??ch s???n ch??ng t??i!",
//                     Body: hmtl
//                 }
//             }
//         }

//     }
//     order.push(OrderComplete);
//     localStorage.setItem("OrderCompleted", JSON.stringify(order));
//     Email.send(mail).then(
//         message => alert(message)
//     );
//     alert("?????t ph??ng th??nh c??ng! Ch??ng t??i s??? s???m li??n h??? v???i b???n, xin c???m ??n");
//     localStorage.removeItem("cart");
//     window.location.href = "index.html";
// }