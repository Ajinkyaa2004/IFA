import { ButtonHTMLAttributes, forwardRef } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'glow';
    size?: 'sm' | 'md' | 'lg' | 'xl';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={cn(
                    'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300 active:scale-95 disabled:pointer-events-none disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary cursor-pointer',
                    {
                        // Variants
                        'bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/25': variant === 'primary',
                        'bg-secondary text-white hover:bg-secondary/90 shadow-md shadow-secondary/20': variant === 'secondary',
                        'border-2 border-primary/20 bg-transparent text-primary hover:bg-primary/5 hover:border-primary/50': variant === 'outline',
                        'bg-transparent text-foreground hover:bg-white/5': variant === 'ghost',
                        'bg-gradient-to-r from-primary to-secondary text-white shadow-[0_0_20px_rgba(124,58,237,0.5)] hover:shadow-[0_0_30px_rgba(124,58,237,0.7)]': variant === 'glow',

                        // Sizes
                        'h-9 px-4 text-sm': size === 'sm',
                        'h-11 px-6 text-base': size === 'md',
                        'h-14 px-8 text-lg': size === 'lg',
                        'h-16 px-10 text-xl font-bold': size === 'xl',
                    },
                    className
                )}
                {...props}
            />
        );
    }
);
Button.displayName = 'Button';

export { Button, cn };
