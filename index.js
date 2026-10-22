$(document).ready(function() {
    let commentCount = 0;

    $('#post-btn').click(function() {
        const commentText = $('#comment-box').val(); // get value of the comment box
        
        // creates alert box if comment box is empty
        if (commentText === "") {
            alert("Empty!");
            return;
        }

        const newComment = $('<p class="comment"></p>').text(commentText); // creates new p tag per comment

        $('#comment-list').append(newComment); // adds new comment to the comment-list div

        commentCount++; // increment comment counter
        $('#counter').text("Total Comments: " + commentCount); // updates the counter 

        $('#comment-box').val(''); // sets comment box value to blank after comment is posted
    });
});
