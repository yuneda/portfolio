"use client";

import { IconType } from "react-icons";
import { motion } from "framer-motion";

interface SkillBoxProps {
  name: string;
  icon?: IconType;
  color?: string;
}

export function SkillBox({ name, icon: Icon, color = "#60A5FA" }: SkillBoxProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="flex items-center gap-2 rounded-lg border border-opacity-50 hover:border-blue-400 bg-white/50 backdrop-blur-sm p-2 shadow-sm transition-colors duration-300"
    >
      {Icon && (
        <Icon
          style={{ color }}
          className="h-5 w-5"
          aria-hidden="true"
        />
      )}
      <span className="text-sm font-medium text-gray-700">{name}</span>
    </motion.div>
  );
} 