let month = ["Jan","Feb","March","April","May","June","July","Aug","Sep","Oct","Nov","December",];
let htmlc = `<select class="custom-select mr-sm-2 " id="type">`;
htmlc += `<option>Select</option>`;
for (let index = 0; index < month.length; index++) {
  htmlc += `<option value="${index}">${month[index]}</option>`;
}

htmlc += "</select>";
$("#selectoption").append(htmlc);

let data = [
  {
    monthId: "0",
    Data: [
      {
        event: "1",
        details: {
          eventName: "Events Name1",
          eventDate: "date-12/03/2021",
          eventDesc: "Find all the Open Source Events happening around the globe month-wise and never miss any opportunity to learn and grow from the experts 😉",
          eventurl: "#",
          eventImg: "../images/t1.jpg",
        },
      },
      {
        event: "2",
        details: {
          eventName: "Events Name2",
          eventDate: "date-12/03/2021",
          eventDesc: "Find all the Open Source Events happening around the globe month-wise and never miss any opportunity to learn and grow from the experts 😉",
          eventurl: "#",
          eventImg: "../images/t1.jpg",
        },
      },
    ],
  },
  {
    monthId: "1",
    Data: [
      {
        event: "1",
        details: {
          eventName: "Events Name",
          eventDate: "",
          eventDesc: "",
          eventurl: "",
          eventImg: "",
        },
      },
    ],
  },
];

let valu;
$(function () {
    $("#type").change(function () {
      valu=$(this).val();
      // console.log(valu);
      let index = valu;
      $("#rowdy").empty();
      $("#error").empty();
      if(valu < data.length && data[index].Data.length > 0){
        for (let i = 0; i < data[index].Data.length; i++) {
            try {
                // console.log(data);
                var html = '<div class="row">';
                for (i = 0; i < data[index].Data.length; i++) {
                    
                  if (i % 3 == 0 && i != 0) {
                    html += "</div>";
                    html += '<div class="row">';
                  }
              
                  html += `<div class="col-lg-9 col-12 m-auto">
                    
                            <div class="over-item txt-right unique-style3">
                                  <div class="row">
                                      <div class="col-md-8 col-12">
                                      <div class="break"></div>
                                      <h3 class="text-left" >${data[index].Data[i].details.eventName}</h3>
                                      <h6 class="text-left text-light" >${data[index].Data[i].details.eventDate}</h6></br>
                                      <p class="text-left">${data[index].Data[i].details.eventDesc}</p>
                                      <div class="over-btn text-left">
                                          <a href="${data[index].Data[i].details.eventurl}">Read More</a>
                                      </div>
                                      </div>
                                      <div class="col-md-4 col-12">
                                      <img src="${data[index].Data[i].details.eventImg}" height="200px" alt="" srcset=""></div>
                                  </div>
                                
                                
                            </div></div>`;
                }
              
                $("#rowdy").append(html);
              } catch (error) {
                console.log(error);
              }
            }
      }else{
            var htmlz=`<div class= "container">` ;
            htmlz += `<p class="text-light">No data found please select another month</p>`;
            htmlz +=`</div>`;
            $("#error").append(htmlz);
        }
    //   for (let index = 0; index < data.length; index++) {
    //     console.log("monthid" +data[index].monthId);
    //     console.log("index"+index);
    //     if(data[index].monthId==valu){
    //         console.log("true");
    //         console.log(data[0].Data.length);
    //        for (let i = 0; i < data[index].Data.length; i++) {
    //         try {
    //             // console.log(data);
    //             var html = '<div class="row">';
    //             for (i = 0; i < data[index].Data.length; i++) {
                    
    //               if (i % 3 == 0 && i != 0) {
    //                 html += "</div>";
    //                 html += '<div class="row">';
    //               }
              
    //               html += `<div class="col-lg-9 col-12 m-auto">
                    
    //                         <div class="over-item txt-right unique-style3">
    //                               <div class="row">
    //                                   <div class="col-md-8 col-12">
    //                                   <div class="break"></div>
    //                                   <h3 class="text-left" >${data[index].Data[i].details.eventName}</h3>
    //                                   <h6 class="text-left text-light" >${data[index].Data[i].details.eventDate}</h6></br>
    //                                   <p class="text-left">${data[index].Data[i].details.eventDesc}</p>
    //                                   <div class="over-btn text-left">
    //                                       <a href="${data[index].Data[i].details.eventurl}">Read More</a>
    //                                   </div>
    //                                   </div>
    //                                   <div class="col-md-4 col-12">
    //                                   <img src="${data[index].Data[i].details.eventImg}" height="200px" alt="" srcset=""></div>
    //                               </div>
                                
                                
    //                         </div></div>`;
    //             }
              
    //             $("#rowdy").append(html);
    //           } catch (error) {
    //             console.log(error);
    //           }
    //         }
            
              
    //     }else{
    //       console.log("index"+index);
    //       console.log("month"+data[index].monthId);
    //         var htmlz=`<div class= "container">` ;
    //         htmlz += `<p class="text-light">No data found please select another month</p>`;
    //         htmlz +=`</div>`;
    //         $("#error").append(htmlz);
    //     }
    // }
    });
    
});


