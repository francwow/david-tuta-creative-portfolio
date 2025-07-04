"use client";

import { PropsWithChildren } from "react";
import { useInView } from "react-intersection-observer";

const MoveUpContainer = ({ children }: PropsWithChildren) => {
  const { inView: containerInView, ref: containerRef } = useInView({
    threshold: 0.7,
  });

  return (
    <div
      ref={containerRef}
      className={containerInView ? "move-up active" : "move-up not-active"}
    >
      {children}
    </div>
  );
};

export default MoveUpContainer;
