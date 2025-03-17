import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import ProtectedRoute from "./auth/components/ProtectedRoute";
import Subscriptions from "./auth/pages/subscriptions";
import BuySubscription from "./auth/pages/buysubscription";
import { SubscriptionsProvider } from "./auth/context/SubscriptionsContext";

const SubscriptionRouting = () => {
  const location = useLocation();
  const path = location.pathname.replace("/subscriptions", "");

  return (
    <SubscriptionsProvider
      onError={(message, error) => console.error(message, error)}
    >
      <ProtectedRoute>
        {path === "" && <Subscriptions />}
        {path === "/buy" && <BuySubscription />}
      </ProtectedRoute>
    </SubscriptionsProvider>
  );
};

export default SubscriptionRouting;
