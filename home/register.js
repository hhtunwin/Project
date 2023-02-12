function reg() {
	var clk = window.confirm("Do you want this laptop?")
		if (clk) {
			var model = window.prompt("Enter laptop model.")
			var reg = "Model : "+model+"\n"
			var name = window.prompt("Enter your name.")
			reg += "Name : "+name+"\n"
			var ph = window.prompt("Enter your phone number.")
			reg += "Phone : "+ph+"\n"
			var add = window.prompt("Enter your address.")
			reg += "Address :"+add+"\n"
			var s = ""
			if(model!=null && name!=null && ph!=null && add!=null && model!=s && name!=s && ph!=s && add!=s){
				alert("Registration successful\n\n"+reg)
				alert("Thank you very much for your support\n\nIf you want to cancel your registration,\nPlease contact us.\n\nPhone : 09953440551")
			}else{
				window.alert("Registration Error.Try again")
			}
		}else{
			alert("Thanks")
		}
}