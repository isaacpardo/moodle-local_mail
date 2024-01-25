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
    import { truncate } from '../actions/truncate';
    import type { ViewParams } from '../lib/state';
    import { viewUrl } from '../lib/url';

    export let icon: string;
    export let text: string;
    export let params: ViewParams;
    export let count = 0;
    export let disabled = false;
    export let active = false;
    export let color: string | undefined = undefined;
    export let onClick: ((params: ViewParams) => void) | undefined = undefined;

    const handleClick = (event: Event) => {
        if (onClick) {
            event.preventDefault();
            onClick(params);
        }
    };
</script>

<a
    class="local-mail-menu-item list-group-item list-group-item-action d-flex align-items-center px-3 py-2"
    class:list-group-item-primary={active}
    class:disabled
    aria-current={active}
    aria-disabled={disabled}
    role="tab"
    href={viewUrl(params)}
    on:click={handleClick}
    style={color && !active ? `color: var(--local-mail-color-${color}-fg)` : ''}
>
    <i
        class="fa {icon} fa-fw"
        aria-hidden="true"
        style={color && !active ? `color: var(--local-mail-color-${color}-bg)` : ''}
    />
    <span class="flex-fill px-2" use:truncate={text}>{text}</span>
    {#if count > 0}
        <span class="badge">{count}</span>
    {/if}
</a>

<style global>
    .local-mail-menu-item:focus {
        z-index: 3;
    }
</style>
