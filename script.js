$(document).ready(function() {
    $(".icon").hover(function() {
        $(this).css("height", "50px");
        $(this).css("width", "50px");
    }, function() {
        $(this).css("height", "37px");
        $(this).css("width", "37px");
    });
});


function loadRepos() {
    $("#repos").empty();
    let url = "https://api.github.com/users/SinHogarGato/repos";
    $.ajax({
        url,
        success: displayRepos,
        error: displayError
    });

    function displayRepos(respos) {
        for (let repo of respos) {
            let link = $('<a>').text(repo.full_name);
            link.attr('href', repo.html_url);
            $("#repos").append($('<li>').append(link));
        }
    }

    function displayError(err) {
        $("#repos").append($("<li>Error</li>"));
    }
}