// Remove button
$(document).ready(function() {
    $(".remove-btn").click(function() {
      $(this).closest("tr").remove();
    });
  });

