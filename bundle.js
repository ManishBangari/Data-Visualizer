(function (vega, vegaLite, vl, vegaTooltip, d3) {
  'use strict';

  vega = vega && Object.prototype.hasOwnProperty.call(vega, 'default') ? vega['default'] : vega;
  vegaLite = vegaLite && Object.prototype.hasOwnProperty.call(vegaLite, 'default') ? vegaLite['default'] : vegaLite;
  vl = vl && Object.prototype.hasOwnProperty.call(vl, 'default') ? vl['default'] : vl;

  const dark = '#3e3c38';
  const config = {
    axis: {
      domain: false,
      tickColor: 'lightGray'
    },
    style: {
      "guide-label": {
        fontSize: 20,
        fill: dark
      },
      "guide-title": {
        fontSize: 30,
        fill: dark
      }
    }
  };

  const csvUrl = 'https://gist.githubusercontent.com/ManishBangari/11f1f6c525cde3896de066434479cc28/raw/6834c78da5aeb00fc9b5ecbbcdbf2e301b9b4cdd/WHO-global-Covid19-dataset';

  const getData = async () => {
    const data = await d3.csv(csvUrl);
    
    // Have a look at the attributes available in the console!
    console.log(data[1]);

    return data;
  };


  const viz = vl
    .markCircle({ size: 400, opacity: 0.9 })
    .encode(
      vl.x().fieldQ('Cases - cumulative total'),
      vl.y().fieldQ('Deaths - newly reported in last 24 hours'),
      vl.color().fieldN('Name'),
      vl.size().fieldQ('Deaths - cumulative total'),
      vl.tooltip().fieldN('Deaths - newly reported in last 24 hours')
    );
  //sort() scale({ zero: false }

  vl.register(vega, vegaLite, {
    view: { renderer: 'svg' },
    init: view => { view.tooltip(new vegaTooltip.Handler().call); }
  });

  const run = async () => {
    const marks = viz
      .data(await getData())
      .width(window.innerWidth)
      .height(window.innerHeight)
      .autosize({ type: 'fit', contains: 'padding' })
      .config(config);
    
    document.body.appendChild(await marks.render());
  };
  run();

}(vega, vegaLite, vl, vegaTooltip, d3));

