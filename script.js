$(document).ready(function () {

    let persons = [];
  
    $("#saveBtn").click(function () {
  
      let person = {
        fname: $("#fname").val().trim(),
        mname: $("#mname").val().trim(),
        lname: $("#lname").val().trim(),
        age: $("#age").val().trim(),
        email: $("#email").val().trim()
      };
  
      if (!person.fname || !person.lname || !person.age || !person.email) {
        Swal.fire("Error", "Please fill required fields!", "error");
        return;
      }
  
      persons.push(person);
      displayPersons();
  
      Swal.fire("Saved!", "Person added successfully.", "success");
  
      $("input").val("");
    });
  
    function displayPersons() {
      $("#tableBody").html("");
  
      for (let i = 0; i < persons.length; i++) {
        $("#tableBody").append(`
          <tr>
            <td>${persons[i].fname}</td>
            <td>${persons[i].mname}</td>
            <td>${persons[i].lname}</td>
            <td>${persons[i].age}</td>
            <td>${persons[i].email}</td>
          </tr>
        `);
      }
    }
  
  })