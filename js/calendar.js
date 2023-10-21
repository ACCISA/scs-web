const calendarShow = () => {
    if (document.getElementById('svg_type').getAttribute('d') == "M4.5 15.75l7.5-7.5 7.5 7.5"){
        document.getElementById("svg_type").setAttribute('d',"M19.5 8.25l-7.5 7.5-7.5-7.5")
        document.getElementById("holder").style.display = 'inline'
    } else {
        document.getElementById("svg_type").setAttribute('d',"M4.5 15.75l7.5-7.5 7.5 7.5")
        document.getElementById("holder").style.display = 'none'
    }
}