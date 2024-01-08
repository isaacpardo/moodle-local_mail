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
 * @copyright  2023 Proyecto UNIMOODLE
 * @author     UNIMOODLE Group (Coordinator) <direccion.area.estrategia.digital@uva.es>
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

import Navbar from './components/Navbar.svelte';
import UserListSendButton from './components/UserListSendButton.svelte';
import UserProfileSendButton from './components/UserProfileSendButton.svelte';
import type { Course, Label, Settings, Strings, ViewParams } from './lib/state';
import { createUrl, viewUrl } from './lib/url';
import './global.css';

async function init() {
    // Get needed data from script tag, to avoid doing web service requests.
    const data = window.local_mail_navbar_data;
    if (!data) {
        return;
    }

    initNavbar(data);

    const url = window.location.origin + window.location.pathname;
    const params = new URLSearchParams(window.location.search);

    if (url == window.M.cfg.wwwroot + '/user/view.php') {
        initUserProfile(
            data,
            parseInt(params.get('id') || ''),
            parseInt(params.get('course') || ''),
        );
    } else if (url == window.M.cfg.wwwroot + '/user/index.php') {
        initUserList(data, parseInt(params.get('id') || ''));
    } else if (url == window.M.cfg.wwwroot + '/blocks/completion_progress/overview.php') {
        initUserList(data, parseInt(params.get('courseid') || ''));
    }
}

function initNavbar(data: Record<string, unknown>) {
    const target = document.getElementById('local-mail-navbar');
    if (target) {
        // Remove fallback link created in local_mail_render_navbar_output.
        target.innerHTML = '';

        const navbar = new Navbar({
            target,
            props: {
                settings: data.settings as Settings,
                strings: data.strings as Strings,
                courses: data.courses as Course[],
                labels: data.labels as Label[],
                params: { courseid: data.courseid as number },
                onClick: (params: ViewParams) => {
                    window.location.href = viewUrl(params);
                },
                onComposeClick: (courseid: number) => {
                    window.location.href = createUrl(courseid);
                },
                onCourseChange: (courseid?: number) => {
                    navbar.$set({ params: { courseid } });
                },
            },
        });
    }
}

function initUserList(data: Record<string, unknown>, courseid: number) {
    const target = document.querySelector('#formactionid')?.parentElement;
    const form = document.querySelector('#participantsform') as HTMLFormElement;
    if (courseid && target && form) {
        new UserListSendButton({
            target,
            props: {
                userid: data.userid as number,
                strings: data.strings as Strings,
                courses: data.courses as Course[],
                courseid,
                form: document.querySelector('#participantsform') as HTMLFormElement,
            },
        });
    }
}

function initUserProfile(data: Record<string, unknown>, id: number, courseid: number) {
    const header = document.querySelector('.userprofile .page-context-header');
    if (id && courseid && header) {
        let target = header.querySelector('.header-button-group');
        if (!target) {
            target = document.createElement('div');
            target.classList.add('btn-group', 'header-button-group');
            header.append(target);
        }
        new UserProfileSendButton({
            target,
            props: {
                userid: data.userid as number,
                strings: data.strings as Strings,
                courses: data.courses as Course[],
                id,
                courseid,
            },
        });
    }
}

init();
