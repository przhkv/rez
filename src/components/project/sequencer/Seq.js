import { Map } from 'immutable';
import React, { PropTypes } from 'react';

const Seq = ({audioCtx, gainNode, i18n, project, setMouseOut, setMouseOver, theme}) => (
  <div>
    <ul>
    {project.get('channels').map((c, i) => (
      <li key={i}>{c.get('name')}</li>
    ))}
    </ul>
  </div>
);

Seq.propTypes = {
  audioCtx: PropTypes.object.isRequired,
  gainNode: PropTypes.object.isRequired,
  i18n: PropTypes.object.isRequired,
  project: PropTypes.instanceOf(Map).isRequired,
  save: PropTypes.func.isRequired,
  setMouseOut: PropTypes.func.isRequired,
  setMouseOver: PropTypes.func.isRequired,
  theme: PropTypes.object.isRequired
};

export default Seq;
