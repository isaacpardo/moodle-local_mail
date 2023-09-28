<?php
/*
 * SPDX-FileCopyrightText: 2014 Marc Català <reskit@gmail.com>
 * SPDX-FileCopyrightText: 2023 SEIDOR <https://www.seidor.com>
 *
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

 namespace local_mail;

/**
 * Event observer for local_mail.
 */
class observer {

    /**
     * Triggered via course_deleted event.
     *
     * @param \core\event\course_deleted $event
     */
    public static function course_deleted(\core\event\course_deleted $event) {
        message::delete_course($event->get_context());
    }
}
