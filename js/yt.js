const getData = async () => {
  const data = [
    {
      id: "msyGybzCKRs",
      title: "Contribute!",
      subtitle: "How you can help us?",
      list: "If are a Project Admin submit your project and help everyone to start their Open Source contrbutions on your project.",
      list2: "If you know any events or programs that are not listed already.",
      button: "Contribute",
      buttonurl: "http://",
    },
    {
      id: "uj4fy4kpaOA",
      title: "Contribute!",
      subtitle: "How you can help us?",
      list: "If are a Project Admin submit your project and help everyone to start their Open Source contrbutions on your project.",
      list2: "If you know any events or programs that are not listed already.",
      button: "Contribute",
      buttonurl: "http://",
    },
    {
      id: "apGV9Kg7ics",
      title: "Contribute!",
      subtitle: "How you can help us?",
      list: "If are a Project Admin submit your project and help everyone to start their Open Source contrbutions on your project.",
      list2: "If you know any events or programs that are not listed already.",
      button: "Contribute",
      buttonurl: "http://",
    },
    {
      id: "msyGybzCKRs",
      title: "Contribute!",
      subtitle: "How you can help us?",
      list: "If are a Project Admin submit your project and help everyone to start their Open Source contrbutions on your project.",
      list2: "If you know any events or programs that are not listed already.",
      button: "Contribute",
      buttonurl: "http://",
    },
    {
      id: "uj4fy4kpaOA",
      title: "Contribute!",
      subtitle: "How you can help us?",
      list: "If are a Project Admin submit your project and help everyone to start their Open Source contrbutions on your project.",
      list2: "If you know any events or programs that are not listed already.",
      button: "Contribute",
      buttonurl: "http://",
    },
    {
      id: "apGV9Kg7ics",
      title: "Contribute!",
      subtitle: "How you can help us?",
      list: "If are a Project Admin submit your project and help everyone to start their Open Source contrbutions on your project.",
      list2: "If you know any events or programs that are not listed already.",
      button: "Contribute",
      buttonurl: "http://",
    },
  ];
  try {
    console.log(data);
    var html = '<div class="row">';
    for (i = 0; i < data.length; i++) {
      if (i % 3 == 0 && i != 0) {
        html += "</div>";
        html += '<div class="row">';
      }
      html += `<div class="col-md-4 col-12">`;
      html += `<div class=" card  mt-5 card_red text-center">
            <iframe  height="215" src="https://www.youtube.com/embed/${data[i].id}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> 
                         </div>   `;
      html += `<div class="about-txt">
      <span class="separet-span">${data[i].title}</span>
      <h3>${data[i].subtitle}</h3>
      <div class="list">
          <ul class="ul-about">
              <li>${data[i].list}</li>
              <li>${data[i].list2}</li>
          </ul>
          <a href="${data[i].buttonurl}">${data[i].button}</a>
      </div>
        </div></div>`;
    }

    $("#rowdy").append(html);
  } catch (error) {
    console.log(error);
  }
};

getData();
