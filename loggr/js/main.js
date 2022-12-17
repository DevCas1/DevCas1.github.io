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
    
    log += document.getElementById("log-title")?.innerHTML ?? "";

    let subtitle = document.getElementById("log-subtitle");
    if (subtitle !== null){
        log += '\n' + subtitle.innerHTML;
    }
    
    let enterInAntwoord = loadedPreferences["enter-in-antwoord"];
    let witregelTussenItems = loadedPreferences["witregel-tussen-items"] === "true";
    let logLegeAntwoorden = loadedPreferences["log-lege-antwoorden"] === "true";

    for (let index = 0; index < logItems.length; index++){
        let parent = logItems[index];
        let input = parent.querySelector(".log-input");
        
        if (logItems[index].className.includes("log-newline") && allowPreferences !== "true"){
            log += "\n";
            continue;
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
