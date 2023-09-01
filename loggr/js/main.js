// @ts-check
/** @type {boolean} */
let debug = false;

/** @type {string} */
const builtinLogsText =
  `<?xml version="1.0" encoding="UTF-8"?>
<templates version="built-in">
  <template name="Standaard (nieuw)" id="default-new" title="NIEUWBOUW &amp; KABELAANLEG" type="Log" allowPreferences="true" includeNameToggle="true" includeUnifyToggle="true">
    <newline logNewline="1"/>
    <item name="Aanvraagnummer" id="aanvraagnummer" type="text" copyLabel="true" row="true">AANVRAAGNUMMER:</item>
    <item name="Bron" id="bron" type="text" copyLabel="true" row="true">BRON:</item>
    <item name="Adres" id="adres" type="text" copyLabel="true" row="true">ADRES:</item>
    <item name="Situatie" id="situatie" type="textarea" copyLabel="true" row="true">SITUATIE:</item>
    <item name="Antwoord-Vervolg" id="antwvervolg" type="textarea" copyLabel="true" row="true">ANTWOORD/VERVOLG:</item>
  </template>
  <template name="Teleknowledge Connect" id="tklog" type="Log" allowPreferences="true">
    <item name="Situatie/Gedaan" id="situatie" type="textarea" copyLabel="false" row="true">Situatie / Gedaan:</item>
    <item name="Vervolg" id="vervolg" type="textarea" copyLabel="true" row="true">Vervolg:</item>
    <item name="Adres" id="adres" type="text" copyLabel="true" row="true">Postcode + Huisnummer:</item>
    <item name="Partner" id="partner" type="textarea" copyLabel="true" row="true">Contactverzoek Partner:</item>
  </template>
  <template name="Cases" id="cases" type="Log" title="CASES" subtitle="Nieuwbouw en Kabelaanleg Particulier" allowPreferences="true" includeNameToggle="true" includeUnifyToggle="true">
    <item name="Vraag klant" id="klantvraag" type="textarea" copyLabel="true" row="true">Vraag klant:</item>
    <item name="Antwoord" id="antwoord" type="textarea" copyLabel="true" row="true">Antwoord:</item>
    <item name="Vervolg" id="vervolg" type="textarea" copyLabel="true" row="true">Vervolg:</item>
    <item name="Adres" id="adres" type="text" copyLabel="true" row="true">Postcode + Huisnummer:</item>
    <item name="Connectnummer" id="connectnr" type="text" copyLabel="true" row="true">Connectnummer:</item>
    <item name="Contatverzoek" id="contactverzoekptnr" type="textarea" copyLabel="true" row="true">Contactverzoek Partner:</item>
  </template>
  <template name="Inbound / Outbound / E-mail" title="INBOUND / OUTBOUND / E-MAIL" id="ibobemail" subtitle="Nieuwbouw en Kabelaanleg Particulier" type="Log" allowPreferences="true" includeNameToggle="true" includeUnifyToggle="true">
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
    <item name="Vraag klant" id="klantvraag" type="textarea" copyLabel="true" row="true">Vraag klant:</item>
    <item name="Antwoord" id="antwoord" type="textarea" copyLabel="true" row="true">Antwoord:</item>
    <item name="Vervolg" id="vervolg" type="textarea" copyLabel="true" row="true">Vervolg:</item>
    <item name="Adres" id="adres" type="text" copyLabel="true" row="true">Postcode + Huisnummer:</item>
    <item name="Connectnummer" id="connectnr" type="text" copyLabel="true" row="true">Connectnummer:</item>
    <item name="Contatverzoek" id="contactverzoekptnr" type="textarea" copyLabel="true" row="true">Contactverzoek Partner:</item>
  </template>
  <template name="Kennisdeskcall" id="kdcall" type="Log" title="KD-CALL" subtitle="Nieuwbouw en Kabelaanleg Particulier - Kennisdeskcall" allowPreferences="true" includeNameToggle="true" includeUnifyToggle="true">
    <item name="Naam Collega" id="kdcall" type="text" copyLabel="true" row="true">Naam collega:</item>
    <item name="Vraag" id="vraag" type="textarea" copyLabel="true" row="true">Vraag:</item>
    <item name="Antwoord" id="antwoord" type="textarea" copyLabel="true" row="true">Antwoord:</item>
    <item name="Vervolg" id="vervolg" type="textarea" copyLabel="true" row="true">Vervolg:</item>
    <item name="Adres" id="adres" type="text" copyLabel="true" row="true">Postcode + Huisnummer:</item>
    <item name="Connectnummer" id="connectnr" type="text" copyLabel="true" row="true">Connectnummer:</item>
    <item name="Contatverzoek" id="contactverzoekptnr" type="textarea" copyLabel="true" row="true">Contactverzoek Partner:</item>
  </template>
  <template name="Adresbeheer" id="abcase" title="Bestaand adres" type="Case" allowPreferences="false">
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
  <template name="Installatiemonteur" id="instcpe" title="(KTA) / Installatie CPE geleverd / (datum/dagdeel)" type="Case" allowPreferences="false">
    <item name="Situatie" id="salescode" type="text" copyLabel="true" row="true">Probleemomschrijving en verwachting klant:</item>
    <item name="AlternatiefTelnr" id="alttel" type="text" copyLabel="true" row="true">Alternatief Telefoonnummer (06):</item>
    <item name="Bijzonderheden" id="bijzonderheden" type="text" copyLabel="true" row="true">Overige Bijzonderheden:</item>
  </template>
</templates>`;

/** @type {Number} */
const version = 3;
/** @type {DOMParser} */
const parser = new DOMParser();

const beforeUnloadListener = (/** @type {{ preventDefault: () => void; returnValue: string; }} */ event) => {
  event.preventDefault();
  return (event.returnValue = "");
};

/** @type {string} */
const resetText = "Reset";
/** @type {string} */
const confirmText = "Bevestig reset";
/** @ts-expect-error */
const loadLogsModal = new bootstrap.Modal(document.getElementById("loadLogBackdrop"));
// console.log(templatesFile.children[0]);

/** @type {boolean} */
let allowPreferences;
let currentLog;
/** @type {boolean} */
let isIbObEmailPage;
let loadLogsButton;
/** @type {any} */
let loadLogsInput;
/** @type {HTMLInputElement} */
let stroomSelector;
/** @type {HTMLInputElement} */
let nameToggle;
/** @type {HTMLInputElement} */
let unifyToggle;
let templatesFile;
let logDropdown;
/** @type {HTMLInputElement} */
let logSelect;
/** @type {HTMLInputElement} */
let notesTab;

var loadedPreferences = {
  Id: "",
  Value: ""
}

window.addEventListener("load", () => { onPageLoaded(); });

/** Called once when the window fires the "load" event */
function onPageLoaded() {
  setPageVariables()
  addPageEventListeners();
  loadPreferences();
  loadNotes();
  enableTooltips();

  getLogFromFile(logSelect.value);
}

/** Initialize all "page" variables (used by most template pages) */
function setPageVariables() {
  const parseResult = parseTemplateFile(builtinLogsText);
  if (parseResult.parseResult === false) {
    alert("XML parsing failed: " + parseResult.msg)
    return { success: false, msg: parseResult.msg };
  }

  /** @type {XMLDocument} */
  templatesFile = parseResult.result;
  loadLogsButton = document.getElementById("load-logs-button");
  loadLogsInput = document.getElementById("load-logs-input");
  logDropdown = document.getElementById("log-dropdown");
  logSelect = document.getElementById("log-select");
  notesTab = document.getElementById("notes-textarea");

  setLogDropdownOptions(templatesFile);
}

/**
 * Parses a supplied XML file-string string
 * @param {string} file 
 * The XML file-string to parse
 * @returns
 * A {boolean, XMLDocument} object containing whether or not the parser successfully parsed the file-string into an XMLDocument without parser errors, and the resulting document
 */
function parseTemplateFile(file) {
  /** @type {XMLDocument} */
  let document = parser.parseFromString(file, "text/xml");

  /** @type {Element | Null} */
  let errorMsg = document.querySelector("parsererror");

  /** @type {{boolean, XMLDocument, Element}} */
  return { parseResult: errorMsg === null, result: document, msg: errorMsg };
}

/**
  @param {XMLDocument} templates The templates contained within the templatess XML-file to be able to load
*/
function setLogDropdownOptions(templates) {
  /** @type {NodeListOf<Element>} */
  const logs = templates.querySelectorAll("template");

  /** @type {string} */
  let logDropdownOptions = "";

  for (let index = 0; index < logs.length; index++) {
    /** @type {Element} */
    const log = logs[index];

    logDropdownOptions += '<option value="' + log?.id + '"' + (log.attributes.name?.value === currentLog?.attributes.name.value ? " selected" : "") + '>' + log.attributes.type?.value + " - " + log.attributes.name?.value + '</option>';
  }

  logSelect.innerHTML = logDropdownOptions;
}

function addPageEventListeners() {
  logSelect.addEventListener("change", (event) => { onLogdropdownOptionSelected(event) });
  loadLogsButton.addEventListener("click", () => { loadLogsInput.click(); })
  loadLogsInput.addEventListener("change", () => { onLogsFileUploaded() });

  document.getElementById("save-settings")?.addEventListener("click", onSavePreferences);

  notesTab?.addEventListener("blur", saveNotes);
  document.getElementById("saveNotesButton")?.addEventListener("click", saveNotesToDisk);
}

function onLogsFileUploaded() {
  /** @type {FileReader} */
  const fileReader = new FileReader();
  /** @type {File} */
  const file = loadLogsInput.files[0];

  if (file === null) {
    console.log("Geen bestand geselecteerd!");
    return;
  }

  if (!validFileType(file)) {
    alert('Incorrect bestandstype geselecteerd! Bestand heeft type: "' + file.type + '", terwijl type "text/xml" wordt verwacht!');
    return;
  }

  const progressBar = document.getElementById("load-logs-progress-bar");
  loadLogsModal.show();

  fileReader.addEventListener("progress", (event) => { updateProgressBar(event, progressBar); });
  fileReader.addEventListener("load", () => { onFileLoaded(fileReader, progressBar); });

  fileReader.readAsText(file);
}

/** @param {File} file */
function validFileType(file) { return file.type === "text/xml"; }

function updateProgressBar(event, progressBar) {
  if (event.lengthComputable)
    progressBar.style.width = `${(event.total / event.loaded)}%`;
  else
    progressBar.style.width = "100%";
}

function onFileLoaded(fileReader, progressBar) {
  /** @type {string} */
  const result = fileReader.result;
  /** @type {Document} */
  const newTemplates = parseTemplateFile(result);
  /** @type {number} */
  const fileVersion = newTemplates.querySelector("templates")?.attributes?.version?.value;

  loadLogsInput.value = null;

  if (fileVersion === undefined || fileVersion > version) {
    let errorMessage = (fileVersion > version) ?
      ("Template bestand vereist ondersteuning voor template versie " + fileVersion + ", huidige versie is " + version + "!") :
      "Template bestand versie ontbreekt, kan templates niet laden.";

    setTimeout(() => { alert(errorMessage); }, 1500);
    setTimeout(() => { hideLoadModal(progressBar); }, 1000);
    return;
  }

  // console.log(result);
  setTimeout(() => {
    progressBar.style.width = "100%";
    setTimeout(() => {
      /** @type {XMLDocument} */
      templatesFile = newTemplates;
      setLogDropdownOptions(templatesFile);
      hideLoadModal(progressBar);
    }, 1000);
  }, 1000);
}

function hideLoadModal(progressBar) {
  loadLogsModal.hide();
  setTimeout(() => { progressBar.style.width = "0%"; }, 1000);
}

function onLogdropdownOptionSelected(event) {
  window.dispatchEvent(new Event('beforeunload'))
  getLogFromFile(event.target.value);
}

function onSavePreferences() {
  let settings = document.querySelectorAll(".setting");

  if (settings === null)
    return;

  for (let index = 0; index < settings.length; index++) {
    const setting = settings[index];

    window.localStorage.setItem(setting.id, setting.value);
    loadedPreferences[setting.id] = setting.value;
  }
}

function saveNotes() {
  if (notesTab.value === window.localStorage.getItem("notes"))
    return;

  window.localStorage.setItem("notes", notesTab.value);
}

function saveNotesToDisk() {
  /** @type {Date} */
  const date = new Date();
  /** @type {string} */
  const fileName = "Logger notities " + date.toLocaleDateString('nl-NL') + " " + date.toLocaleTimeString('nl-NL') + ".txt";
  /** @type {string} */
  const fileType = "text/plain";
  /** @type {string | Null} */
  const notes = window.localStorage.getItem("notes");
  if (notes === null) {
    console.error("localStorage item with name " + '"notes"' + "is null, nothing to save to disk!");
    return;
  }
  writeFile(notes, fileType, fileName);
}

/**
 * Offer a file for download, with a specified content, MIME type and file name.
 * @param {string} content 
 * @param {string} mimeType 
 * @param {string} fileName 
 */
async function writeFile(content, mimeType, fileName) {
  /** @type {HTMLAnchorElement} */
  let a = document.createElement('a')
  /** @type {Blob} */
  const blob = new Blob([content], { type: mimeType })
  /** @type {string} */
  const url = URL.createObjectURL(blob)

  a.setAttribute('href', url)
  a.setAttribute('download', fileName)
  a.click()
  URL.revokeObjectURL(url);
}

function loadPreferences() {
  let settings = document.querySelectorAll(".setting");

  if (settings === null)
    return;

  for (let index = 0; index < settings.length; index++) {
    const settingId = settings[index].id;

    loadedPreferences[settingId] = window.localStorage.getItem(settingId) ?? document.getElementById(settingId).value;
    document.getElementById(settingId).value = loadedPreferences[settingId];
  }
}

function loadNotes() {
  const notesContent = window.localStorage.getItem("notes");
  if (notesContent !== null)
    notesTab.value = notesContent;
}

function enableTooltips() {
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
  /** @ts-expect-error */
  const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
}

function getLogFromFile(logToLoad) {
  removeEventListener("beforeunload", beforeUnloadListener, { capture: true });

  currentLog = templatesFile.querySelector('template[id="' + logToLoad + '"]');

  const hasTitle = currentLog.attributes.title !== undefined;
  const hasSubtitle = currentLog.attributes.subtitle !== undefined;
  const includeUnifyToggle = currentLog.attributes.includeUnifyToggle !== undefined;
  const includeNameToggle = currentLog.attributes.includeNameToggle !== undefined;
  let htmlToInsert = "";

  htmlToInsert += htmlToInsert = '<div class="row">' + (hasTitle ? h1(currentLog.attributes.title.value) : "");

  if (includeUnifyToggle || includeNameToggle) {
    htmlToInsert += '<div class="col" id="toggleContainer">';
    htmlToInsert += includeNameToggle ? logNameToggle() : "";
    htmlToInsert += includeUnifyToggle ? logUnifyToggle() : "";
    htmlToInsert += "</div>";
  }

  htmlToInsert += "</div>";
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
function h1(content) { return '<h1 class="col" id="log-title">' + content + '</h1>'; }

function logNameToggle() { return `<div class="form-check form-switch form-check-reverse name-toggle"> <input class="form-check-input" id="nameToggle" type="checkbox" id="flexSwitchCheckReverse"> <label class="form-check-label" for="flexSwitchCheckReverse">Voeg naam toe:</label> </div>`; }

function logUnifyToggle() { return `<div class="form-check form-switch form-check-reverse name-toggle"> <input class="form-check-input" id="unifyToggle" type="checkbox" id="flexSwitchCheckReverse"> <label class="form-check-label" for="flexSwitchCheckReverse">Unify klant:</label> </div>`; }

/**
  * @param {string} content
*/
function h2(content) { return '<h2 id="log-subtitle">' + content + '</h2>'; }

function loopOverChildren(children) {
  let result = "";

  for (let index = 0; index < children.length; index++) {
    result += logElement(children[index]);
  }

  return result;
}

function logElement(element) {
  switch (element.tagName) {
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
function label(name, content, copyLabel = "true", col = "false") { return '<label for="' + name + '" class="col-sm-3 col-form-label log-label' + (col ? ' col' : '') + '" copyLabel=' + copyLabel + '>' + content + '</label>'; }

function logGroup(items) {
  let result = "<div>";

  for (let index = 0; index < items.length; index++)
    result += items[index];

  return result + "</div>"
}

/**
  * @param {string} item
*/
function logItemDiv(item) {
  let attributes = item.attributes;
  let name = attributes.name.value;
  let result = '<div class="log-item';

  if (attributes.row?.value === "true")
    result += ' row mb-3'

  if (attributes.col?.value === "true")
    result += ' col';

  result += '">';

  if (item.attributes.hasLabel?.value === undefined || item.attributes.hasLabel.value === "true") {
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
function logInput(input, type, name = input.attributes.name.value, id = input.attributes.id.value, col = input.attributes.col?.value ?? "false") {
  switch (type) {
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
function dateInput(name, id, placeholder = "", col = "false") { console.log("Date placeohlder: " + placeholder); return '<div class="col-sm-9' + (col ? ' col' : '') + '"><input name="' + name + '" type="date" class="form-control log-input" id="' + id + '" placeholder="' + placeholder + '" pattern="[0-9]{2}-[0-9]{2}-[0-9]{4}"></input></div>'; }

/**
  * @param {string} name The HTML name of the input element
  * @param {string} id The HTML ID of the input element
  * @param {string} placeholder The placeholder text to supply the HTML element
  * @param {string} col Whether the input element should contain 'col' in it's HTML classes
  * @returns Test
  */
function textInput(name, id, placeholder = "", col = "false") { return '<div class="col-sm-9' + (col ? ' col' : '') + '"><input name="' + name + '" type="text" class="form-control log-input" id="' + id + '" placeholder="' + placeholder + '"></input></div>'; }

/**
  * @param {string} name The HTML name of the input element
  * @param {string} id The HTML ID of the input element
  * @param {string} placeholder The placeholder text to supply the HTML element
  * @param {string} col Whether the input element should contain 'col' in it's HTML classes
  */
function textareaInput(name, id, placeholder = "", col = "false") { return '<div class="col-sm-9' + (col ? ' col' : '') + '"><textarea name="' + name + '" id="' + id + '" class="form-control log-input" cols="33" rows="3" placeholder="' + placeholder + '"></textarea></div>'; }

function selectInput(item, name, id, col = "false") {
  const options = item.querySelectorAll("option");
  let result = '<div class="col-sm-9"><select name="' + name + '" id="' + id + '" class="form-select form-control';

  if (col === "true")
    result += ' col';

  result += '">'

  for (let index = 0; index < options.length; index++) {
    const option = options[index];
    result += '<option value="' + option.attributes.value.value + '">' + option.innerHTML + '</option>';
  }

  return result + '</select></div>';
}

function newline(logNewline) {
  let result = '<br/>';
  for (let index = 0; index < Number(logNewline); index++) {
    result += '<div class="log-item log-newline">';
  }
  return result;
}

function logText(element) { return '<div class="log-item' + (element.attributes.row?.value === "true" ? ' row mb-3' : '') + ' logText"><text>' + element.innerHTML + '</text></div>'; }

/**
 * @param {string} content 
 * @returns 
 */
function logRow(content) { return '<div class="row mb-3">' + content + '</div>'; }

function logTitleSelect(item) {
  let attributes = item.attributes;
  let options = item.querySelectorAll("option");
  let result = '<select name="' + attributes.name.value + '" id="' + attributes.id.value + '" class="form-select form-control';

  if (attributes.col?.value === "true")
    result += ' col';

  result += '">'

  for (let index = 0; index < options.length; index++) {
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
function logInputGroup(item, label, input) {
  let inputAttributes = input.attributes;
  let span = '<span class="input-group-text" id="' + label.attributes.id.id + '">' + label.innerHTML + '</span>';
  let inputElement = '<input name="' + inputAttributes.name.value + '" type="text" class="form-control log-input" id="' + inputAttributes.id.value + '" placeholder="' + inputAttributes.placeholder.value + '"></input>';

  return '<div id="' + item.attributes.id.value + '" class="input-group' + (item.attributes.visible?.value === "true" ? "" : " invisible") + (item.attributes.col.value ? " col" : "") + '">' + span + inputElement + '</div>';
}

function logButtons() {
  return `<div class="mb-3 btn-group float-end" role="group">
                <button type="button" class="btn btn-outline-danger" name="resetButton" id="resetButton">Reset</button>
                <button type="button" class="btn btn-outline-success" name="copyButton" id="copyButton">Kopiëren</button>
              </div>`
}

function onLogLoaded() {
  setLogVariables();
  addLogEventListeners();
}

function setLogVariables() {
  logItems = document.querySelectorAll(".log-item");
  stroomSelector = document.getElementById("log-title-select");
  isIbObEmailPage = stroomSelector !== null;
  resetButton = document.getElementById("resetButton");
  unifyToggle = document.getElementById("unifyToggle");
  nameToggle = document.getElementById("nameToggle");
}

function addLogEventListeners() {
  document.getElementById("copyButton").addEventListener("click", onCopyPressed);
  resetButton.addEventListener("click", onResetPressed);

  if (isIbObEmailPage) {
    stroomSelector.addEventListener("change", () => {
      document.getElementById("rn-nummer-group").className = "input-group col" + (stroomSelector.value === "e-mail" ? " visible" : " invisible");
    });
  }

  addInputFieldListeners();
}

function addInputFieldListeners() {
  /** @type {HTMLCollectionOf<HTMLElement>} */
  const inputs = document.getElementsByClassName("log-input");

  for (let index = 0; index < inputs.length; index++) {
    inputs[index].addEventListener("change", () => { resetResetButton(); });
    inputs[index].addEventListener("input", (event) => addLogContentWarningListener(event))
  }

  // const selects = document.getElementsByTagName("select");
  // selects = selects.filter.call()

  const toggles = document.querySelectorAll("input[type=checkbox]");

  for (let index = 0; index < toggles.length; index++) {
    toggles[index].addEventListener("click", () => { resetResetButton(); });
  }
}

function resetResetButton() {
  resetButton.innerHTML = resetText;
}

function addLogContentWarningListener(/** @type  **/ event) {
  if (event.target.value.length > 0) {
    addEventListener("beforeunload", beforeUnloadListener, { capture: true });
  }
  else {
    removeEventListener("beforeunload", beforeUnloadListener, { capture: true, });
  }
}

function onCopyPressed() {
  resetResetButton();
  /** @type {HTMLElement | Null} */
  const logTitle = document.getElementById("log-title");
  /** @type {HTMLElement | Null} */
  const logSubtitle = document.getElementById("log-subtitle");

  let hasTitle = logTitle !== null && logTitle.innerText !== "";
  let hasSubtitle = logSubtitle !== null && logSubtitle.innerText !== "";
  let hasUnifyToggle = unifyToggle !== null;
  let hasNameToggle = nameToggle !== null;
  let log = "";

  if (isIbObEmailPage) {
    log += stroomSelector.value.toUpperCase();
    log += (stroomSelector.value.toLowerCase() === "e-mail") ?
      (" (" + document.getElementById("rn-nummer").value + ")") :
      "";
  }
  else if (hasTitle === true) {
    log += logTitle?.firstChild?.data;
  }

  if (hasNameToggle && nameToggle.checked === true)
    log += " -- " + loadedPreferences["naam"];

  if (hasUnifyToggle && unifyToggle.checked === true)
    log += " - LET OP: UNIFY KLANT!";

  if (hasSubtitle === true)
    log += "\n" + logSubtitle?.firstChild?.data;

  const enterInAntwoord = loadedPreferences["enter-in-antwoord"];
  const witregelTussenItems = loadedPreferences["witregel-tussen-items"] === "true";
  const logLegeAntwoorden = loadedPreferences["log-lege-antwoorden"] === "true";

  // console.log("Found log items:");
  // console.log(logItems);

  for (let index = 0; index < logItems.length; index++) {
    const parent = logItems[index];
    const item = parent.querySelector("input, textarea, select, text");

    if (parent.className.includes("log-newline")) {
      log += "\n";
      continue;
    }

    if ((allowPreferences && !logLegeAntwoorden && item.value === "")) {
      continue;
    }

    const copyLabel = parent.querySelector(".log-label")?.attributes?.copylabel?.value === "true";

    if (!hasTitle && !hasSubtitle && index === 0) { }
    else
      log += (allowPreferences && witregelTussenItems) ? "\n\n" : "\n";

    if (item.tagName === "TEXT") {
      log += item.innerHTML.replaceAll('<br>', "\n");
      continue;
    }

    if (copyLabel)
      log += parent.querySelector(".log-label").innerHTML;

    if (allowPreferences) {
      switch (enterInAntwoord) {
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
    else {
      log += copyLabel ? " " : "";
    }

    log += item.value;
  }

  navigator.clipboard.writeText(log).catch(error => {
    alert("Fout bij het kopiëren van de log!\nFout:  ", error);
  });
}

function onResetPressed() {
  if (resetButton.innerHTML != confirmText) {
    resetButton.innerHTML = confirmText;
    return;
  }

  resetButton.innerHTML = resetText;

  for (let index = 0; index < logItems.length; index++) {
    const input = logItems[index].querySelector("input[type=text], textarea, select")

    if (input === null) // In case the input isn't actually an input. TODO: Filter non-inputs before looping over them
      continue;

    if (input.tagName.toLowerCase() === "select") {
      input.selectedIndex = 0;
      input.dispatchEvent(new Event("change"));
    }
    else
      input.value = "";
  }

  const toggles = document.querySelectorAll("input[type=checkbox]");

  for (let index = 0; index < toggles.length; index++) {
    if (toggles[index]?.checked)
      toggles[index].click();
  }

  if (isIbObEmailPage)
    document.getElementById("rn-nummer").value = "";
}