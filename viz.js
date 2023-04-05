import vl from 'vega-lite-api';

export const viz = vl
  .markCircle({ size: 400, opacity: 0.9 })
  .encode(
    vl.x().fieldQ('Cases - cumulative total'),
    vl.y().fieldQ('Deaths - newly reported in last 24 hours'),
    vl.color().fieldN('Name'),
    vl.size().fieldQ('Deaths - cumulative total'),
    vl.tooltip().fieldN('Deaths - newly reported in last 24 hours')
  );

//sort() scale({ zero: false }
    