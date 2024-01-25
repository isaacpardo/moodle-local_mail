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
    import type { Store } from '../lib/store';
    import ModalDialog from './ModalDialog.svelte';

    export let store: Store;
    export let onCancel: () => void;

    let markasread = $store.preferences.markasread;
    let notifications = $store.settings.messageprocessors
        .map((processor) => processor.name)
        .filter((name) => $store.preferences.notifications.includes(name));

    const handleConfirm = () => {
        onCancel();
        store.savePreferences({ markasread, notifications });
    };

    const toggleMarkAsRead = () => {
        markasread = !markasread;
    };

    const toggleMessageProcessor = (name: string) => {
        notifications = notifications.includes(name)
            ? notifications.filter((n) => n != name)
            : [...notifications, name];
    };
</script>

<ModalDialog
    title={$store.strings.preferences}
    confirmText={$store.strings.save}
    cancelText={$store.strings.cancel}
    onConfirm={handleConfirm}
    {onCancel}
>
    <h6 class="mb-3">{$store.strings.notifications}</h6>

    {#each $store.settings.messageprocessors as processor}
        <div class="custom-control custom-switch my-2">
            <input
                id="local-mail-preferences-messageprocessor-{processor.name}"
                class="custom-control-input"
                type="checkbox"
                checked={processor.locked
                    ? processor.enabled
                    : notifications.includes(processor.name)}
                disabled={processor.locked}
                on:click={() => toggleMessageProcessor(processor.name)}
            />
            <label
                for="local-mail-preferences-messageprocessor-{processor.name}"
                class="custom-control-label pl-1"
            >
                {processor.displayname}
                {#if processor.locked}
                    <span class="ml-1">({$store.strings.locked})</span>
                {/if}
            </label>
        </div>
    {/each}
    <div class="custom-control custom-switch my-2 mt-3">
        <input
            id="local-mail-preferences-markasread"
            class="custom-control-input"
            type="checkbox"
            checked={markasread && notifications.length > 0}
            disabled={notifications.length == 0}
            on:click={toggleMarkAsRead}
        />
        <label for="local-mail-preferences-markasread" class="custom-control-label pl-1">
            {$store.strings.markmessagesasread}
        </label>
    </div>
</ModalDialog>
