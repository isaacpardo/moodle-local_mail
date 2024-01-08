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
    import type { Reference, Strings } from '../lib/state';
    import MessageAttachments from './MessageAttachments.svelte';
    import UserPicture from './UserPicture.svelte';

    export let strings: Strings;
    export let reference: Reference;
</script>

<div class="card mb-4">
    <div class="card-body p-3 px-xl-4">
        <h5 class="h5 card-title mb-3">
            {reference.subject}
        </h5>
        <div class="d-sm-flex mb-n1">
            <div class="d-flex mb-3 mb-sm-0">
                <div class="mr-3">
                    <UserPicture user={reference.sender} />
                </div>
                <div class="mt-1">
                    <a href={reference.sender.profileurl}>
                        {reference.sender.fullname}
                    </a>
                </div>
            </div>
            <div class="mt-1 ml-auto">
                {reference.fulltime}
            </div>
        </div>
        <hr />
        <div class="local-mail-message-reference-content">
            <!-- eslint-disable-next-line svelte/no-at-html-tags -->
            {@html reference.content}
        </div>
        {#if reference.attachments.length > 0}
            <hr />
            <MessageAttachments {strings} message={reference} />
        {/if}
    </div>
</div>

<style global>
    .local-mail-message-reference-content {
        max-width: 60rem;
    }
</style>
