document.addEventListener('DOMContentLoaded', () => {
   // const pricingToggle = document.getElementById('pricing-toggle');
    const btns = document.getElementsByClassName("btn");

    for (let i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", displaymsg);
    }

    function displaymsg() {
        let text;
        let favDrink = prompt("Are you sure ?");
        switch(favDrink) {
            case "yes":
                text = "Excellent Nice choice.";
                break;
                case "No":
                    text = "sir/madam prices are good please select  any one paln";
                    break;

            
            default:
                text = "please select a valid plan";
        }
        document.getElementById("demo").innerHTML = text;        
    }
});
