import React from 'react';
import Graph from 'react-graph-vis';
import { observable, toJS } from 'mobx';
import { observer } from 'mobx-react';

const options = {
  nodes: {
    shape: 'dot',
    size: 30,
    font: {
      size: 32,
      color: 'white'
    },
    scaling: {
      label: true
    },
    borderWidth: 2,
    shadow: true
  },
  edges: {
    width: 2,
    shadow: true
  },
  layout: {
    hierarchical: {
      direction: 'UD',
      sortMethod: 'directed',
      nodeSpacing: 400 // <-- !!!!!!!
    }
  },
  physics: false
};

export const Diagram = observer(class Diagram extends React.Component {
  constructor(props) {
    super(props);

    this.onKeyDown = this.onKeyDown.bind(this);

    this.store = observable({
      nodesToAdd: [
        { id: 2, label: 'Tracker GPS', group: 1, visible: false, edges: [{ from: 2, to: 3 }, { from: 2, to: 4 }] },
        { id: 3, label: 'Router monitor', group: 2, visible: false, edges: [{ from: 3, to: 4 }] },
        { id: 4, label: 'Ads', group: 3, visible: false, edges: [{ from: 4, to: 5 }] },
        { id: 5, label: 'Notifications', group: 4, visible: false, edges: [] },
        { id: 6, label: 'Ads 2*', group: 3, visible: false, edges: [{ from: 6, to: 5 }, { from: 2, to: 6 }, { from: 3, to: 6 }] }
      ],
      graph: {
        nodes: [
          { id: 1, label: 'API (hapi.js)', group: 0 }
        ],
        edges: [{ from: 1, to: 2 }, { from: 1, to: 3 }]
      }
    });
  }

  componentDidMount() {
    document.addEventListener('keydown', this.onKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.onKeyDown);
  }

  onKeyDown(e) {
    const store = this.store;
    if (e.which === 40) {
      const next = store.nodesToAdd.find((n) => n.visible === false);
      if (next) {
        store.graph.nodes.push({ id: next.id, label: next.label, group: next.group });
        next.edges.forEach((edge) => store.graph.edges.push(edge));
        next.visible = true;
      }
    }
  }

  render() {
    return <Graph graph={toJS(this.store.graph)} options={options} style={{ height: '640px' }} />;
  }
});
