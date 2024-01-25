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
    import { flip } from 'svelte/animate';
    import { fade } from 'svelte/transition';
    import { ViewportSize, type MessageSummary } from '../lib/state';
    import type { Store } from '../lib/store';
    import { viewUrl } from '../lib/url';
    import ListMessageCheckbox from './ListMessageCheckbox.svelte';
    import ListMessageStar from './ListMessageStar.svelte';
    import ListMessageUsers from './ListMessageUsers.svelte';
    import ListMessageSubject from './ListMessageSubject.svelte';
    import ListMessageLabels from './ListMessageLabels.svelte';
    import ListMessageAttachments from './ListMessageAttachments.svelte';
    import ListMessageTime from './ListMessageTime.svelte';
    import ListEmptyAlert from './ListAlert.svelte';

    export let store: Store;

    const messageParams = (message: MessageSummary, i: number) => {
        return {
            ...$store.params,
            messageid: message.id,
            offset: ($store.params.offset || 0) + i,
        };
    };
</script>

{#key $store.navigationId}
    <div class="list-group">
        {#each $store.listMessages as message, i (message.id)}
            <a
                animate:flip={{ delay: 400, duration: 400 }}
                in:fade={{ delay: 400 }}
                out:fade={{ duration: 400 }}
                class="local-mail-list-message list-group-item list-group-item-action p-0"
                href={viewUrl(messageParams(message, i))}
                class:list-group-item-primary={$store.selectedMessages.has(message.id)}
                class:list-group-item-secondary={!message.unread &&
                    !$store.selectedMessages.has(message.id)}
                class:font-weight-bold={message.unread}
                on:click|preventDefault={() => store.navigate(messageParams(message, i))}
            >
                {#if $store.viewportSize >= ViewportSize.MD}
                    <div class="d-flex align-items-center pl-1 pr-3">
                        <ListMessageCheckbox {store} {message} />
                        <ListMessageStar {store} {message} />
                        <div
                            class="d-flex w-100 flex-grow-1 align-items-center"
                            style="min-width: 0"
                        >
                            <div class="flex-grow-1 mx-2" style="width: 25%; min-width: 0">
                                <ListMessageUsers {store} {message} />
                            </div>
                            <div
                                class="flex-grow-1 d-flex my-2 mx-2"
                                style="width: 75%; min-width: 0"
                            >
                                <ListMessageSubject {store} {message} />
                                <div
                                    class="d-flex text-truncate flex-shrink-0 justify-content-end mb-n2 ml-auto"
                                    style="max-width: 80%"
                                >
                                    <ListMessageLabels {store} {message} />
                                </div>
                            </div>
                        </div>
                        <ListMessageAttachments {store} {message} />
                        <ListMessageTime {store} {message} />
                    </div>
                {:else}
                    <div class="d-flex align-items-start pt-1 pb-2 pl-1 pr-2">
                        <ListMessageCheckbox {store} {message} />
                        <div class="w-100 ml-1" style="min-width: 0">
                            <div class="d-flex mt-2">
                                <ListMessageUsers {store} {message} />
                                <ListMessageAttachments {store} {message} />
                                <div class="ml-auto mr-2">
                                    <ListMessageTime {store} {message} />
                                </div>
                            </div>
                            <div class="d-flex">
                                <div class="d-flex w-100 my-2 mr-2" style="min-width: 0">
                                    <ListMessageSubject {store} {message} />
                                </div>
                                <ListMessageStar {store} {message} />
                            </div>
                            <div class="d-flex flex-wrap ml-n2 mr-2">
                                <ListMessageLabels {store} {message} />
                            </div>
                        </div>
                    </div>
                {/if}
            </a>
        {/each}
        <ListEmptyAlert {store} />
    </div>
{/key}

<style global>
    .local-mail-list-message {
        color: var(--dark) !important;
    }

    .local-mail-list-message:focus,
    .local-mail-list-message :global(.btn:focus) {
        z-index: 3;
    }
</style>
