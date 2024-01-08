<?php
// This file is part of Moodle - http://moodle.org/
//
// Moodle is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Moodle is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Moodle.  If not, see <http://www.gnu.org/licenses/>.
// Project implemented by the "Recovery, Transformation and Resilience Plan.
// Funded by the European Union - Next GenerationEU".
//
// Produced by the UNIMOODLE University Group: Universities of
// Valladolid, Complutense de Madrid, UPV/EHU, León, Salamanca,
// Illes Balears, Valencia, Rey Juan Carlos, La Laguna, Zaragoza, Málaga,
// Córdoba, Extremadura, Vigo, Las Palmas de Gran Canaria y Burgos

/**
 * Version details
 *
 * @package    local_mail
 * @copyright  2012-2013 Institut Obert de Catalunya <https://ioc.gencat.cat>
 * @copyright  2014-2017 Marc Català <reskit@gmail.com>
 * @copyright  2023 Proyecto UNIMOODLE
 * @author     UNIMOODLE Group (Coordinator) <direccion.area.estrategia.digital@uva.es>
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

use local_mail\course;
use local_mail\message;
use local_mail\message_data;
use local_mail\user;

require_once('../../config.php');

$courseid = required_param('course', PARAM_INT);
$recipients = optional_param('recipients', '', PARAM_SEQUENCE);
$role = optional_param('role', 'to', PARAM_ALPHA);

require_login($courseid, false);
require_sesskey();

// Setup page.
$url = new moodle_url('/local/mail/create.php');
$PAGE->set_url($url);
$PAGE->set_pagelayout('base');

// Check permission.
$user = user::current();
$course = course::get($courseid);
if (!$user->can_use_mail($course)) {
    throw new exception('errorcoursenotfound', $courseid);
}

// Create message.
$data = message_data::new($course, $user);
if ($recipients) {
    $role = in_array($role, ['to', 'cc', 'bcc']) ? $role : 'to';
    $data->$role = user::get_many(explode(',', $recipients));
}
$message = message::create($data);

// Redirect to message form.
redirect(new moodle_url('/local/mail/view.php', ['t' => 'drafts', 'c' => $course->id, 'm' => $message->id]));
