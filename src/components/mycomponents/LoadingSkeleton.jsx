import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
export default function LoadingSkeleton({ count = 5 }) {
  return (
    <div className="container">
      <Skeleton count={count} />
    </div>
  );
}
