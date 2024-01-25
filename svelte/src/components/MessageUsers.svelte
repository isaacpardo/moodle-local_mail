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
// Córdoba, Extremadura, Vigo, Las Palmas de Gran Canaria y Burgos.

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
    import { RecipientType, type Message } from '../lib/state';
    import type { Store } from '../lib/store';
    import UserPicture from './UserPicture.svelte';

    export let store: Store;
    export let message: Message;

    $: recipients = (type: string) => {
        return message.recipients.filter((user) => user.type == type);
    };
</script>

<div class="local-mail-message-users d-flex mb-n2">
    <div class="mr-3">
        <UserPicture user={message.sender} />
    </div>
    <div class="d-flex flex-column">
        <div class="mt-1 mb-2">
            <a href={message.sender.profileurl}>
                {message.sender.fullname}
            </a>
        </div>
        {#each Object.values(RecipientType) as type}
            {#if recipients(type).length > 0}
                <div class="mb-2">
                    <span> {$store.strings[type]}: </span>
                    {#each recipients(type) as user, i (user.id)}
                        {#if i > 0},
                        {/if}
                        <a href={user.profileurl}>{user.fullname}</a>
                    {/each}
                </div>
            {/if}
        {/each}
    </div>
</div>
