'use client';

import { useEffect } from 'react';
import '@n8n/chat/style.css';

export default function ChatWidget() {
  useEffect(() => {
    (globalThis as Record<string, unknown>).__VUE_OPTIONS_API__ = true;
    (globalThis as Record<string, unknown>).__VUE_PROD_DEVTOOLS__ = false;
    (globalThis as Record<string, unknown>).__VUE_PROD_HYDRATION_MISMATCH_DETAILS__ = false;

    import('@n8n/chat').then(({ createChat }) => {
      createChat({
        webhookUrl: '/api/chat',
        mode: 'window',
        showWelcomeScreen: false,
        loadPreviousSession: false,
        initialMessages: [
          '¡Hola! Soy el asistente de Café Mossitos. ¿En qué te puedo ayudar?',
        ],
        i18n: {
          en: {
            title: '¡Hola! 👋',
            subtitle: 'Inicia un chat. Estamos aquí para ayudarte.',
            footer: '',
            getStarted: 'Iniciar chat',
            inputPlaceholder: 'Escribe tu mensaje...',
            closeButtonTooltip: 'Cerrar',
          },
        },
      });
    });
  }, []);

  return (
    <style>{`
      #n8n-chat {
        --chat--header--background: #2A2421;
        --chat--header--color: #ffffff;
        --chat--color--primary: #2A2421;
        --chat--color--primary--shade-: #3D3330;
        --chat--toggle--background: #2A2421;
        --chat--toggle--hover--background: #3D3330;
        --chat--toggle--active--background: #3D3330;
      }
    `}</style>
  );
}
