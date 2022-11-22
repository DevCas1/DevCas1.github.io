window.addEventListener('load', onLoad());

function onLoad(){
    let stroomSelector = document.getElementById("logtitleselect");
    let IsIbObEmailPage = stroomSelector !== null;
    
    if (IsIbObEmailPage){
        stroomSelector.addEventListener("change", () => {
            document.getElementById("rn-nummer-label").className = "input-group-text" + (stroomSelector.value === "e-mail" ? " visible" : " invisible");
            document.getElementById("rn-nummer").className = "form-control" + (stroomSelector.value === "e-mail" ? " visible" : " invisible");
        })
    }

    document.querySelector("#copy").addEventListener("click", () => {
        let log;
        if (IsIbObEmailPage){
            log = document.querySelector("#logtitleselect").value.toUpperCase() + ": ";
            log += document.getElementById("rn-nummer").value;
        }
        else{
            log = document.querySelector("#logtitle").innerHTML
        }

        log += '\n' + document.querySelector("#logsubtitle").innerHTML + '\n\n';
        
        let inputs = document.querySelectorAll(".logitem");

        for (let index = 0; index < inputs.length; index++){
            let parent = inputs[index];
            let isTextArea = parent.getElementsByClassName("form-control").item(0).tagName === 'TEXTAREA';

            log += parent.getElementsByClassName("form-label").item(0).innerHTML + (isTextArea ? '\n' : ' ');
            log += parent.getElementsByClassName("form-control").item(0).value + (index === (inputs.length - 1) ? '' : '\n\n');
        }
        
        console.log(log);
        navigator.clipboard.writeText(log).catch(err => {
          alert('Error while copying text: ', err);
        });
    });
    
    document.querySelector("#reset").addEventListener("click", () => {
        let resetText = "Reset";
        let confirmText = "Bevestig reset";
        let resetButton = document.querySelector("#reset");

        if (resetButton.innerHTML != confirmText)
            resetButton.innerHTML = confirmText;
        else{
            resetButton.innerHTML = resetText;

            let inputs = document.querySelectorAll("input[type=text], textarea");
            
            for(let index = 0; index < inputs.length; index++)
            inputs[index].value = "";
            
            document.querySelector("form").reset();
        }
    });
}