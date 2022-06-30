import '@emotion/react';

declare module '@emotion/react' {
    export interface Theme {
        colors: Record<'primary' | 'secondary' | 'text' | 'black', Color>;
    }

    interface Color {
        light: string;
        dark: string;
    }
}
