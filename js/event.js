var month = ["Jan","Feb","March","April","May","June","July","Aug","Sep","Oct","Nov","December"];
// console.log(month);
var html=`<select class="custom-select mr-sm-2 ">`;        
for (let index = 0; index < month.length; index++) {
    // console.log(month[index]);
    html +=`<option value="${index}">${month[index]}</option>`;
}
html+="</select>";
$("#selectoption").append(html);