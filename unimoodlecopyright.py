from pathlib import Path
import re

SPDX_PHP_RE = r'/\*\n \* SPDX-FileCopyrightText:.*?\*/'
SPDX_TS_RE = r'(?<=<!--\n)SPDX-FileCopyrightText:.*?(?=\n-->)'

SPDX_COPYRIGHT_RE = r'SPDX-FileCopyrightText:(.*?)(<direccion.area.estrategia.digital@uva.es>)?\n'

OUTPUT_PRE = """// This file is part of Moodle - http://moodle.org/
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
"""

OUTPUT_POST = """
 * @author     UNIMOODLE Group (Coordinator) <direccion.area.estrategia.digital@uva.es>
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */
"""


def replace_spdx_block(content):
    def replace_match(match):
        result = OUTPUT_PRE.lstrip('\n')
        for m in re.findall(SPDX_COPYRIGHT_RE, match.group(0)):
            result += (f" * @copyright  {m[0].strip()}\n")
        result += OUTPUT_POST.strip('\n')
        return result

    content = re.sub(SPDX_PHP_RE, replace_match, content, 1, re.S)
    content = re.sub(SPDX_TS_RE, replace_match, content, 1, re.S)

    return content


def main():
    for path in Path(__file__).parent.rglob('*'):
        if path.is_file() and path.suffix in ('.php', '.ts', '.svelte'):
            with open(path, 'r') as f:
                content = f.read()

            with open(path, 'w') as f:
                f.write(replace_spdx_block(content))


main()
