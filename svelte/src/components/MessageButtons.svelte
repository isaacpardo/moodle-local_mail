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
    import type { Message } from '../lib/state';
    import type { Store } from '../lib/store';

    export let store: Store;
    export let message: Message;
    export let canReplyAll: boolean;
</script>

<button
    type="button"
    class="btn btn-primary mr-3 mb-3"
    on:click={() => store.reply(message, false)}
>
    <i class="fa fa-fw fa-reply mr-2" />
    {$store.strings.reply}
</button>
<button
    type="button"
    disabled={!canReplyAll}
    class:disabled={!canReplyAll}
    class="btn mr-3 mb-3"
    class:btn-primary={canReplyAll}
    class:btn-secondary={!canReplyAll}
    on:click={() => store.reply(message, true)}
>
    <i class="fa fa-fw fa-reply-all mr-2" />
    {$store.strings.replyall}
</button>
<button type="button" class="btn btn-primary mr-3 mb-3" on:click={() => store.forward(message)}>
    <i class="fa fa-fw fa-share mr-2" />
    {$store.strings.forward}
</button>
