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

export interface Attachment {
    readonly filepath: string;
    readonly filename: string;
    readonly mimetype: string;
    readonly filesize: number;
    readonly fileurl: string;
    readonly iconurl: string;
}

export interface Course {
    readonly id: number;
    readonly shortname: string;
    readonly fullname: string;
    readonly visible: boolean;
    readonly groupmode: GroupMode;
    readonly unread: number;
    readonly drafts: number;
}

export enum DeletedStatus {
    NotDeleted = 0,
    Deleted = 1,
    DeletedForever = 2,
}

export type Dialog =
    | 'preferences'
    | 'createlabel'
    | 'editlabel'
    | 'deletelabel'
    | 'restore'
    | 'deleteforever'
    | 'emptytrash';

export interface Group {
    readonly id: number;
    readonly name: string;
}

export enum GroupMode {
    No = 0,
    Separate = 1,
    Visible = 2,
}

export interface InitialData {
    readonly userid: number;
    readonly settings: Settings;
    readonly preferences: Preferences;
    readonly strings: Strings;
    readonly mobile: boolean;
}

export interface Label {
    readonly id: number;
    readonly name: string;
    readonly color: string;
    readonly unread: number;
    readonly courses: ReadonlyArray<LabelCourse>;
}

export interface LabelCourse {
    readonly id: number;
    readonly unread: number;
}

export interface Message extends MessageSummary {
    readonly content: string;
    readonly format: number;
    readonly attachments: ReadonlyArray<Attachment>;
    readonly references: ReadonlyArray<Reference>;
    readonly javascript: string;
}

export interface MessageData {
    readonly courseid: number;
    readonly to: number[];
    readonly cc: number[];
    readonly bcc: number[];
    readonly subject: string;
    readonly content: string;
    readonly format: number;
    readonly draftitemid: number;
}

export interface MessageForm {
    readonly editorhtml: string;
    readonly filemanagerhtml: string;
    readonly javascript: string;
}

export interface MessageProcessor {
    name: string;
    displayname: string;
    enabled: boolean;
    locked: boolean;
}

export interface MessageProcessorPreference {
    name: string;
    enabled: boolean;
}

export interface MessageSummary {
    readonly id: number;
    readonly subject: string;
    readonly numattachments: number;
    readonly draft: boolean;
    readonly time: number;
    readonly shorttime: string;
    readonly fulltime: string;
    readonly unread: boolean;
    readonly starred: boolean;
    readonly deleted: boolean;
    readonly course: Course;
    readonly sender: User;
    readonly recipients: ReadonlyArray<Recipient>;
    readonly labels: ReadonlyArray<Label>;
}

export interface Preferences {
    readonly perpage: number;
    readonly markasread: boolean;
    readonly notifications: ReadonlyArray<string>;
}

export interface Recipient extends User {
    readonly type: RecipientType;
    readonly isvalid?: boolean;
}

export enum RecipientType {
    TO = 'to',
    CC = 'cc',
    BCC = 'bcc',
}

export interface Reference {
    readonly id: number;
    readonly subject: string;
    readonly content: string;
    readonly format: number;
    readonly time: number;
    readonly shorttime: string;
    readonly fulltime: string;
    readonly sender: User;
    readonly attachments: ReadonlyArray<Attachment>;
}

export interface Role {
    readonly id: number;
    readonly name: string;
}

export interface SearchParams {
    readonly content?: string;
    readonly sendername?: string;
    readonly recipientname?: string;
    readonly unread?: boolean;
    readonly withfilesonly?: boolean;
    readonly maxtime?: number;
    readonly startid?: number;
    readonly reverse?: boolean;
}

export type SelectAllType = 'all' | 'none' | 'read' | 'unread' | 'starred' | 'unstarred';

export interface ServiceError {
    readonly message: string;
    readonly debuginfo?: string;
    readonly stacktrace?: string;
}

export interface Settings {
    readonly maxrecipients: number;
    readonly usersearchlimit: number;
    readonly globaltrays: ReadonlyArray<string>;
    readonly coursetrays: 'none' | 'unread' | 'all';
    readonly coursetraysname: 'shortname' | 'fullname';
    readonly coursebadges: 'hidden' | 'shortname' | 'fullname';
    readonly coursebadgeslength: number;
    readonly filterbycourse: 'hidden' | 'shortname' | 'fullname';
    readonly incrementalsearch: boolean;
    readonly incrementalsearchlimit: number;
    readonly courselink: 'hidden' | 'shortname' | 'fullname';
    readonly messageprocessors: ReadonlyArray<MessageProcessor>;
}

export interface State {
    /* General information fetched only once. */
    readonly userid: number;
    readonly settings: Settings;
    readonly preferences: Preferences;
    readonly strings: Strings;
    readonly incrementalSearchStopId?: number;
    readonly mobile: boolean;

    /* URL parameters of the current and previous view. */
    readonly params: ViewParams;
    readonly prevParams?: ViewParams;

    /* Data fetched using web services for the current view.  */
    readonly unread: number;
    readonly drafts: number;
    readonly courses: ReadonlyArray<Course>;
    readonly labels: ReadonlyArray<Label>;
    readonly totalCount: number;
    readonly listMessages: ReadonlyArray<MessageSummary>;
    readonly message?: Message;
    readonly messageOffset?: number;
    readonly nextMessageId?: number;
    readonly prevMessageId?: number;

    /* Data used for editing drafts. */
    readonly draftForm?: MessageForm;
    readonly draftData?: MessageData;
    readonly draftSaved?: boolean;

    /* Transient interface state. */
    readonly loading: boolean;
    readonly error?: ServiceError;
    readonly selectedMessages: ReadonlyMap<number, MessageSummary>;
    readonly toasts: ReadonlyArray<Toast>;
    readonly viewportSize: number;
    readonly navigationId: number;
}

export type Strings = Record<string, string>;

export interface Toast {
    readonly text: string;
    readonly undo?: () => void;
}

export type Tray = 'inbox' | 'sent' | 'drafts' | 'starred' | 'course' | 'label' | 'trash';

export interface User {
    readonly id: number;
    readonly firstname: string;
    readonly lastname: string;
    readonly fullname: string;
    readonly pictureurl: string;
    readonly profileurl: string;
    readonly sortorder: string;
}

export interface ViewParams {
    readonly tray?: Tray;
    readonly courseid?: number;
    readonly labelid?: number;
    readonly messageid?: number;
    readonly offset?: number;
    readonly search?: SearchParams;
    readonly dialog?: Dialog;
}

export enum ViewportSize {
    SM = 576,
    MD = 768,
    LG = 992,
    XL = 1200,
}
