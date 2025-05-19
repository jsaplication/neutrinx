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

    document.addEventListener('DOMContentLoaded', function () {
        const themeToggle = document.getElementById('theme-toggle');
        const htmlElement = document.documentElement;

        if (!themeToggle) {
            console.warn("Botão de tema (#theme-toggle) não encontrado.");
            return;
        }

        const iconMoon = themeToggle.querySelector('i.fa-moon');
        const iconSun = themeToggle.querySelector('i.fa-sun');

        // Verifica se o usuário já escolheu um tema anteriormente
        const currentTheme = localStorage.getItem('theme');
        if (currentTheme) {
            if (currentTheme === 'dark') {
                htmlElement.classList.add('dark');
                if (iconMoon) iconMoon.classList.add('hidden');
                if (iconSun) iconSun.classList.remove('hidden');
            } else {
                if (iconSun) iconSun.classList.add('hidden');
                if (iconMoon) iconMoon.classList.remove('hidden');
            }
        }

        themeToggle.addEventListener('click', () => {
            htmlElement.classList.toggle('dark');

            if (htmlElement.classList.contains('dark')) {
                localStorage.setItem('theme', 'dark');
                if (iconMoon) {
                    iconMoon.classList.replace('fa-moon', 'fa-sun');
                    iconMoon.classList.add('hidden');
                }
                if (iconSun) iconSun.classList.remove('hidden');
            } else {
                localStorage.setItem('theme', 'light');
                if (iconSun) {
                    iconSun.classList.replace('fa-sun', 'fa-moon');
                    iconSun.classList.add('hidden');
                }
                if (iconMoon) iconMoon.classList.remove('hidden');
            }
        });


// === Mobile Menu Toggle + Close on Link Click ===
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('#mobile-menu a');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Fecha o menu ao clicar em qualquer link
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (!mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.add('hidden');
                }
            });
        });
    }


    });
// Verifica se o usuário já escolheu um tema anteriormente


