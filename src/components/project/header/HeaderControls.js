import React, { PropTypes } from 'react';
import NavigationLink from '../../common/links/NavigationLink';
import { PROJECTS } from '../../../constants/pages';
import { BACK } from '../../../constants/seqElements';

const HeaderControls = ({i18n, loading, navigate, project, setMouseOut, setMouseOver, theme}) => {
  const navigateToProjects = () => navigate(PROJECTS);
  const setOnMouseOver = () => setMouseOver(BACK);

  return (
    <header className={`w-100 bb db ${theme.sectionBorder} ${theme.bg}`}>
      <nav className="w-100 db dt-ns border-box pa2 ph4-ns" role="navigation">
        <div className="w-100 w-50-ns db dtc-ns v-mid tc tl-ns">
          <NavigationLink
            onMouseOver={setOnMouseOver}
            onMouseOut={setMouseOut}
            navigate={navigateToProjects}
            text="&#10550;"
            theme={theme}
            title={i18n.headNav.projects}
            url="/"
          />
        </div>
      </nav>
    </header>
  );
};

HeaderControls.propTypes = {
  i18n: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  navigate: PropTypes.func.isRequired,
  project: PropTypes.object.isRequired,
  setMouseOut: PropTypes.func.isRequired,
  setMouseOver: PropTypes.func.isRequired,
  theme: PropTypes.object.isRequired
};

export default HeaderControls;
