document.getElementById('go').onclick = function() {
    var inputText = $('#text-input').val();
    var dawgifiedText = inputText + ", dawg";
    document.getElementById('input').innerHTML = dawgifiedText;
};