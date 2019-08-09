import React from 'react';
import { UnitStats } from '../../types/units';
import { gettext } from '../../i18n';

const positive = (num: number): string => (Math.sign(num) >= 0 ? '+' : '');
export const CardTable = ({
  size,
  attack,
  defense,
  power,
  toughness,
  morale,
  type,
}: UnitStats) => (
    <table className="card-table">
      <tbody>
        <tr>
          <td>{gettext("Attack:")}</td>
          <td className="text-right pad-right">
            {type === 'Fortification' ? '—' : `${positive(attack)}${attack}`}
          </td>
          <td>{gettext("Defense:")}</td>
          <td className="text-right">
            {type === 'Fortification' ? '—' : defense}
          </td>
        </tr>
        <tr>
          <td>{gettext("Power:")}</td>
          <td className="text-right pad-right">
            {type === 'Fortification' ? '—' : `${positive(power)}${power}`}
          </td>
          <td>{gettext("Toughness:")}</td>
          <td className="text-right">{toughness}</td>
        </tr>
        <tr>
          <td>{gettext("Morale:")}</td>
          <td className="text-right pad-right">
            {type === 'Fortification' ? '—' : `${positive(morale)}${morale}`}
          </td>
          <td>{gettext("Size:")}</td>
          <td className="text-right text-transform-none">1{size}</td>
        </tr>
      </tbody>
    </table>
  );
