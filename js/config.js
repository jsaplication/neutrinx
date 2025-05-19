tailwind.config = {
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                neutrinx: {
                    black: '#000000',
                    blue1: '#1099FD',
                    blue2: '#1E6EFC',
                    purple: '#9836DB',
                },
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'float-reverse': 'float-reverse 5s ease-in-out infinite',
                'pulse-slow': 'pulse 5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                'float-reverse': {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(20px)' },
                }
            }
        }
    }
}