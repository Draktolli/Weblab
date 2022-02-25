let check_name = false;
let check_num = false;
let check_quality = false;
let check_sugg = false;
let first_load = true;

function showAppointment() {
    let appointments = JSON.parse(localStorage.getItem('appoint'));
    let appointment_field = document.getElementById('appointments_field');
    let out = '';
    for (let item in appointments) {
        out += '<tr>'
        if (check_name)
            out += '<td class="table-secondary">' + appointments[item].name + '</td>'
        if (check_num)
            out += '<td class="table-secondary">' + appointments[item].num + '</td>'
        if (check_quality)
            out += '<td class="table-secondary">' + appointments[item].quality + '</td>'
        if (check_sugg)
            out += '<td class="table-secondary">' + appointments[item].sugg + '</td>'
        out += '</tr>'
        appointment_field.innerHTML = out;
    }
}
document.getElementById("table_add").addEventListener('click', function (event) {
    event.defaultPrevented;
    if (document.getElementById('check_name').checked)
        check_name = true;
    if (document.getElementById('check_num').checked)
        check_num = true;
    if (document.getElementById('check_quality').checked)
        check_quality = true;
    if (document.getElementById('check_sugg').checked)
        check_sugg = true;
    let checkboxField = document.getElementById('delete');
    let columnsTable_field = document.getElementById('columnsTable_field');
    let out = ''
    if (check_name)
        out += '<th scope="col">Название предмета</th>'
    if (check_num)
        out += '<th scope="col">Количество</th>'
    if (check_quality)
        out += '<th scope="col">Качество</th>'
    if (check_sugg)
        out += '<th scope="col">Пожелания</th>'
    columnsTable_field.innerHTML = out;
    checkboxField.innerHTML = '';
    first_load = false;
    showAppointment();
});

document.getElementById("appointment_add").addEventListener('click', function (event) {
    event.defaultPrevented;
    let appointment = {
        name: document.getElementById('name').value,
        num: document.getElementById('num').value,
        quality: document.getElementById('quality').value,
        sugg: document.getElementById('sugg').value,
    }
    let appointments = [];
    if (localStorage.getItem("appoint") !== null) {
        appointments = JSON.parse(localStorage.getItem('appoint'));
    }
    appointments.push(appointment);
    localStorage.setItem('appoint', JSON.stringify(appointments));
    if (!first_load) {
        showAppointment();
    }
});