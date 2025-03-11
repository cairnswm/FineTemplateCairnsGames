import React, { createContext, useEffect, useMemo, useState } from "react";
import { REACT_APP_TENANT_API } from "../../env";

const TenantContext = createContext(null);

const TenantProvider = (props) => {
  const { children, onError } = props;

  const [tenant] = useState(props.applicationId);
  const configValue = props.config;
  const [params, setParams] = useState(props.params || []);
  const [application, setApplication] = useState();
  const [loading, setLoading] = useState("starting");
  const [error, setError] = useState("");

  useEffect(() => {
    if (!tenant) {
      return;
    }
    setLoading("loading");
    fetch(REACT_APP_TENANT_API + "api.php/tenant", {
      headers: { "Content-Type": "application/json", APP_ID: tenant },
    })
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data) && data.length === 0) {
          setError("Tenant: No Tenant Details found, ");
          return;
        }
        if (Array.isArray(data)) {
          setApplication(data[0]);
        } else {
          setApplication(data);
        }
      })
      .catch((err) => {
        if (onError) {
          onError("Tenant: Unable to fetch Tenant details", err);
        }
      });
    fetch(REACT_APP_TENANT_API + "getsettings.php", {
      headers: { "Content-Type": "application/json", APP_ID: tenant },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Tenant Params", data);
        setParams(data);
      })
      .catch((err) => {
        if (onError) {
          onError("Tenant: Unable to fetch Tenant Params", err);
        }
      })
      .finally(() => {
        setLoading("loaded");
      });
  }, [tenant]);

  const values = useMemo(
    () => ({ tenant, application, config: configValue, params }),
    [tenant, configValue, params]
  );

  if (!props.applicationId || props.applicationId === "unknown") {
    return (
      <div>
        <h1>Unknown Tenant</h1>
        <p>Set the application prop to the tenant name in Cairnsgames</p>
      </div>
    );
  }
  if (!REACT_APP_TENANT_API) {
    return (
      <div>
        <h1>Missing Configuration</h1>
        <p>
          Set the REACT_APP_TENANT_API environment variable to the URL of the
          tenant API
        </p>
      </div>
    );
  }
  if (error) {
    return (
      <div>
        <h1>Error</h1>
        <p>{error}</p>
        <p>Check the following items</p>
        <ul>
          <li>Set the application prop to the tenant name in Cairnsgames</li>
          <li>
            Set the REACT_APP_TENANT_API environment variable to the URL of the
            tenant API
          </li>
        </ul>
      </div>
    );
  }

  if (loading !== "loaded") {
    return <div>Loading...</div>;
  }

  return (
    <TenantContext.Provider value={values}>{children}</TenantContext.Provider>
  );
};

export { TenantContext, TenantProvider };
