<!--
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
-->
<svelte:options immutable={true} />

<script lang="ts">
    import { onDestroy, onMount } from 'svelte';
    import { require, type CorePubSub } from '../lib/amd';
    import type { Course, Strings } from '../lib/state';
    import { createUrl } from '../lib/url';

    export let strings: Strings;
    export let courses: ReadonlyArray<Course>;
    export let userid: number;
    export let courseid: number;
    export let form: HTMLFormElement;

    $: course = courses.find((course) => course.id == courseid);
    let recipients: number[] = [];

    onMount(async () => {
        const pubsub = (await require('core/pubsub')) as CorePubSub;
        pubsub.subscribe('core/checkbox-toggleall:checkboxToggled', updateRecipients);
        updateRecipients();
    });

    onDestroy(async () => {
        const pubsub = (await require('core/pubsub')) as CorePubSub;
        pubsub.unsubscribe('core/checkbox-toggleall:checkboxToggled', updateRecipients);
    });

    const updateRecipients = async () => {
        recipients = [];
        const formData = new FormData(form);
        for (const name of formData.keys()) {
            const match = /^user(\d+)$/.exec(name);
            if (match) {
                const id = parseInt(match[1]);
                if (id != userid) {
                    recipients.push(id);
                }
            }
        }
    };
</script>

{#if course}
    <div class="btn-group ml-3">
        <button
            type="button"
            class="btn btn-outline-secondary text-dark bg-white dropdown-toggle"
            data-toggle="dropdown"
            aria-expanded="false"
            disabled={!recipients.length}
        >
            <i class="fa fa-envelope-o mr-1" aria-hidden="true" />
            {strings.sendmail}
        </button>
        <div class="dropdown-menu">
            {#each ['to', 'cc', 'bcc'] as role (role)}
                <a class="dropdown-item" href={createUrl(course.id, recipients, role)}>
                    {strings[role]}
                </a>
            {/each}
        </div>
    </div>
{/if}
