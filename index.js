console.log("Library");

let btn = document.getElementById('mybtn');

btn.addEventListener('click', display);
function display(e) {
    e.preventDefault();
    let name = document.getElementById('myName').value;

    let author = document.getElementById('myAuthor').value;


    let fiction = document.getElementById('myfiction');
    let computer = document.getElementById('mycomputer');
    let cooking = document.getElementById('mycooking');


    let type;
    if (fiction.checked) {
        type = fiction.value;
    }
    else if (computer.checked) {
        type = computer.value;
    }
    else if (cooking.checked) {
        type = cooking.value;
    }

    let tr = document.getElementById('mybody');

    let j = 1;

    let html = "";
    html += `
    <tr>
    <td scope="row">${j++}</td>
    <td scope="row">${name}</td>
    <td scope="row">${author}</td>
    <td scope="row">${type}</td>
    </tr>
    `
    j++;

    tr.innerHTML = tr.innerHTML + html;

    let form = document.getElementById('libraryform');
    // console.log(form);
    form.reset();

    // btn.addEventListener('click',function(){
    //     for(let i=0;i<3;i++){
    //     tr.innerHTML=html};
    // });

}