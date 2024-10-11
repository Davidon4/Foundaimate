import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
			tealCustom: "#16778A",
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
		  animation: {
			'code-1': 'code-1 10s infinite',
			'code-2': 'code-2 10s infinite',
			'code-3': 'code-3 10s infinite',
			'code-4': 'code-4 10s infinite',
			'code-5': 'code-5 10s infinite',
			'code-6': 'code-6 10s infinite',
			'code-7': 'code-7 10s infinite',
			'code-8': 'code-8 10s infinite',
			'code-9': 'code-9 10s infinite',
			'code-10': 'code-10 10s infinite'
		  },
		  keyframes: {
			"code-1": {
			  "0%": { opacity: '0' },
			  "2.5%": { opacity: '1' },
			  "100%": { opacity: '1' },
			},
			"code-2": {
			  "10%": { opacity: '0' },
			  "17.5%": { opacity: '1' },
			  "100%": { opacity: '1' },
			},
			"code-3": {
			  "20%": { opacity: '0' },
			  "32.5%": { opacity: '1' },
			  "100%": { opacity: '1' },
			},
			"code-4": {
			  "30%": { opacity: '0' },
			  "47.5%": { opacity: '1' },
			  "100%": { opacity: '1' },
			},
			"code-5": {
			  "40%": { opacity: '0' },
			  "62.5%": { opacity: '1' },
			  "100%": { opacity: '1' },
			},
			"code-6": {
			  "50%": { opacity: '0' },
			  "77.5%": { opacity: '1' },
			  "100%": { opacity: '1' },
			},
			"code-7": {
			  "60%": { opacity: '0' },
			  "92.5%": { opacity: '1' },
			  "100%": { opacity: '1' },
			},
			"code-8": {
			  "70%": { opacity: '0' },
			  "107.5%": { opacity: '1' },
			  "100%": { opacity: '1' },
			},
			"code-9": {
			  "80%": { opacity: '0' },
			  "122.5%": { opacity: '1' },
			  "100%": { opacity: '1' },
			},
			"code-10": {
			  "90%": { opacity: '0' },
			  "137.5%": { opacity: '1' },
			  "100%": { opacity: '0' },
			},
			breath: {
				"0%, 100%": {transform: "scale(0.95)"},
				"50%": {transform: "scale(1.1)"},
			},
			float: {
				"0%, 100%": { transform: "translateY(0)" },
				"50%": { transform: "translateY(-5%)" },
			  },
			  line: {
				"0%, 100%": { left: '0', opacity: '0' },
				"50%": { left: "100%", transform: "translateX(-100%)" },
				"10%, 40%, 60%, 90%": { opacity: '0' },
				"25%, 75%": { opacity: '1' },
			  },
			  "infinite-scroll": {
				from: { transform: "translateX(0)" },
				to: { transform: "translateX(-100%)" },
			  },
		  },
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
