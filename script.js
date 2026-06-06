let myLeads = []
let myLeadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
if (myLeadsFromLocalStorage) {
    myLeads = myLeadsFromLocalStorage
    render()
}


const inputEl = document.getElementById("inputField")
const inputBtn = document.getElementById("sendButton")
const clearBtn = document.getElementById("clearButton")

clearBtn.addEventListener("click", function() {
    localStorage.removeItem("myLeads")
    myLeads = []
    render()
})

function render() {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        listItems += `
        <li>
        <a href="${myLeads[i]}" target = "_blank">${myLeads[i]}
        </a>
        </li>`
    }


    document.getElementById("output").innerHTML = listItems
}

inputBtn.addEventListener("click", function() {
    let lead = inputEl.value.trim()
    if (lead == "") {
        document.getElementById("output").innerText = "Invalid"
        return
    }
    
    myLeads.push(lead)
    localStorage.setItem("myLeads", 
        JSON.stringify(myLeads)
    )
    render()
    inputEl.value = ""
})

