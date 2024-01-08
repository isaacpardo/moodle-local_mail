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
import View from './components/View.svelte';
import type { Preferences, Settings, Strings } from './lib/state';
import { createStore } from './lib/store';

import './global.css';

async function init() {
    const viewTarget = document.getElementById('local-mail-view');
    const navbarTarget = document.getElementById('local-mail-navbar');

    // Get initial data from script tag.
    const data = window.local_mail_view_data;
    if (!data) {
        return;
    }

    const store = await createStore({
        userid: data.userid as number,
        settings: data.settings as Settings,
        preferences: data.preferences as Preferences,
        strings: data.strings as Strings,
        mobile: Boolean(data.mobile),
    });

    if (viewTarget) {
        new View({ target: viewTarget, props: { store } });
    }

    if (navbarTarget) {
        // Remove fallback link created in local_mail_render_navbar_output.
        navbarTarget.innerHTML = '';

        // Instantiate Navbar component with current store data.
        const state = store.get();
        const navbar = new Navbar({
            target: navbarTarget,
            props: {
                settings: state.settings,
                strings: state.strings,
                courses: state.courses,
                labels: state.labels,
                params: state.params,
                onClick: store.navigate,
                onComposeClick: store.createMessage,
                onCourseChange: store.selectCourse,
            },
        });

        // Update properties when store data changes.
        store.subscribe((state) => {
            navbar.$set({
                settings: state.settings,
                strings: state.strings,
                courses: state.courses,
                labels: state.labels,
                params: state.params,
            });
        });
    }
}

init();
