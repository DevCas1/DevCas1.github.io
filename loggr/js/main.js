var logItems;
var stroomSelector;
var isIbObEmailPage;
var allowPreferences;
var notesTab;

var loadedPreferences = {
    Id: "", 
    Value: ""
}

window.addEventListener("load", onLoad);

function onLoad(){
    initVariables();
    initEventListeners();
    initTooltips();
    loadPreferences();
    loadNotes();
}

function initVariables(){
    logItems = document.querySelectorAll(".log-item, .log-newline");
    stroomSelector = document.getElementById("log-title-select");
    isIbObEmailPage = stroomSelector !== null;

    if (isIbObEmailPage){
        stroomSelector.addEventListener("change", () => {
            document.getElementById("rn-nummer-label").className = "input-group-text" + (stroomSelector.value === "e-mail" ? " visible" : " invisible");
            document.getElementById("rn-nummer").className = "form-control" + (stroomSelector.value === "e-mail" ? " visible" : " invisible");
        })
    }

    allowPreferences = document.querySelector("meta[name=allow-preferences]")?.getAttribute("content") === "true";
    notesTab = document.getElementById("notes-textarea");
}

<<<<<<< HEAD
function initEventListeners(){
    document.getElementById("copy").addEventListener("click", onCopy);
    document.getElementById("reset").addEventListener("click", onReset);
    document.getElementById("save-settings")?.addEventListener("click", onSavePreferences);
    notesTab?.addEventListener("blur", saveNotes);
}

function initTooltips(){
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
}

function saveNotes(){
    if (notesTab.value === window.localStorage.getItem("notes"))
        return;

    window.localStorage.setItem("notes", notesTab.value);
}

function loadNotes(){
    content = window.localStorage.getItem("notes");
    if (content !== null)
        notesTab.value = content;
}

function onCopy(){
    let log = stroomSelector?.value?.toUpperCase() ?? "";

    if (isIbObEmailPage && stroomSelector.value.toLowerCase() === "e-mail"){
        log += " (" + document.getElementById("rn-nummer").value + ")";
    }
=======
        let subtitle = document.querySelector("#logsubtitle");
        if (subtitle !== null){
            log += '\n' + subtitle.innerHTML;
        }
        
        let inputs = document.querySelectorAll(".logitem");

        for (let index = 0; index < inputs.length; index++){
            let parent = inputs[index];
            let isTextArea = parent.querySelector(".form-control").tagName === 'TEXTAREA';
            let input = parent.querySelector(".form-control").value;

            if (input === ""){
                continue;
            }

            log += '\n\n' + parent.querySelector(".form-label").innerHTML + (isTextArea ? '\n' : ' ') + input;
        }
        
        console.log(log);
        navigator.clipboard.writeText(log).catch(err => {
          alert('Error while copying text: ', err);
        });
    });
>>>>>>> cde60a90d831013b15f801cf0245ebf9147647ed
    
    log += document.getElementById("log-title")?.innerHTML ?? "";

    let subtitle = document.getElementById("log-subtitle");
    if (subtitle !== null){
        log += '\n' + subtitle.innerHTML;
    }
    
    let enterInAntwoord = loadedPreferences["enter-in-antwoord"];
    let witregelTussenItems = loadedPreferences["witregel-tussen-items"] === "true";
    let logLegeAntwoorden = loadedPreferences["log-lege-antwoorden"] === "true";

<<<<<<< HEAD
    for (let index = 0; index < logItems.length; index++){
        let parent = logItems[index];
        let input = parent.querySelector(".log-input");
        
        if (logItems[index].className.includes("log-newline") && allowPreferences !== "true"){
            log += "\n";
            continue;
=======
            let inputs = document.querySelectorAll("input[type=text], textarea");
            
            for(let index = 0; index < inputs.length; index++)
            inputs[index].value = "";
>>>>>>> cde60a90d831013b15f801cf0245ebf9147647ed
        }
        
        if (allowPreferences && !logLegeAntwoorden && input.value === ""){
            continue;
        }

        log += ((allowPreferences && witregelTussenItems) ? "\n\n" : "\n");
        
        log += parent.querySelector(".log-label").innerHTML;

        if (allowPreferences){
            switch(enterInAntwoord){
                case "altijd":
                    log += "\n";
                    break;
                case "enters":
                    log += ((input.value.indexOf("\n") === -1) ? " " : "\n");
                    break;
                default:
                    log += " ";
                    break;
            }
        }
        else{
            log += " ";
        }

        log += input.value;
    }
    
    navigator.clipboard.writeText(log).catch(error => {
      alert("Fout bij het kopiëren van de log.\nFout:  ", error);
    });
}
<<<<<<< HEAD

function onReset(){
    let resetText = "Reset";
    let confirmText = "Bevestig reset";
    let resetButton = document.getElementById("reset");
    
    if (resetButton.innerHTML != confirmText){
        resetButton.innerHTML = confirmText;
        return;
    }
    
    resetButton.innerHTML = resetText;

    for(let index = 0; index < logItems.length; index++){
        let input = logItems[index].querySelector("input[type=text], textarea, select")

        switch(input.tagName.toLowerCase()){
            case "select":
                input.selectedIndex = 0;
                input.dispatchEvent(new Event("change"));
                break;
                
            default:
                input.value = "";
                break;
        }
    }
}

function onSavePreferences(){
    let settings = document.querySelectorAll(".setting");

    if(settings === null)
        return;
        
    for (let index = 0; index < settings.length; index++){
        let setting = settings[index];
        
        window.localStorage.setItem(setting.id, setting.value);
        loadedPreferences[setting.id] = setting.value; 

        // console.log("Set preference " + setting.id + " to " + setting.value)
    }
    // console.log("Done saving " + settings.length +  " preference" + (settings.length > 1 ? "s" : "") + "!");
}

function loadPreferences(){
    let settings = document.querySelectorAll(".setting");
    
    if (settings === null)
        return;

    for (let index = 0; index < settings.length; index++){
        let settingId = settings[index].id;
        let item = window.localStorage.getItem(settingId);

        loadedPreferences[settingId] = item ?? document.getElementById(settingId).value;
        document.getElementById(settingId).value = loadedPreferences[settingId];

        // console.log("Loaded preference for " + settingId + ": " + loadedPreferences[settingId]);
    }

    // console.log("Done loading " + settings.length + " preference" + (settings.length > 1 ? "s" : "") + "!");
}
=======
>>>>>>> cde60a90d831013b15f801cf0245ebf9147647ed
