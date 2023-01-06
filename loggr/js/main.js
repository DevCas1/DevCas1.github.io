const xmlLogstext = 
`<?xml version="1.0" encoding="UTF-8"?>
<templates>
    <template name="Cases" id="cases" title="CASES" subtitle="Nieuwbouw en Kabelaanleg Particulier - CASE QUEUE" allowPreferences="true">
            <item name="Casequeue" id="casequeue" type="text" copyLabel="true" row="true">CASE QUEUE:</item>
            <item name="Vraag" id="vraag" type="textarea" copyLabel="true" row="true">Vraag:</item>
            <item name="Antwoord" id="antwoord" type="textarea" copyLabel="true" row="true">Antwoord:</item>
            <item name="Vervolg" id="vervolg" type="textarea" copyLabel="true" row="true">Vervolg:</item>
            <item name="Connect nummer" id="connectnr" type="text" copyLabel="true" row="true">Connect aanvraagnummer:</item>
    </template>
    <template name="Inbound / Outbound / E-mail" title="INBOUND / OUTBOUND / E-MAIL" id="ibobemail" subtitle="Nieuwbouw en Kabelaanleg Particulier" allowPreferences="true">
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
    <template name="Kennisdeskcall" id="kdcall" title="KD-CALL" subtitle="Nieuwbouw en Kabelaanleg Particulier - Kennisdeskcall" allowPreferences="true">
        <item name="Naam Collega" id="kdcall" type="text" copyLabel="true" row="true">Naam collega:</item>
        <item name="Vraag" id="vraag" type="textarea" copyLabel="true" row="true">Vraag:</item>
        <item name="Antwoord" id="antwoord" type="textarea" copyLabel="true" row="true">Antwoord:</item>
        <item name="Connect nummer" id="connectnr" type="text" copyLabel="true" row="true">Connect aanvraagnummer:</item>
    </template>
    <template name="Pre-order" id="preorder" subtitle="Nav lijst pre-orders/bestellingen die reeds wensdatum hebben verstreken gekeken naar bestelling:" allowPreferences="false">
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
        <logNewline/>
        <newline/>
        <newline/>
        <item name="Analyse" id="analyse" type="textarea" copyLabel="true" row="true">Analyse:</item>
        <item name="Acties" id="acties" type="textarea" copyLabel="true" row="true">Acties:</item>
        <item name="Vervolg" id="vervolg" type="textarea" copyLabel="true" row="true">Vervolg:</item>
        <item name="Nieuwadres" id="nieuwadres" type="text" copyLabel="true" row="true">Nieuw adres:</item>
        <item name="Connect nummer" id="connectnr" type="text" copyLabel="true" row="true">Connect aanvraagnummer:</item>
    </template>
    <template name="TeleKnowledge log" id="tklog" allowPreferences="false">
        <newline/>
        <item name="Content" id="content" type="textarea" copyLabel="false" row="true">Content:</item>
        <logNewline/>
        <item name="Vervolg" id="vervolg" type="textarea" copyLabel="true" row="true">Vervolg:</item>
        <logNewline/>
        <logNewline/>
    </template>
</templates>`;

const parser = new DOMParser();
const xmlLogs = parser.parseFromString(xmlLogstext, "text/xml");
// console.log(xmlLogs.children[0]);

var currentLog;
var logItems;
var logDropdown;
var logSelect;
var logDropdownOptions;
var stroomSelector;
var isIbObEmailPage;
var allowPreferences;
var notesTab;

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
    logDropdown = document.getElementById("log-dropdown");
    logSelect = document.getElementById("log-select");
    notesTab = document.getElementById("notes-textarea");
    
    setLogDropdownOptions();
}

function setLogDropdownOptions(){
    let logs = xmlLogs.querySelectorAll("template");
    let options = "";

    for(let index = 0; index < logs.length; index++){
        options += '<option value="' + logs[index].id + '"' + (index === 0 ? " selected" : "" ) + '>' + logs[index].attributes.name.value + '</option>';
    }

    logSelect.innerHTML = options;
}

function addPageEventListeners(){
    logSelect.addEventListener("change", (event) => { onLogdropdownOptionSelected(event) });
    document.getElementById("save-settings")?.addEventListener("click", onSavePreferences);
    notesTab?.addEventListener("blur", saveNotes);
}

function onLogdropdownOptionSelected(event){ loadLog(event.target.value); }

function onSavePreferences(){
    let settings = document.querySelectorAll(".setting");

    if(settings === null)
        return;
        
    for (let index = 0; index < settings.length; index++){
        let setting = settings[index];
        
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
        let settingId = settings[index].id;
        let item = window.localStorage.getItem(settingId);

        loadedPreferences[settingId] = item ?? document.getElementById(settingId).value;
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
    currentLog = xmlLogs.querySelector('template[id="' + logToLoad + '"]');

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
            return newline();
        case "logNewline":
            return logNewline();
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
function label(name, content, copyLabel = "true", col = "false"){ return '<label for="' + name + '" class="col-sm-2 col-form-label log-label' + (col ? ' col' : '') + '" copyLabel=' + copyLabel + '>'  + content + '</label>'; }

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
function textInput(name, id, placeholder = "",  col = "false"){ return '<div class="col-sm-10' + (col ? ' col' : '') + '"><input name="' + name + '" type="text" class="form-control log-input" id="'+ id + '" placeholder="' + placeholder + '"></input></div>'; }

/**
  * @param {string} name The HTML name of the input element
  * @param {string} id The HTML ID of the input element
  * @param {string} placeholder The placeholder text to supply the HTML element
  * @param {string} col Whether the input element should contain 'col' in it's HTML classes
  */
function textareaInput(name, id, placeholder = "", col = "false"){ return '<div class="col-sm-10' + (col ? ' col' : '') + '"><textarea name="' + name + '" id="' + id + '" class="form-control log-input" cols="33" rows="3" placeholder="' + placeholder + '"></textarea></div>'; }

function selectInput(item, name, id, col = "false"){
    let options = item.querySelectorAll("option");
    let result = '<div class="col-sm-10"><select name="' + name + '" id="' + id + '" class="form-select form-control';

    if (col === "true")
        result += ' col';

    result += '">'

    for (let index = 0; index < options.length; index++){
        let option = options[index];
        result += '<option value="' + option.attributes.value.value + '">' + option.innerHTML + '</option>';
    }

    return result + '</select></div>';
}

function newline(){ return '<br/>'; }

/**
 * @returns a div-string containing the class log-item and log-newline
 */
function logNewline(){ return '<div class="log-item log-newline"></div>'; }

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
        let option = options[index];
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
}

function addLogEventListeners(){
    document.getElementById("copy").addEventListener("click", onCopy);
    document.getElementById("reset").addEventListener("click", onReset);

    if (isIbObEmailPage){
        stroomSelector.addEventListener("change", () => {
            document.getElementById("rn-nummer-group").className = "input-group col" + (stroomSelector.value === "e-mail" ? " visible" : " invisible");
        })
    }
}

function onCopy(){
    let log = stroomSelector?.value?.toUpperCase() ?? "";

    if (isIbObEmailPage){
        if(stroomSelector.value.toLowerCase() === "e-mail")
        log += " (" + document.getElementById("rn-nummer").value + ")";
    }
    else{
        log += document.getElementById("log-title")?.innerHTML ?? "";
    }
    
    let subtitle = document.getElementById("log-subtitle");

    if (subtitle !== null && subtitle !== ""){
        log += '\n' + subtitle.innerHTML;
    }

    let enterInAntwoord = loadedPreferences["enter-in-antwoord"];
    let witregelTussenItems = loadedPreferences["witregel-tussen-items"] === "true";
    let logLegeAntwoorden = loadedPreferences["log-lege-antwoorden"] === "true";

    // console.log("Found log items:");
    // console.log(logItems);

    for (let index = 0; index < logItems.length; index++){
        let parent = logItems[index];
        
        let input = parent.querySelector("input, textarea, select");
        let copyLabel = parent.querySelector(".log-label")?.attributes?.copylabel?.value === "true";
        
        if (parent.className.includes("log-newline") && allowPreferences === false){
            // console.log("log-newline found, continueing...");
            log += "\n";
            continue;
        }
        
        if (allowPreferences && !logLegeAntwoorden && input.value === ""){
            continue;
        }
        
        log += ((allowPreferences && witregelTussenItems) ? "\n\n" : "\n");
        

        if (copyLabel)
            log += parent.querySelector(".log-label").innerHTML;

        if (allowPreferences){
            switch(enterInAntwoord){
                case "altijd":
                    log += "\n";
                    break;
                case "enters":
                    log += ((input.value.indexOf("\n") === -1) ? (copyLabel ? " " : "") : "\n");
                    break;
                default:
                    log += (copyLabel ? " " : "");
                    break;
            }
        }
        else{
            log += copyLabel ? " " : "";
        }

        log += input.value
    }
    
    navigator.clipboard.writeText(log).catch(error => {
      alert("Fout bij het kopiëren van de log!\nFout:  ", error);
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
  
    // window.addEventListener('DOMContentLoaded', () => {
    //   showActiveTheme(getPreferredTheme())
  
    //   document.querySelectorAll('[data-bs-theme-value]')
    //     .forEach(toggle => {
    //       toggle.addEventListener('click', () => {
    //         const theme = toggle.getAttribute('data-bs-theme-value')
    //         localStorage.setItem('theme', theme)
    //         setTheme(theme)
    //         showActiveTheme(theme)
    //       })
    //     })
    // })
})()
