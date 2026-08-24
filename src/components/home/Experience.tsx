'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Building2 } from 'lucide-react';

export interface ExperienceItem {
    institution?: string;
    role?: string;
    advisor?: string;
    date?: string;
    logo?: string;
}

interface ExperienceProps {
    items: ExperienceItem[];
    title?: string;
}

export default function Experience({ items, title = 'Experience' }: ExperienceProps) {
    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
        >
            <h2 className="text-2xl font-serif font-bold text-primary mb-4">{title}</h2>
            <div className="space-y-4">
                {items.map((item, index) => (
                    <div
                        key={`${item.institution || 'experience'}-${index}`}
                        className="flex gap-4 rounded-lg border border-neutral-200 bg-neutral-50 p-4 shadow-sm dark:border-[rgba(148,163,184,0.24)] dark:bg-neutral-800 hover:shadow-lg transition-all duration-200 hover:scale-[1.02]"
                    >
                        <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center overflow-hidden rounded-lg border border-neutral-200 bg-white dark:border-neutral-700 dark:bg-neutral-900">
                            {item.logo ? (
                                <Image
                                    src={item.logo}
                                    alt={`${item.institution || 'Institution'} logo`}
                                    width={56}
                                    height={56}
                                    className="h-full w-full object-contain p-1"
                                />
                            ) : (
                                <Building2 className="h-7 w-7 text-neutral-400" aria-hidden="true" />
                            )}
                        </div>

                        <div className="min-w-0 flex-1">
                            {item.institution && (
                                <h3 className="font-serif text-lg font-semibold text-primary">
                                    {item.institution}
                                </h3>
                            )}
                            {item.role && <p className="mt-1 text-sm font-medium text-accent">{item.role}</p>}
                            {item.advisor && <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-500">Advisor: {item.advisor}</p>}
                            {item.date && <p className="mt-1 text-sm text-neutral-500">{item.date}</p>}
                        </div>
                    </div>
                ))}
            </div>
        </motion.section>
    );
}
