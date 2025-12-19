import React from "react";

const ProgramCards = () => {
  return (
    <div className="p-6 rounded-lg bg-blue-50 border border-transparent hover:border-border transition-all">
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-bold text-lg text-primary">Early Years</h3>
        <span className="text-xs font-semibold px-2 py-1 bg-white/60 rounded-full font-accent text-primary/80">
          Ages 3-5
        </span>
      </div>
      <p className="text-sm text-primary/90 font-accent leading-relaxed mb-4">
        Play-based learning integrated with basic Islamic values and Arabic
        exposure.
      </p>
    </div>
  );
};

export default ProgramCards;
