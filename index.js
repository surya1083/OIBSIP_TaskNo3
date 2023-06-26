
function creatependingtask(title, content, date, dn, dm) {
    const pbox = document.querySelector(".pendingbox");
    const ptask = document.createElement("div");
    ptask.classList.add("pendingtask");
    pbox.appendChild(ptask);
    const pmain = document.createElement("div");
    pmain.setAttribute("onclick", "displaycontent()");
    ptask.appendChild(pmain);
    pmain.classList.add("pendingtaskmain");
    pmain.setAttribute('id', dn);
    const ptitle1 = document.createElement("span");
    ptitle1.classList.add("pendingtasktitle");
    pmain.appendChild(ptitle1);
    const ptitle2 = document.createElement("b");
    ptitle2.classList.add("ptitle");
    ptitle2.innerHTML = title;
    ptitle1.appendChild(ptitle2);
    const pdate = document.createElement("span");
    pdate.classList.add("pendingtaskdate");
    pmain.appendChild(pdate);
    pdate.innerHTML = "DATE : ";
    const pdate1 = document.createElement("span");
    pdate1.classList.add("pendingtaskdatee");
    pdate.appendChild(pdate1);
    pdate1.innerHTML = date;
    const pcontent = document.createElement("div");
    pcontent.classList.add("pendingtaskcontent");
    ptask.appendChild(pcontent);
    const ponlycontent = document.createElement("div");
    ponlycontent.classList.add("pendingtaskonlycontent")
    pcontent.appendChild(ponlycontent);
    ponlycontent.innerHTML = content;
    const pbuttons = document.createElement("div");
    pbuttons.classList.add("pendingbuttons");
    pcontent.appendChild(pbuttons);
    const pedit = document.createElement("button");
    const pdelete = document.createElement("button");
    const pcomplete = document.createElement("button");
    var editdm = "e"+dm;
    var deletedm = "d"+dm;
    var completedm = "c"+dm;
    pedit.setAttribute('id', editdm);
    pedit.setAttribute("onclick", "editcontent()");
    pdelete.setAttribute('id', deletedm);
    pdelete.setAttribute("onclick", "deletecontent()");
    pcomplete.setAttribute('id', completedm);
    pcomplete.setAttribute("onclick", "completecontent()")
    pedit.classList.add("edit");
    pdelete.classList.add("delete");
    pcomplete.classList.add("complete");
    pedit.innerHTML = "Edit";
    pdelete.innerHTML = "Delete";
    pcomplete.innerHTML = "Completed";
    pbuttons.appendChild(pedit);
    pbuttons.appendChild(pdelete);
    pbuttons.appendChild(pcomplete);
}

var n = 'a';
var m = 'b';

var ec;

var isnew = true;

function handleclick() {
    const intitle = document.getElementById('inputtitle');
    const incontent = document.getElementById('inputcontent');
    const indate = document.getElementById('inputdate');
    if(intitle.value === ""){
        alert("Enter the title of the Task");
        return;
    }
    if(incontent.value === ""){
        alert("Enter the content of the Task");
        return;
    }
    if(indate.value === ""){
        alert("Enter the deadline of the Task");
        return;
    }
    if(isnew){
    n += 'a';
    m += 'b';
    var dm = m;
    var dn = n;
    const title = document.querySelector(".newtasktitleinput").value;
    const content = document.querySelector(".taskcontent").value;
    const date = document.querySelector(".taskdate").value;
    // console.log(pendingtitle.html, title.value, content.value, date.value);
    creatependingtask(title, content, date, dn, dm);
    }
    else {
        ec.parentElement.parentElement.parentElement.children[0].children[0].children[0].innerHTML = document.getElementById('inputtitle').value;
        ec.parentElement.parentElement.children[0].innerHTML = document.getElementById('inputcontent').value;
        ec.parentElement.parentElement.parentElement.children[0].children[1].children[0].innerHTML = document.getElementById('inputdate').value;
        isnew = true;
    }
    intitle.value = "";
    incontent.value = "";
    indate.value = "";
}


function displaycontent(e) {
    e = e || window.event;
    var target = e.target || e.srcElement;
    const pc = document.querySelector(`#${target.id}`);
    if(pc.parentElement.children[1].style.display === 'block'){
        pc.parentElement.children[1].style.display = 'none';
        pc.classList.remove("borderradiusclass");
    }
    else{
        pc.parentElement.children[1].style.display = 'block';
        pc.classList.add("borderradiusclass");
    }
}

function editcontent(e) {
    e = e || window.event;
    var target = e.target || e.srcElement;
    ec = document.querySelector(`#${target.id}`);
    isnew = false;
    document.getElementById('inputtitle').value = ec.parentElement.parentElement.parentElement.children[0].children[0].children[0].innerHTML;
    document.getElementById('inputcontent').value = ec.parentElement.parentElement.children[0].innerHTML;
    document.getElementById('inputdate').value = ec.parentElement.parentElement.parentElement.children[0].children[1].children[0].innerHTML;
}

function deletecontent(e) {
    e = e || window.event;
    var target = e.target || e.srcElement;
    dc = document.querySelector(`#${target.id}`);
    const dcc = dc.parentElement.parentElement.parentElement;
    dcc.removeChild(dcc.firstElementChild);
    dcc.removeChild(dcc.lastElementChild);
}

function completecontent(e) {
    m += 'c';
    n += 'v';
    const cdm = m;
    const cdn = n;
    e = e || window.event;
    var target = e.target || e.srcElement;
    cc = document.querySelector(`#${target.id}`);
    const ccc = cc.parentElement.parentElement.parentElement;
    const cctitle = cc.parentElement.parentElement.parentElement.children[0].children[0].children[0].innerHTML;
    const cccontent = cc.parentElement.parentElement.children[0].innerHTML;
    const ccdate = cc.parentElement.parentElement.parentElement.children[0].children[1].children[0].innerHTML;
    createcompletedtask(cctitle, cccontent, ccdate, cdm, cdn);
    deletecontent();
}

function createcompletedtask(title, content, date, cdm, cdn){
    const cbox = document.querySelector(".completedbox");
    const ctask = document.createElement("div");
    ctask.classList.add("completedtask");
    cbox.appendChild(ctask);
    const cmain = document.createElement("div");
    cmain.setAttribute("onclick", "displaycontent()");
    ctask.appendChild(cmain);
    cmain.classList.add("completedtaskmain");
    cmain.setAttribute('id', cdn);
    const ctitle1 = document.createElement("span");
    ctitle1.classList.add("completedtasktitle");
    cmain.appendChild(ctitle1);
    const ctitle2 = document.createElement("b");
    ctitle2.innerHTML = title;
    ctitle1.appendChild(ctitle2);
    const cdate = document.createElement("span");
    cdate.classList.add("completedtaskdate");
    cmain.appendChild(cdate);
    cdate.innerHTML = "DATE : ";
    const cdate1 = document.createElement("span");
    cdate.appendChild(cdate1);
    cdate1.innerHTML = date;
    const ccontent = document.createElement("div");
    ccontent.classList.add("completedtaskcontent");
    ctask.appendChild(ccontent);
    const conlycontent = document.createElement("div");
    conlycontent.classList.add("completedtaskonlycontent")
    ccontent.appendChild(conlycontent);
    conlycontent.innerHTML = content;
    const cbuttons = document.createElement("div");
    cbuttons.classList.add("completedbuttons");
    ccontent.appendChild(cbuttons);
    const cdelete = document.createElement("button");
    var cdeletedm = "d"+cdm;
    cdelete.setAttribute('id', cdeletedm);
    cdelete.setAttribute("onclick", "deletecontent()");
    cdelete.classList.add("delete");
    cdelete.innerHTML = "Delete";
    cbuttons.appendChild(cdelete);
}