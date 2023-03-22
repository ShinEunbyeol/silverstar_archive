<?php 
namespace App\Classes;

class Date {
    public $date;

    function Date(int $date) {
        $this->date = date("Y-m-d H:i:s", $date);
    }
}
?>