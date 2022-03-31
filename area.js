import { getBounds } from './bounds';

export class Area {
  // Create an Area chart
  constructor(data) {
    this.data = data;
  }

  static margin = {top: 10, right: 10, bottom: 20, left: 35};

  pointermove(evt) {
    console.log(evt);
  }

  pointerleave(evt) {
    console.log(evt);
  }

  render(elem) {
    const [width, height] = getBounds(elem, {ratio: 0.25});

    // Build the SVG element
    const svg = d3.select(elem).append('svg')
      .attr('viewBox', [0, 0, width, height])
      .attr('style', 'max-width: 100%; height: auto; height: intrinsic;')
      .style('-webkit-tap-highlight-color', 'transparent')
      .style('font-size', '12px')
      .style('overflow', 'visible')
      .style('touch-action', 'none')
      .on('pointerenter pointermove', this.pointermove)
      .on('pointerleave', this.pointerleave);

    svg.append('g').selectAll('circle')
      .data(this.data)
      .enter().append('circle')
      .style('fill', 'red')
      .attr('cx', d => (d + 1) * 100)
      .attr('cy', height / 2.0)
      .attr('r', 25);
  }
}
