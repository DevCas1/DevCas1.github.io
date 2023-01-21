// import { Modal } from "bootstrap";

const builtinLogsText = 
`<?xml version="1.0" encoding="UTF-8"?>
<templates version="built-in">
    <template name="Cases" id="cases" type="Log" title="CASES" subtitle="Nieuwbouw en Kabelaanleg Particulier - CASE QUEUE" allowPreferences="true">
            <item name="Casequeue" id="casequeue" type="text" copyLabel="true" row="true">CASE QUEUE:</item>
            <item name="Vraag" id="vraag" type="textarea" copyLabel="true" row="true">Vraag:</item>
            <item name="Antwoord" id="antwoord" type="textarea" copyLabel="true" row="true">Antwoord:</item>
            <item name="Vervolg" id="vervolg" type="textarea" copyLabel="true" row="true">Vervolg:</item>
            <item name="Connect nummer" id="connectnr" type="text" copyLabel="true" row="true">Connect aanvraagnummer:</item>
    </template>
    <template name="Inbound / Outbound / E-mail" title="INBOUND / OUTBOUND / E-MAIL" id="ibobemail" subtitle="Nieuwbouw en Kabelaanleg Particulier" type="Log" allowPreferences="true">
        <row>
            <logTitleSelect name="Log Title Select" id="log-title-select" type="logTitleSelect" copyLabel="false" default="inbound" col="true">
                <option value="inbound">Inbound</option>
                <option value="outbound">Outbound</option>
                <option value="e-mail">E-mail</option>
            </logTitleSelect>
            <inputGroup id="rn-nummer-group" col="true" visible="false">
                <span name="RN-nummer-label" id="rn-nummer-label">RN-nummer</span>
                <item name="RightNow nummer" id="rn-nummer" type="text" placeholder="123456-123456" condition='logTitleSelect === "E-mail"' copyLabel="false">RN-nummer</item>
            </inputGroup>
        </row>
        <item name="Vraag" id="vraag" type="textarea" copyLabel="true" row="true">Vraag:</item>
        <item name="Antwoord" id="antwoord" type="textarea" copyLabel="true" row="true">Antwoord:</item>
        <item name="Vervolg" id="vervolg" type="textarea" copyLabel="true" row="true">Vervolg:</item>
        <item name="Connect nummer" id="connectnr" type="text" copyLabel="true" row="true">Connect aanvraagnummer:</item>
    </template>
    <template name="Kennisdeskcall" id="kdcall" type="Log" title="KD-CALL" subtitle="Nieuwbouw en Kabelaanleg Particulier - Kennisdeskcall" allowPreferences="true">
        <item name="Naam Collega" id="kdcall" type="text" copyLabel="true" row="true">Naam collega:</item>
        <item name="Vraag" id="vraag" type="textarea" copyLabel="true" row="true">Vraag:</item>
        <item name="Antwoord" id="antwoord" type="textarea" copyLabel="true" row="true">Antwoord:</item>
        <item name="Connect nummer" id="connectnr" type="text" copyLabel="true" row="true">Connect aanvraagnummer:</item>
    </template>
    <template name="Pre-order" id="preorder" title="Nav lijst pre-orders/bestellingen die reeds wensdatum hebben verstreken gekeken naar bestelling:" type="Log" allowPreferences="false">
        <item name="Reden pre-RFS" id="redenprerfs" type="select" copyLabel="true" default="Onterechte status nieuwbouw" label="Reden Pre-RFS:" row="true">
            <option value="Onterechte status nieuwbouw">Onterechte status nieuwbouw</option>
            <option value="Kabelaanleg">Kabelaanleg</option>
        </item>
        <item name="Klant type" id="klanttype" type="select" copyLabel="true" default="resi" label="Type Klant:" row="true">
            <option value="resi">Residentiëel</option>
            <option value="zakelijk">Zakelijk</option>
        </item>
        <item name="Gereedmelding" id="gereedmelding" type="text" placeholder="dd-mm-jjjj" copyLabel="true" row="true">Gereedmelding:</item>
        <item name="Nieuwbouw ingeschakeld" id="nbingeschakeld" type="select" copyLabel="true" default="nee" label="Nieuwbouw ingeschakeld:" row="true">
            <option value="nee">Nee</option>
            <option value="ja">Ja</option>
            <option value="nvt">N.v.t.</option>
        </item>
        <item name="Registratie Mijnnieuwehuis" id="registratiemnh" type="select" copyLabel="true" default="nee" label="Registratie mijnnieuwehuis:" row="true">
            <option value="nee">Nee</option>
            <option value="ja">Ja</option>
        </item>
        <newline logNewline="1"/>
        <newline/>
        <item name="Analyse" id="analyse" type="textarea" copyLabel="true" row="true">Analyse:</item>
        <item name="Acties" id="acties" type="textarea" copyLabel="true" row="true">Acties:</item>
        <item name="Vervolg" id="vervolg" type="textarea" copyLabel="true" row="true">Vervolg:</item>
        <item name="Nieuwadres" id="nieuwadres" type="text" copyLabel="true" row="true">Nieuw adres:</item>
        <item name="Connect nummer" id="connectnr" type="text" copyLabel="true" row="true">Connect aanvraagnummer:</item>
    </template>
    <template name="Adresbeheer Case" id="abcase" title="Bestaand adres" type="Case" allowPreferences="false">
        <item name="Aansluiting aanwezig" id="aanslaanwezig" type="select" copyLabel="true" default="Ja" label="Is er een aansluiting van Ziggo aanwezig (groene kabel)?" row="true">
            <option value="Ja">Ja</option>
            <option value="Nee">Nee</option>
        </item>
        <newline logNewline="1"/>
        <text row="true">Laat de klant indien mogelijk controleren of er al signaal is in de woning</text>
        <item name="Signaal aanwezig" id="signaalaanwezig" type="select" copyLabel="true" default="Ja" label="Is er signaal aanwezig?" row="true">
            <option value="Ja">Ja</option>
            <option value="Onbekend">Onbekend</option>
            <option value="Nee">Nee</option>
        </item>
        <newline logNewline="1"/>
        <item name="Adres gewijzigd" id="adrgewijzigd" type="select" copyLabel="true" default="Nee" label="Is het adres gewijzigd (door de gemeente)?" row="true">
            <option value="Nee">Nee</option>
            <option value="Ja">Ja</option>
        </item>
        <item name="Adresaanpassing" id="adresaanpassing" type="text" copyLabel="true" row="true">Zo ja, geef aan wat er is aangepast:</item>
        <newline logNewline="1"/>
        <text row="true">Locatiegegevens van het probleem</text>
        <item name="Postcode" id="postcode" type="text" copyLabel="true" row="true">Postcode:</item>
        <item name="Huisnummer" id="huisnr" type="text" copyLabel="true" row="true">Huisnummer:</item>
        <item name="Toevoeging" id="toevoeging" type="text" copyLabel="true" row="true">Toevoeging:</item>
        <item name="Straatnaam" id="strnaam" type="text" copyLabel="true" row="true">Straatnaam:</item>
        <item name="Woonplaats" id="woonplaats" type="text" copyLabel="true" row="true">Woonplaats:</item>
        <newline logNewline="1"/>
        <item name="Verhuis/leverdatum" id="verhleverdatum" type="text" copyLabel="true" row="true">Verhuis/leverdatum:</item>
        <newline logNewline="1"/>
        <item name="Salescode" id="salescode" type="text" copyLabel="true" row="true">Salescode:</item>
        <item name="Gewenst pakket" id="pakket" type="text" copyLabel="true" row="true">Gewenst pakket:</item>
        <item name="Rekeningnr" id="reknr" type="text" copyLabel="true" row="true">Rekeningnummer:</item>
        <newline logNewline="1"/>
        <item name="Toelichting" id="toelichting" type="textarea" copyLabel="true" row="true">Toelichting:</item>
    </template>
</templates>`;

const version = "1";
const parser = new DOMParser();
const fileReader = new FileReader();
const resetText = "Reset";
const confirmText = "Bevestig reset";
const loadLogsModal = new bootstrap.Modal(document.getElementById("loadLogBackdrop"));
// console.log(templatesFile.children[0]);

let allowPreferences;
let currentLog;
let isIbObEmailPage;
let loadLogsButton;
let loadLogsInput;
let stroomSelector;
let templatesFile;

var loadedPreferences = {
    Id: "", 
    Value: ""
}

window.addEventListener("load", () => { onPageLoaded(); });

function onPageLoaded(){
    setPageVariables();
    addPageEventListeners();
    loadPreferences();
    loadNotes();
    enableTooltips();

    loadLog(logSelect.value);
}

function setPageVariables(){
    templatesFile = parseTemplateFile(builtinLogsText);
    loadLogsButton = document.getElementById("load-logs-button");
    loadLogsInput = document.getElementById("load-logs-input");
    logDropdown = document.getElementById("log-dropdown");
    logSelect = document.getElementById("log-select");
    notesTab = document.getElementById("notes-textarea");
    
    setLogDropdownOptions(templatesFile);
}

function parseTemplateFile(file) { return parser.parseFromString(file, "text/xml"); }

function setLogDropdownOptions(templates){
    let logs = templates.querySelectorAll("template");
    logDropdownOptions = "";

    for(let index = 0; index < logs.length; index++){
        const log = logs[index];
        logDropdownOptions += '<option value="' + log?.id + '"' + (log.attributes.name?.value === currentLog?.attributes.name.value ? " selected" : "" ) + '>' + log.attributes.type?.value + " - " + log.attributes.name?.value + '</option>';
    }

    logSelect.innerHTML = logDropdownOptions;
}

function addPageEventListeners(){
    loadLogsInput.addEventListener("change", () => { onLogsFileUploaded() });
    loadLogsButton.addEventListener("click", () => { loadLogsInput.click(); })
    logSelect.addEventListener("change", (event) => { onLogdropdownOptionSelected(event) });
    document.getElementById("save-settings")?.addEventListener("click", onSavePreferences);
    notesTab?.addEventListener("blur", saveNotes);
}

function onLogsFileUploaded(){
    file = loadLogsInput.files[0];
    
    if (file === null){
        console.log("No file selected!");
        return;
    }
    
    if (!validFileType(file)){
        alert('Incorrect file type selected! File is of type: "' + file.type + '", and must be of type "text/xml"!');
        return;
    }

    const progressBar = document.getElementById("load-logs-progress-bar");
    loadLogsModal.show();

    fileReader.addEventListener("progress", (event) => { updateProgressBar(event, progressBar); });
    fileReader.addEventListener("load", () => { onFileLoaded(fileReader, progressBar); });
    
    fileReader.readAsText(file);
}

function validFileType(file) { return file.type === "text/xml"; }

function updateProgressBar(event, progressBar){
    if (event.lengthComputable)
        progressBar.style.width = `${(event.total / event.loaded)}%`;
    else
        progressBar.style.width = "100%";
}

function onFileLoaded(fileReader, progressBar){
    const result = fileReader.result;
    const newTemplates = parseTemplateFile(result);
    const fileVersion = newTemplates.querySelector("templates").attributes.version;
    
    loadLogsInput.value = null;
    
    if (fileVersion === undefined || fileVersion.value > version){
        setTimeout(() => { hideLoadModal(progressBar);  }, 1000);
        setTimeout(() => { alert("Log vereist een nieuwere versie van LoggR!");  }, 1500);
        return;
    }

    // console.log(result);
    setTimeout(() => {
        progressBar.style.width = "100%";
        setTimeout(() => { 
            templatesFile = newTemplates;
            setLogDropdownOptions(templatesFile);
            hideLoadModal(progressBar);
        }, 1000);  
    }, 1000);
}

function hideLoadModal(progressBar){
    loadLogsModal.hide();
    setTimeout(() => { progressBar.style.width = "0%"; }, 1000);
}

function onLogdropdownOptionSelected(event){ loadLog(event.target.value); }

function onSavePreferences(){
    let settings = document.querySelectorAll(".setting");

    if(settings === null)
        return;
        
    for (let index = 0; index < settings.length; index++){
        const setting = settings[index];
        
        window.localStorage.setItem(setting.id, setting.value);
        loadedPreferences[setting.id] = setting.value;
    }
}

function saveNotes(){
    if (notesTab.value === window.localStorage.getItem("notes"))
    return;
    
    window.localStorage.setItem("notes", notesTab.value);
}

function loadPreferences(){
    let settings = document.querySelectorAll(".setting");
    
    if (settings === null)
        return;

    for (let index = 0; index < settings.length; index++){
        const settingId = settings[index].id;

        loadedPreferences[settingId] = window.localStorage.getItem(settingId) ?? document.getElementById(settingId).value;
        document.getElementById(settingId).value = loadedPreferences[settingId];
    }
}

function loadNotes(){
    content = window.localStorage.getItem("notes");
    if (content !== null)
    notesTab.value = content;
}

function enableTooltips(){
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
}

function loadLog(logToLoad){
    currentLog = templatesFile.querySelector('template[id="' + logToLoad + '"]');

    const hasTitle = currentLog.attributes.title !== undefined;
    const hasSubtitle = currentLog.attributes.subtitle !== undefined;
    let   htmlToInsert = "";
    
    htmlToInsert += (hasTitle ? h1(currentLog.attributes.title.value) : "");
    htmlToInsert += (hasSubtitle ? h2(currentLog.attributes.subtitle.value) : "");
    htmlToInsert += loopOverChildren(currentLog.children);
    
    htmlToInsert += logButtons();
    document.getElementById("log-form").innerHTML = htmlToInsert;

    allowPreferences = currentLog.attributes.allowPreferences?.value === "true";
    document.getElementById("allow-preference-notice").className = "text-danger" + (allowPreferences ? " invisible" : ""); 
    
    onLogLoaded();
}

/**
 * @param {string} content
*/
function h1(content){ return '<h1 id="log-title">'+ content + '</h1>'; }

/**
  * @param {string} content
*/
function h2(content){ return '<h2 id="log-subtitle">' + content + '</h2>'; }

function loopOverChildren(children){
    let result = "";

    for (let index = 0; index < children.length; index++){
        result += logElement(children[index]);      
    }

    return result; 
}

function logElement(element){
    switch(element.tagName){
        case "item":
            return logItemDiv(element);
        case "row":
            return logRow(loopOverChildren(element.children));
        case "logTitleSelect":
            return logTitleSelect(element);
        case "inputGroup":
            return logInputGroup(element, element.querySelector("span"), element.querySelector("item"));
        case "newline":
            return newline(element.attributes.logNewline?.value);
        case "text":
            return logText(element);
        default:
            console.log('Log element of type <' + element.tagName + '> had not been implemented yet!');
            return "";
    }
}

/**
  * @param {string} name The HTML name of the input element
  * @param {string} content The content to place inside the label
  * @param {string} copyLabel Specifies whether the copy button should also include the label's content
  * @param {string} col Whether the input element should contain 'col' in it's HTML classes
  */
function label(name, content, copyLabel = "true", col = "false"){ return '<label for="' + name + '" class="col-sm-3 col-form-label log-label' + (col ? ' col' : '') + '" copyLabel=' + copyLabel + '>'  + content + '</label>'; }

/**
  * @param {string} item
*/
function logItemDiv(item){
    let attributes = item.attributes;
    let name = attributes.name.value;
    let result = '<div class="log-item';

    if (attributes.row?.value === "true")
        result += ' row mb-3'

    if (attributes.col?.value === "true")
        result += ' col';

    result += '">';

    if (item.attributes.hasLabel?.value === undefined || item.attributes.hasLabel.value === "true"){
        result += label(name, attributes.label?.value ?? item.innerHTML, attributes.copyLabel?.value);
    }

    result += logInput(item, attributes.type.value, name, attributes?.id?.value);
    return result + '</div>';
}

/**
  * @param {string} input The input node itself
  * @param {string} name The HTML name of the input element. Can be infered from 
  * @param {string} id The HTML ID of the input element
  * @param {string} col Whether the input element should contain 'col' in it's HTML classes
  */
function logInput(input, type, name = input.attributes.name.value, id = input.attributes.id.value, col = input.attributes.col?.value ?? "false"){
    switch(type){
        case "date":
            return dateInput(name, id, input.attributes.placeholder?.value, col);
        case "text":
            return textInput(name, id, input.attributes.placeholder?.value, col);
        case "textarea":
            return textareaInput(name, id, input.attributes.placeholder?.value, col);
        case "select":
            return selectInput(input, name, id, col);
        default:
            console.log("input of type <" + type + "> is not implemented yet!");
            return "";
     }
}

/**
  * @param {string} name The HTML name of the input element
  * @param {string} id The HTML ID of the input element
  * @param {string} placeholder The placeholder text to supply the HTML element
  * @param {string} col Whether the input element should contain 'col' in it's HTML classes
  * @returns Test
  */
function dateInput(name, id, placeholder = "",  col = "false"){ console.log("Date placeohlder: " + placeholder); return '<div class="col-sm-9' + (col ? ' col' : '') + '"><input name="' + name + '" type="date" class="form-control log-input" id="'+ id + '" placeholder="' + placeholder + '" pattern="[0-9]{2}-[0-9]{2}-[0-9]{4}"></input></div>'; }

/**
  * @param {string} name The HTML name of the input element
  * @param {string} id The HTML ID of the input element
  * @param {string} placeholder The placeholder text to supply the HTML element
  * @param {string} col Whether the input element should contain 'col' in it's HTML classes
  * @returns Test
  */
function textInput(name, id, placeholder = "",  col = "false"){ return '<div class="col-sm-9' + (col ? ' col' : '') + '"><input name="' + name + '" type="text" class="form-control log-input" id="'+ id + '" placeholder="' + placeholder + '"></input></div>'; }

/**
  * @param {string} name The HTML name of the input element
  * @param {string} id The HTML ID of the input element
  * @param {string} placeholder The placeholder text to supply the HTML element
  * @param {string} col Whether the input element should contain 'col' in it's HTML classes
  */
function textareaInput(name, id, placeholder = "", col = "false"){ return '<div class="col-sm-9' + (col ? ' col' : '') + '"><textarea name="' + name + '" id="' + id + '" class="form-control log-input" cols="33" rows="3" placeholder="' + placeholder + '"></textarea></div>'; }

function selectInput(item, name, id, col = "false"){
    const options = item.querySelectorAll("option");
    let result = '<div class="col-sm-9"><select name="' + name + '" id="' + id + '" class="form-select form-control';

    if (col === "true")
        result += ' col';

    result += '">'

    for (let index = 0; index < options.length; index++){
        const option = options[index];
        result += '<option value="' + option.attributes.value.value + '">' + option.innerHTML + '</option>';
    }

    return result + '</select></div>';
}

function newline(logNewline){ 
    let result = '<br/>';
    for (let index = 0; index < Number(logNewline); index++){
        result += '<div class="log-item log-newline">';
    }
    return result; 
}

function logText(element){ return '<div class="log-item' + (element.attributes.row?.value === "true" ? ' row mb-3' : '') + '"><text  style="padding-left: calc(var(--bs-gutter-x) * 0.5); padding-right: calc(var(--bs-gutter-x) * 0.5);">' + element.innerHTML + '</text></div>'; }

/**
 * @param {string} content 
 * @returns 
 */
function logRow(content){ return '<div class="row mb-3">' + content + '</div>'; }

function logTitleSelect(item){
    let attributes = item.attributes;
    let options = item.querySelectorAll("option");
    let result = '<select name="' + attributes.name.value + '" id="' + attributes.id.value + '" class="form-select form-control';

    if (attributes.col?.value === "true")
        result += ' col';

    result += '">'

    for (let index = 0; index < options.length; index++){
        const option = options[index];
        result += '<option value="' + option.attributes.value.value + '">' + option.innerHTML + '</option>';
    }

    return result + '</select>';
}

/**
 * @param {string} label 
 * @param {string} input 
 * @param {string} col 
 * @returns Result
 */
function logInputGroup(item, label, input){
    let inputAttributes = input.attributes;
    let span = '<span class="input-group-text" id="' + label.attributes.id.id + '">' + label.innerHTML + '</span>';
    let inputElement = '<input name="' + inputAttributes.name.value + '" type="text" class="form-control log-input" id="'+ inputAttributes.id.value + '" placeholder="' + inputAttributes.placeholder.value + '"></input>';
    
    return '<div id="' + item.attributes.id.value + '" class="input-group' + (item.attributes.visible?.value === "true" ? "" : " invisible") + (item.attributes.col.value ? " col" : "") + '">' + span + inputElement + '</div>'; 
}
 
function logButtons(){ 
    return `<div class="mb-3 btn-group" role="group">
        <button type="button" class="btn btn-outline-danger" name="reset" id="reset">Reset</button>
        <button type="button" class="btn btn-outline-success" name="copy" id="copy">Kopiëren</button>
    </div>`
}

function onLogLoaded(){
    setLogVariables();
    addLogEventListeners();
}

function setLogVariables(){
    logItems = document.querySelectorAll(".log-item");
    stroomSelector = document.getElementById("log-title-select");
    isIbObEmailPage = stroomSelector !== null;
    resetButton = document.getElementById("reset");
}

function addLogEventListeners(){
    document.getElementById("copy").addEventListener("click", onCopy);
    document.getElementById("reset").addEventListener("click", onReset);

    if (isIbObEmailPage){
        stroomSelector.addEventListener("change", () => {
            document.getElementById("rn-nummer-group").className = "input-group col" + (stroomSelector.value === "e-mail" ? " visible" : " invisible");
        })
    }

    let inputs = document.getElementsByClassName("log-input");

    for (let index = 0; index < inputs.length; index++){
        inputs[index].addEventListener("change", () => {
            document.getElementById("reset").innerHTML = resetText;
        })
    }
}

function onCopy(){
    const logTitle = document.getElementById("log-title");
    const logSubtitle = document.getElementById("log-subtitle");
    let log = "";

    if (isIbObEmailPage){
        log += stroomSelector.value.toUpperCase();
        log += (stroomSelector.value.toLowerCase() === "e-mail") ? 
            (" (" + document.getElementById("rn-nummer").value + ")") :
            "";
    }
    else if (logTitle !== null && logTitle !== ""){
        log += logTitle.innerHTML;
    }
    
    if (logSubtitle !== null && logSubtitle !== ""){
        log += "\n" + logSubtitle.innerHTML;
    }

    const enterInAntwoord = loadedPreferences["enter-in-antwoord"];
    const witregelTussenItems = loadedPreferences["witregel-tussen-items"] === "true";
    const logLegeAntwoorden = loadedPreferences["log-lege-antwoorden"] === "true";

    // console.log("Found log items:");
    // console.log(logItems);

    for (let index = 0; index < logItems.length; index++){
        const parent = logItems[index];
        const item = parent.querySelector("input, textarea, select, text");

        if (parent.className.includes("log-newline")){
            log += "\n";
            continue;
        }
        
        if ((allowPreferences && !logLegeAntwoorden && item.value === "")){
            continue;
        }

        const copyLabel = parent.querySelector(".log-label")?.attributes?.copylabel?.value === "true";

        log += (allowPreferences && witregelTussenItems) ? "\n\n" : "\n";

        if (item.tagName === "TEXT"){
            log += item.innerHTML.replaceAll('<br>', "\n");
            continue;
        }
        
        if (copyLabel)
            log += parent.querySelector(".log-label").innerHTML;
        
        if (allowPreferences){
            switch(enterInAntwoord){
                case "altijd":
                    log += "\n";
                    break;
                case "enters":
                    log += ((item.value.indexOf("\n") === -1) ? (copyLabel ? " " : "") : "\n");
                    break;
                    default:
                        log += (copyLabel ? " " : "");
                        break;
                    }
                }
        else{
            log += copyLabel ? " " : "";
        }
        
        log += item.value;
    }
    
    navigator.clipboard.writeText(log).catch(error => {
      alert("Fout bij het kopiëren van de log!\nFout:  ", error);
    });
}

function onReset(){    
    if (resetButton.innerHTML != confirmText){
        resetButton.innerHTML = confirmText;
        return;
    }
    
    resetButton.innerHTML = resetText;

    for(let index = 0; index < logItems.length; index++){
        const input = logItems[index].querySelector("input[type=text], textarea, select")

        if (input === null) // In case the input isn't actually an input. TODO: Filter non-inputs before looping over them
            continue;

        if(input.tagName.toLowerCase() === "select"){
            input.selectedIndex = 0;
            input.dispatchEvent(new Event("change"));
        }
        else
            input.value = "";
    }
}

/*!
 * Color mode toggler for Bootstrap's docs (https://getbootstrap.com/)
 * Copyright 2011-2022 The Bootstrap Authors
 * Licensed under the Creative Commons Attribution 3.0 Unported License.
 */
(() => {
    'use strict'
  
    const storedTheme = localStorage.getItem('theme')
  
    const getPreferredTheme = () => {
      if (storedTheme) {
        return storedTheme
      }
  
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    }
  
    const setTheme = function (theme) {
      if (theme === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.setAttribute('data-bs-theme', 'dark')
      } else {
        document.documentElement.setAttribute('data-bs-theme', theme)
      }
    }
  
    setTheme(getPreferredTheme())
  
    const showActiveTheme = theme => {
      const activeThemeIcon = document.querySelector('.theme-icon-active use')
      const btnToActive = document.querySelector(`[data-bs-theme-value="${theme}"]`)
      const svgOfActiveBtn = btnToActive.querySelector('svg use').getAttribute('href')
  
      document.querySelectorAll('[data-bs-theme-value]').forEach(element => {
        element.classList.remove('active')
      })
  
      btnToActive.classList.add('active')
      activeThemeIcon.setAttribute('href', svgOfActiveBtn)
    }
  
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
      if (storedTheme !== 'light' || storedTheme !== 'dark') {
        setTheme(getPreferredTheme())
      }
    })
  
    window.addEventListener('DOMContentLoaded', () => {
    //   showActiveTheme(getPreferredTheme()) //TODO: Implement theme switching button
  
      document.querySelectorAll('[data-bs-theme-value]')
        .forEach(toggle => {
          toggle.addEventListener('click', () => {
            const theme = toggle.getAttribute('data-bs-theme-value')
            localStorage.setItem('theme', theme)
            setTheme(theme)
            showActiveTheme(theme)
          })
        })
    })
})()
