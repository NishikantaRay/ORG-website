var month = ["Jan","Feb","March","April","May","June","July","Aug","Sep","Oct","Nov","December"];
// console.log(month);
var htmlc=`<select class="custom-select mr-sm-2 ">`;        
for (let index = 0; index < month.length; index++) {
    // console.log(month[index]);
    htmlc +=`<option value="${index}">${month[index]}</option>`;
}
htmlc+="</select>";
$("#selectoption").append(htmlc);
let data=[{},{}];
try {
    // console.log(data);
    var html = '<div class="row">';
    for (i = 0; i < data.length; i++) {
      if (i % 3 == 0 && i != 0) {
        html += "</div>";
        html += '<div class="row">';
      }
     
      html += `<div class="col-lg-9 col-sm-12 m-auto">
      
              <div class="over-item txt-right unique-style3">
                    <div class="row">
                        <div class="col-md-8 col-12">
                        <div class="break"></div>
                        <h3 class="text-left" >Events Name</h3>
                        <p class="text-left">Find all the Open Source Events happening around the globe month-wise and never miss
                            any opportunity to learn and grow from the experts 😉</p>
                        <div class="over-btn text-left">
                            <a href="#">Read More</a>
                        </div>
                        </div>
                        <div class="col-md-4 col-12">
                        <img src="../images/t1.jpg" height="200px" alt="" srcset=""></div>
                    </div>
                  
                  
              </div></div>`;
    }

    $("#rowdy").append(html);
  } catch (error) {
    console.log(error);
  }


getData();