<?php

namespace App\Service;

use DateTime;

class UserService 
{
    public function getAgeFromDOB(DateTime $date) {
        $today = new DateTime(date('m.d.y'));
        return $today->diff($date);
    }
}