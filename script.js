var createNewElement = (elementName) =>{
    return document.createElement(elementName)
}

var setAttributes = (elementName,attributeNameValuePair)=>{
    Object.keys(attributeNameValuePair).forEach((attributeName)=>{
        elementName.setAttribute(attributeName,attributeNameValuePair[attributeName])
    })
}
    

var containerElement = createNewElement("div")
setAttributes(containerElement,{
    class:"col-sm-4 offset-sm-4 col-md-4 offset-md-4 col-lg-4 offset-lg-4 col-xl-4 offset-xl-4 mt-5"
})

var tableContainerElement = createNewElement("div")
setAttributes(tableContainerElement,{
    class:"table-responsive-sm table-responsive-md table-responsive-ld table-responsive-xl",
    style:"overflow:visible !important;"
})

var tableElement = createNewElement("table")
setAttributes(tableElement,{
    class:"table table-striped table-dark table-my-style"
})

var inputRowElement = createNewElement("tr")
var inputDataElement = createNewElement("td")
setAttributes(inputDataElement,{colspan:"4"})

var inputDisplayElement = createNewElement("input")
setAttributes(inputDisplayElement,{
    type:"text",
    class:"form-control",
    id:"input-area"
})
inputDisplayElement.addEventListener("keyup",onKeyPress)

var buttonsRowElements = []

for(var i=0;i<5;i++){
    buttonsRowElements[i] = createNewElement("tr")
}

var acButtonElement = createNewElement("td")
setAttributes(acButtonElement,{
    class:"color text-center p-0",
    style:"cursor:pointer"
})
acButtonElement.innerText = "AC"
acButtonElement.addEventListener("click",clearOrRemoveData)

var deleteButtonElement = createNewElement("td")
setAttributes(deleteButtonElement,{
    class:"color text-center p-0",
    style:"cursor:pointer"
})
deleteButtonElement.innerHTML = `<i class="fa fa-eraser" aria-hidden="true"> </i>`
deleteButtonElement.addEventListener("click",clearOrRemoveData)

var modulusButtonElement = createNewElement("td")
setAttributes(modulusButtonElement,{
    class:"color text-center p-0",
    style:"cursor:pointer"
})
modulusButtonElement.innerText = "%"
modulusButtonElement.addEventListener("click",toInput)

var divisionButtonElement = createNewElement("td")
setAttributes(divisionButtonElement,{
    class:"color text-center p-0",
    style:"cursor:pointer"
})
divisionButtonElement.innerText = "/"
divisionButtonElement.addEventListener("click",toInput)

var sevenButtonElement = createNewElement("td")
setAttributes(sevenButtonElement,{
    class:"text-white text-center p-0",
    style:"cursor:pointer"
})
sevenButtonElement.innerText = "7"
sevenButtonElement.addEventListener("click",toInput)

var eightButtonElement = createNewElement("td")
setAttributes(eightButtonElement,{
    class:"text-white text-center p-0",
    style:"cursor:pointer"
})
eightButtonElement.innerText = "8"
eightButtonElement.addEventListener("click",toInput)

var nineButtonElement = createNewElement("td")
setAttributes(nineButtonElement,{
    class:"text-white text-center p-0",
    style:"cursor:pointer"
})
nineButtonElement.innerText = "9"
nineButtonElement.addEventListener("click",toInput)

var multiplyButtonElement = createNewElement("td")
setAttributes(multiplyButtonElement,{
    class:"color text-center p-0",
    style:"cursor:pointer"
})
multiplyButtonElement.innerText = "X"
multiplyButtonElement.addEventListener("click",toInput)

var fourButtonElement = createNewElement("td")
setAttributes(fourButtonElement,{
    class:"text-white text-center p-0",
    style:"cursor:pointer"
})
fourButtonElement.innerText = "4"
fourButtonElement.addEventListener("click",toInput)

var fiveButtonElement = createNewElement("td")
setAttributes(fiveButtonElement,{
    class:"text-white text-center p-0",
    style:"cursor:pointer"
})
fiveButtonElement.innerText = "5"
fiveButtonElement.addEventListener("click",toInput)

var sixButtonElement = createNewElement("td")
setAttributes(sixButtonElement,{
    class:"text-white text-center p-0",
    style:"cursor:pointer"
})
sixButtonElement.innerText = "6"
sixButtonElement.addEventListener("click",toInput)

var subButtonElement = createNewElement("td")
setAttributes(subButtonElement,{
    class:"color text-center p-0",
    style:"cursor:pointer"
})
subButtonElement.innerText = "-"
subButtonElement.addEventListener("click",toInput)

var oneButtonElement = createNewElement("td")
setAttributes(oneButtonElement,{
    class:"text-white text-center p-0",
    style:"cursor:pointer"
})
oneButtonElement.innerText = "1"
oneButtonElement.addEventListener("click",toInput)

var twoButtonElement = createNewElement("td")
setAttributes(twoButtonElement,{
    class:"text-white text-center p-0",
    style:"cursor:pointer"
})
twoButtonElement.innerText = "2"
twoButtonElement.addEventListener("click",toInput)

var threeButtonElement = createNewElement("td")
setAttributes(threeButtonElement,{
    class:"text-white text-center p-0",
    style:"cursor:pointer"
})
threeButtonElement.innerText = "3"
threeButtonElement.addEventListener("click",toInput)

var addButtonElement = createNewElement("td")
setAttributes(addButtonElement,{
    class:"color text-center p-0",
    style:"cursor:pointer"
})
addButtonElement.innerText = "+"
addButtonElement.addEventListener("click",toInput)

var memoryButtonElement = createNewElement("td")
setAttributes(memoryButtonElement,{
    class:"color text-center p-0 dropdown",
    style:"cursor:pointer"
})
memoryButtonElement.innerText = "M"

var memoryDropDownElement = createNewElement("span")
setAttributes(memoryDropDownElement,{
    class:"dropdown-content color text-center bg-dark",
    style:"border-radius: 20px; font-size: 20px;"
})

var memoryAddButtonElement = createNewElement("p")
memoryAddButtonElement.innerText = "M+"
memoryAddButtonElement.addEventListener("click",memoryActions)

var memoryRecallButtonElement = createNewElement("p")
memoryRecallButtonElement.innerText = "MR"
memoryRecallButtonElement.addEventListener("click",memoryActions)

var memoryClearButtonElement = createNewElement("p")
memoryClearButtonElement.innerText = "MC"
memoryClearButtonElement.addEventListener("click",memoryActions)

var memoryStoreButtonElement = createNewElement("p")
memoryStoreButtonElement.innerText = "MS"
memoryStoreButtonElement.addEventListener("click",memoryActions)

var zeroButtonElement = createNewElement("td")
setAttributes(zeroButtonElement,{
    class:"text-white text-center p-0",
    style:"cursor:pointer"
})
zeroButtonElement.innerText = "0"
zeroButtonElement.addEventListener("click",toInput)

var pointButtonElement = createNewElement("td")
setAttributes(pointButtonElement,{
    class:"text-white text-center p-0",
    style:"cursor:pointer"
})
pointButtonElement.innerText = "."
pointButtonElement.addEventListener("click",toInput)

var evalButtonElement = createNewElement("td")
setAttributes(evalButtonElement,{
    class:"color text-center p-0",
    style:"cursor:pointer"
})
evalButtonElement.innerText = "="
evalButtonElement.addEventListener("click",eval)


var inputData = ""

function onKeyPress(event){
    var key = event.key
    if(['0','1','2','3','4','5','6','7','8','9','+','-','*','/','%',"Enter","Backspace","Shift"].indexOf(key)==-1){
        alert("Only numbers are allowed")
        inputData = ""
        document.querySelector("input").value = ""
        return
    }
    inputData = event.target.value
    if(event.keyCode === 13){
        eval();
    }

}

function toInput(event){
    var value = event.target.innerText
    inputData += value
    document.querySelector("input").value = inputData
}

function clearOrRemoveData(event){
    if(event.target.innerText === "AC" && inputData!==""){
        document.querySelector("input").value = ""
        inputData = ""
    }
    inputData = document.querySelector("input").value
    if(event.target.innerText==="" && inputData!==""){
        inputData = inputData.slice(0,inputData.length-1)
        document.querySelector("input").value = inputData
    }
}

var result = 0




function eval(){

    var input1,input2,flag=0

    for(var i=0;i<inputData.length;i++){

        if(i===0 && inputData[i]==="+"){
            inputData = inputData.slice(i+1)
            console.log(inputData)
        }
        else if(i===0 && inputData[i]==="-"){
            inputData = inputData.slice(i+1)
            flag = 1
        }
        else if(["+","-","X","*","/","%"].some((operators)=>{return operators===inputData[i]}) && i!==0 ){
            input1 = parse(inputData.slice(0,i))
            input2 = parse(inputData.slice(i+1))
            break;
        }
    }

    if(i===inputData.length){
        result = document.querySelector("#input-area").value
    }

    if(flag===1){
        input1 = -1*input1
    }

    if(inputData[i]==="+"){
        result = input1 + input2
    }
    if(inputData[i]==="-"){
        result = input1 - input2
    }
    if(inputData[i]==="X" || inputData[i]==="*"){
        result = input1 * input2
    }
    if(inputData[i]==="/"){
        result = input1 / input2
    }
    if(inputData[i]==="%"){
        result = input1 % input2
    }
    document.querySelector("#input-area").value = result
    inputData = result
}

function parse(data){
    if(data.indexOf(".")===-1){
        return parseInt(data)
    }
    else{
        return parseFloat(data)
    }
}

var memory = 0
var count = 0

function memoryActions(event){
    var targetName = event.target.innerText
    if(targetName === "MC"){
        memory = 0
        document.querySelector("#input-area").value = 0
        inputData = document.querySelector("#input-area").value
        localStorage.setItem(`memory-value-${++count}`,memory)
    }
    if(targetName === "MR"){
        document.querySelector("#input-area").value = memory
        inputData = document.querySelector("#input-area").value
    }
    if(targetName === "M+"){
        memory = parseInt(document.querySelector("#input-area").value) + memory
        document.querySelector("#input-area").value = memory
        localStorage.setItem(`memory-value-${++count}`,memory)
    }
    if(targetName === "MS"){
        memory = result
        inputData = document.querySelector("#input-area").value
        localStorage.setItem(`memory-value-${++count}`,memory)
    }
}


document.body.append(containerElement)
containerElement.append(tableContainerElement)
tableContainerElement.append(tableElement)
tableElement.append(inputRowElement,...buttonsRowElements)
inputRowElement.append(inputDataElement)
inputDataElement.append(inputDisplayElement)
buttonsRowElements[0].append(acButtonElement,deleteButtonElement,modulusButtonElement,divisionButtonElement)
buttonsRowElements[1].append(sevenButtonElement,eightButtonElement,nineButtonElement,multiplyButtonElement)
buttonsRowElements[2].append(fourButtonElement,fiveButtonElement,sixButtonElement,subButtonElement)
buttonsRowElements[3].append(oneButtonElement,twoButtonElement,threeButtonElement,addButtonElement)
buttonsRowElements[4].append(memoryButtonElement,zeroButtonElement,pointButtonElement,evalButtonElement)
memoryButtonElement.append(memoryDropDownElement)
memoryDropDownElement.append(memoryAddButtonElement,memoryRecallButtonElement,memoryStoreButtonElement,memoryClearButtonElement)