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
// Córdoba, Extremadura, Vigo, Las Palmas de Gran Canaria y Burgos.

/**
 * Version details
 *
 * @package    local_mail
 * @copyright  2023 Proyecto UNIMOODLE
 * @author     UNIMOODLE Group (Coordinator) <direccion.area.estrategia.digital@uva.es>
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

namespace local_mail;

defined('MOODLE_INTERNAL') || die;

require_once(__DIR__ . '/testcase.php');

/**
 * @covers \local_mail\event\draft_created
 * @covers \local_mail\event\draft_deleted
 * @covers \local_mail\event\draft_updated
 * @covers \local_mail\event\draft_viewed
 * @covers \local_mail\event\message_sent
 * @covers \local_mail\event\message_viewed
 */
class event_test extends testcase {
    public function test_draft_created() {
        $generator = self::getDataGenerator();
        $course = new course($generator->create_course());
        $user = new user($generator->create_user());
        $generator->enrol_user($user->id, $course->id);
        $data = message_data::new($course, $user);
        $draft = message::create($data);
        self::setUser($user->id);

        $event = event\draft_created::create_from_message($draft);

        self::assertEquals(output\strings::get('eventdraftcreated'), event\draft_created::get_name());
        self::assertEquals(
            "The user with id '$user->id' has created the draft with id '$draft->id'.",
            $event->get_description()
        );
        self::assertEquals(
            new \moodle_url('/local/mail/view.php', ['t' => 'drafts', 'm' => $draft->id]),
            $event->get_url()
        );
        self::assertEquals(
            ['db' => 'local_mail_messages', 'restore' => 'local_mail_message'],
            event\draft_created::get_objectid_mapping()
        );
    }

    public function test_draft_deleted() {
        $generator = self::getDataGenerator();
        $course = new course($generator->create_course());
        $user = new user($generator->create_user());
        $generator->enrol_user($user->id, $course->id);
        $data = message_data::new($course, $user);
        $draft = message::create($data);
        self::setUser($user->id);

        $event = event\draft_deleted::create_from_message($draft);

        self::assertEquals(output\strings::get('eventdraftdeleted'), event\draft_deleted::get_name());
        self::assertEquals(
            "The user with id '$user->id' has deleted the draft with id '$draft->id'.",
            $event->get_description()
        );
        self::assertEquals(
            new \moodle_url('/local/mail/view.php', ['t' => 'drafts', 'm' => $draft->id]),
            $event->get_url()
        );
        self::assertEquals(
            ['db' => 'local_mail_messages', 'restore' => 'local_mail_message'],
            event\draft_deleted::get_objectid_mapping()
        );
    }

    public function test_draft_updated() {
        $generator = self::getDataGenerator();
        $course = new course($generator->create_course());
        $user = new user($generator->create_user());
        $generator->enrol_user($user->id, $course->id);
        $data = message_data::new($course, $user);
        $draft = message::create($data);
        self::setUser($user->id);

        $event = event\draft_updated::create_from_message($draft);

        self::assertEquals(output\strings::get('eventdraftupdated'), event\draft_updated::get_name());
        self::assertEquals(
            "The user with id '$user->id' has updated the draft with id '$draft->id'.",
            $event->get_description()
        );
        self::assertEquals(
            new \moodle_url('/local/mail/view.php', ['t' => 'drafts', 'm' => $draft->id]),
            $event->get_url()
        );
        self::assertEquals(
            ['db' => 'local_mail_messages', 'restore' => 'local_mail_message'],
            event\draft_updated::get_objectid_mapping()
        );
    }

    public function test_draft_viewed() {
        $generator = self::getDataGenerator();
        $course = new course($generator->create_course());
        $user = new user($generator->create_user());
        $generator->enrol_user($user->id, $course->id);
        $data = message_data::new($course, $user);
        $draft = message::create($data);
        self::setUser($user->id);

        $event = event\draft_viewed::create_from_message($draft);

        self::assertEquals(output\strings::get('eventdraftviewed'), event\draft_viewed::get_name());
        self::assertEquals(
            "The user with id '$user->id' has viewed the draft with id '$draft->id'.",
            $event->get_description()
        );
        self::assertEquals(
            new \moodle_url('/local/mail/view.php', ['t' => 'drafts', 'm' => $draft->id]),
            $event->get_url()
        );
        self::assertEquals(
            ['db' => 'local_mail_messages', 'restore' => 'local_mail_message'],
            event\draft_viewed::get_objectid_mapping()
        );
    }

    public function test_message_sent() {
        $generator = self::getDataGenerator();
        $course = new course($generator->create_course());
        $user1 = new user($generator->create_user());
        $user2 = new user($generator->create_user());
        $data = message_data::new($course, $user1);
        $data->to = [$user2];
        $data->subject = 'Subject';
        $message = message::create($data);
        $message->send(time());
        self::setUser($user1->id);

        $event = event\message_sent::create_from_message($message);

        self::assertEquals(output\strings::get('eventmessagesent'), event\message_sent::get_name());
        self::assertEquals(
            "The user with id '$user1->id' has sent the message with id '$message->id'.",
            $event->get_description()
        );
        self::assertEquals(
            new \moodle_url('/local/mail/view.php', ['t' => 'course', 'c' => $message->courseid, 'm' => $message->id]),
            $event->get_url()
        );
        self::assertEquals(
            ['db' => 'local_mail_messages', 'restore' => 'local_mail_message'],
            event\message_sent::get_objectid_mapping()
        );
    }

    public function test_message_viewed() {
        $generator = self::getDataGenerator();
        $course = new course($generator->create_course());
        $user1 = new user($generator->create_user());
        $user2 = new user($generator->create_user());
        $data = message_data::new($course, $user1);
        $data->to = [$user2];
        $data->subject = 'Subject';
        $message = message::create($data);
        $message->send(time());
        self::setUser($user2->id);

        $event = event\message_viewed::create_from_message($message);

        self::assertEquals(output\strings::get('eventmessageviewed'), event\message_viewed::get_name());
        self::assertEquals(
            "The user with id '$user2->id' has viewed the message with id '$message->id'.",
            $event->get_description()
        );
        self::assertEquals(
            new \moodle_url('/local/mail/view.php', ['t' => 'course', 'c' => $message->courseid, 'm' => $message->id]),
            $event->get_url()
        );
        self::assertEquals(
            ['db' => 'local_mail_messages', 'restore' => 'local_mail_message'],
            event\message_viewed::get_objectid_mapping()
        );
    }
}
