import React from "react";
interface Props {
  title: string;
  text: string;
  tag?: string;
}
const ProgramCards = ({ title, text, tag }: Props) => {
  return (
    <div className="p-6 rounded-2xl bg-blue-50 border border-transparent hover:border-accent/50 hover:bg-blue-50/80 hover:shadow-lg transition-all duration-300 h-full flex flex-col">
      <div className="flex justify-between items-start mb-3">
        {/* Title */}
        <h3 className="font-bold text-lg text-primary">{title}</h3>

        {/* Optional Tag (e.g., "Ages 6-10") - only renders if provided */}
        {tag && (
          <span className="text-xs font-semibold px-2 py-1 bg-white/60 rounded-full font-accent text-primary/80 shrink-0 ml-2">
            {tag}
          </span>
        )}
      </div>

      {/* Description Text */}
      <p className="font-accent text-sm text-secondary font-medium leading-relaxed">
        {text}
      </p>
    </div>
  );
};

export default ProgramCards;
