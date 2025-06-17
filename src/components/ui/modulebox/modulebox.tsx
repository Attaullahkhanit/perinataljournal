// components/ModuleBox.tsx
import React from 'react';

type ModuleBoxProps = {
  title?: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  noHorizontalPadding?: boolean; // New prop
};

const ModuleBox = ({ title, icon, children, noHorizontalPadding = false }: ModuleBoxProps) => {
  return (
    <div className="overflow-hidden mb-6 module-box rounded-sm shadow-sm border border-[#CFD2E9]">
      {title && (
        <div className="flex items-center gap-2 text-[#0b5486] text-sm font-bold px-3 py-2 border-b border-[#CFD2E9] module-title bg-[#f9fbff] rounded-t-md">
          {icon && <span className="text-base">{icon}</span>}
          {title}
        </div>
      )}
      <div className={`${noHorizontalPadding ? 'py-2 pl-2' : 'px-3 py-2'} bg-white`}>
        {children}
      </div>
    </div>
  );
};

export default ModuleBox;
