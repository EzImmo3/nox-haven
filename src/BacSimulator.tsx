import { useMemo } from 'react';
import { Award, Calculator, Info } from 'lucide-react';
import { calculateBac2027 } from './bacSimulator.mjs';
import type { BacModel } from './bacSimulator.mjs';

type Props = {
  model: BacModel;
  values: Record<string, number>;
  onChange: (values: Record<string, number>) => void;
};

const groups = [
  { id: 'continuous', title: 'Contrôle continu', subtitle: 'Moyennes annuelles de Première et de Terminale — 40 coefficients obligatoires.' },
  { id: 'terminal', title: 'Épreuves anticipées et terminales', subtitle: 'Notes des épreuves de français, mathématiques, spécialités, philosophie et Grand oral — 60 coefficients.' },
  { id: 'option', title: 'Enseignements optionnels', subtitle: 'Coefficients supplémentaires selon les années pendant lesquelles l’option a été suivie.' },
];

export default function BacSimulator({ model, values, onChange }: Props) {
  const result = useMemo(() => calculateBac2027(model, values), [model, values]);
  const remainingCoefficient = model.totalCoefficient - result.enteredCoefficient;
  const number = (value: number) => value.toLocaleString('fr-FR', { maximumFractionDigits: 2 });

  function update(id: string, raw: string) {
    const next = { ...values };
    if (raw.trim() === '') delete next[id];
    else {
      const parsed = Number(raw.replace(',', '.'));
      if (!Number.isFinite(parsed) || parsed < 0 || parsed > 20) return;
      next[id] = parsed;
    }
    onChange(next);
  }

  return <>
    <div className="page-heading"><div><div className="eyebrow">OBJECTIF BACCALAURÉAT</div><h1>Simulateur du Bac {model.session}</h1><p>Projette tes résultats avec les coefficients officiels de la voie générale. Tes notes scolaires ne sont jamais modifiées.</p></div></div>
    <section className="panel bac-notice"><Info size={18}/><p>Simulation pour un candidat scolaire de la voie générale. Les notes saisies sont des résultats ou des estimations personnelles ; seul le jury délibère et valide le résultat officiel.</p></section>
    <section className="stats-grid bac-summary">
      <article className="stat-card"><div className="stat-top"><span>Notes renseignées</span><Calculator size={18}/></div><div className="stat-value">{result.enteredCount}/{result.itemCount}</div><div className="stat-foot">{number(result.enteredCoefficient)} coefficients sur {model.totalCoefficient}</div></article>
      <article className="stat-card"><div className="stat-top"><span>Points déjà obtenus</span><Award size={18}/></div><div className="stat-value">{number(result.points)}</div><div className="stat-foot">Sur {number(result.totalPoints)} points possibles</div></article>
      <article className="stat-card"><div className="stat-top"><span>Moyenne finale</span><Award size={18}/></div><div className="stat-value">{result.complete && result.average !== null ? `${number(result.average)}/20` : 'À compléter'}</div><div className="stat-foot">{result.complete ? `Mention : ${result.mention}` : 'Elle apparaîtra lorsque toutes les notes seront renseignées.'}</div></article>
    </section>
    {!result.complete && <section className="panel bac-projection"><h2>Repères pour ta projection</h2><p>Il reste {number(remainingCoefficient)} coefficients à renseigner. Les objectifs ci-dessous indiquent la moyenne qu’il faudrait obtenir sur les coefficients restants pour atteindre chaque seuil.</p><div className="bac-target-grid">{Object.entries(result.pointsNeeded as Record<string, number>).map(([label, points])=><div className="bac-target" key={label}><strong>{label}</strong><span>{remainingCoefficient > 0 ? `${number(Math.max(0, points / remainingCoefficient))}/20` : '—'}</span><small>{number(Math.max(0, points))} points à obtenir</small></div>)}</div></section>}
    {groups.map(group => {
      const items = model.items.filter(item => item.group === group.id);
      if (!items.length) return null;
      return <section className="panel bac-group" key={group.id}><div className="panel-heading"><div><h2>{group.title}</h2><p>{group.subtitle}</p></div></div><div className="bac-grade-grid">{items.map(item=><label className="field-label bac-grade-field" key={item.id}><span>{item.label}<small>Coefficient {item.coefficient}</small></span><div className="bac-grade-input"><input aria-label={`Note ${item.label}`} type="number" min="0" max="20" step="0.25" inputMode="decimal" placeholder="—" value={values[item.id] ?? ''} onChange={event=>update(item.id,event.target.value)}/><span>/20</span></div></label>)}</div></section>;
    })}
    <section className="panel bac-footer"><div><h2>À retenir</h2><p>Les seuils de mention sont : assez bien à partir de 12/20, bien à partir de 14/20 et très bien à partir de 16/20. Les options ajoutent des coefficients au total, elles ne remplacent pas les coefficients obligatoires.</p></div><button className="secondary-btn" onClick={()=>onChange({})}>Effacer les notes du simulateur</button></section>
  </>;
}
