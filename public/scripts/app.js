$(() => {
  console.log("Ajax String");
  $.ajax({
    type: "GET",
    url: "/api/users"
  }).done((users) => {
    console.log(users);
    for(user of users.users) {
      $("<div>").text(user.name).appendTo($("body"));
    }
  });;
});
