function newItem(){
    let li = $('<li></li>');
  let inputValue = $('#input').val();
  li.append(inputValue);

  if (inputValue === ""){
    alert("you must write something")
  } else {
    $('#list').append(li);
  }

    li.on("dblclick", function crossOut() {
    li.toggleClass("strike");
});

let crossOutButton = $('<crossOutButton></crossOutButton>');
  crossOutButton.append(document.createTextNode('X'));
  li.append(crossOutButton);
  crossOutButton.on("click", deleteListItem);
   function deleteListItem(){
 		li.addClass("delete")
	}
    $('#list').sortable();

  }

  



  