"use strict";class Visuals{start(){this.putTodayDate()}putTodayDate(){inputDate.value=Logic.getShortDate()}clearInputs(){inputDate.value=Logic.getShortDate(),inputDuration.value=inputSets.value=inputNotes.value="",inputRadioEndurance.checked=!1,inputRadioPower.checked=!1}showForm(){trackerEntriesContainer.style.display="none",trackerFormContainer.style.display="block"}showEntries(){trackerFormContainer.style.display="none",trackerEntriesContainer.style.display="block"}switchTabBtns(e){allTabs.forEach((e=>e.classList.remove("active"))),Array.from(allTabs).find((t=>t.innerText===e)).classList.add("active")}changeTabToEdit(e=""){if("restore"===e)return document.querySelector(".tracker__tab").innerText="Add Entry",void(trackerFormSubmitBtn.innerText="Add");document.querySelector(".tracker__tab").innerText="Edit Entry",trackerFormSubmitBtn.innerText="Edit"}renderMessage(){trackerEntriesWrapper.insertAdjacentText("afterbegin","No entries so far...")}clearEntries(){trackerEntriesWrapper.innerHTML=""}renderEntries(){0!==Logic.getAllEntries().length?(this.updateNumberEntries(),Logic.getAllEntries().slice().reverse().forEach((e=>{const t=`<div class="tracker__entry ${"Power"===e.type?"tracker__entry--power":""}" data-date-full="${new Date(e.dateFull).toISOString()}">\n                                    <div class="tracker__entry-controls">\n                                        <button class="tracker__entry-btn tracker__entry-btn--edit">Edit</button>\n                                        <button class="tracker__entry-btn tracker__entry-btn--delete">Delete</button>\n                                    </div>\n                                    <div class="tracker__entry-row">\n                                        <div class="tracker__entry-date">🗓 <span>${e.date}</span></div>\n                                        <div class="tracker__entry-type">${"Endurance"===e.type?"🏃‍♂️":"🏋️‍♀️"} <span>${e.type}</span></div>\n                                        <div class="tracker__entry-duration">🕐 <span>${e.duration} min</span></div>\n                                        <div class="tracker__entry-sets">🔁 <span>${e.sets} ${e.sets>1?"rounds":"round"}</span></div>\n                                    </div>\n                                    <div class="tracker__entry-notes">${e.notes}</div>\n                                </div>`;trackerEntriesWrapper.insertAdjacentHTML("beforeend",t)}))):this.renderMessage()}removeEntry(e){e.target.closest(".tracker__entry").remove()}updateNumberEntries(){entriesNumber.innerText=Logic.getAllEntries().length}activateEditing(e){const{dateFull:t,date:r,type:n,duration:a,sets:s,notes:i}=e;inputDate.value=r,inputDuration.value=a,inputSets.value=s,inputNotes.value=i.replace(/<br>/g,"\n"),"Endurance"===n?inputRadioEndurance.checked=!0:"Power"===n&&(inputRadioPower.checked=!0),inputNotes.focus()}}