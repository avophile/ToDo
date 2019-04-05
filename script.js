$(document).ready(function(){
    $('.addTask').click(function(){
        var inputText = $('#inputField').val();
        $('.addedTasks .taskList').append('<li>' + inputText + '<button class="markAsDone btn btn-success">Done</button></li>');
        $('#inputField').val('');
    });

    $(document).on('click', 'markAsDone', function(){
        var inputText = this.parentNode.innertext;
        $('.doneTasks .taskList').append('<li>' + inputText + '<button class="removeTask btn btn-danger">Remove task</button></li>');
        this.parentNode.remove(); 
    });
)};