document.addEventListener ("DOMContentLoaded", function (event) {
	document.querySelector("select")
		.addEventListener("change", function (event) {
			var selectedPerson = document.querySelector("select").value;

			$ajaxUtils.sendGetRequest("data/list.json", function (res) {
				var firstName = res[selectedPerson].firstName;
				var lastName = res[selectedPerson].lastName;
				var address = res[selectedPerson].address;
				var content = "<address><strong>" + firstName + " ";
				    content += "<span class=text-uppercase>" + lastName + "</span></strong><br>"
				    content += address + "</address>"

				document.querySelector("#content")
					.innerHTML = content 
			});
			
	});

});


	