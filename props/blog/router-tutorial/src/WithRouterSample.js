import React from "react";
import { useMatch, useNavigate, useLocation } from "react-router-dom";

const WithRouterSample = () => {
  const match = useMatch("/with/:id");
  const history = useNavigate();
  const location = useLocation();
  return (
    <div>
      <h4>location</h4>
      <textarea
        value={JSON.stringify(location, null, 2)}
        rows={7}
        readOnly={true}
      />
      <h4>match</h4>
      <textarea
        value={JSON.stringify(match, null, 2)}
        rows={7}
        readOnly={true}
      />
      <button onClick={() => history("/")}>홈으로</button>
    </div>
  );
};

WithRouterSample.defaultProps = {};
export default WithRouterSample;
