   $(document).ready(function () {
       $("#rsvpbtn").click(function () {
           $("#rsvpform").submit();
       });
   });

   $('#guests').on('change', function () {
       var total = $(this).val();
       var output = '';
       for (i = 0; i < total; i++) {
           console.log("he");
           output += '<label for="guest' + i + '">Guest ' + (i + 1) + ' Food Preference</label> <br>     <select class="form-control" name="guest' + i + '"><option>None</option><option>Food 1</option><option>Food 2</option><option>Food 3</option></select>'
       }
       $('#guestsfood').empty().append(output);
   });