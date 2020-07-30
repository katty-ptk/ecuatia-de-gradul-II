
/*
I -> x = -b + sqrt(b^2 -4ac) / 2a // 
II -> x = -b - sqrt(b^2 - 4ac) / 2a // 
*/

$("#submit-btn").click(function (event) {
    event.preventDefault();

    $first_num = parseInt($("#first_Num").val());
    $second_num = parseInt($("#second_Num").val());
    $third_num = parseInt($("#third_Num").val());

    if (isNaN($first_num) || isNaN($second_num) || isNaN($third_num)){
        $error_text = '<p id="error-text">Te rog introdu numere. :)</p>';
        $("body").append($error_text);
    } else {

        $x_1 = parseInt(-$second_num + Math.sqrt(Math.pow($second_num, 2) - 4 * ($first_num * $third_num)) / 2 * $first_num).toFixed(0);
        $x_2 = parseInt(-$second_num - Math.sqrt(Math.pow($second_num, 2) - 4 * ($first_num * $third_num)) / 2 * $first_num).toFixed(0);

        if(isNaN($x_1) || isNaN($x_2)) {
            $isNanText = '<p id="resultNan">Rezultatul calculului este o eroare.</p>';
            $("body").append($isNanText);
           return false;
        }

        $result = document.createElement('div');
        $x_1_par = document.createElement('p');
        $x_1_par.textContent = "x1 = " + $x_1;

        $x_2_par = document.createElement('p');
        $x_2_par.textContent = "x2 = " + $x_2;

        $result.append($x_1_par); $result.append($x_2_par);
        $(".result").html($result);

        console.log($x_1_par)

        // console.log("x_1 = " + parseInt($x_1.toFixed(0)));
        // console.log("x_2 = " + parseInt($x_2).toFixed(0));
    }

    // alert($first_num + $second_num - $third_num);

    // alert('1)')
});

// alert(-3 + Math.sqrt(Math.pow(3, 2) - 4 * (5 * 2)));