/**
 * Utility to clean up console warnings from browser extensions
 * Only runs in development mode
 */

export const cleanConsoleWarnings = () => {
  if (process.env.NODE_ENV === 'development') {
    // Store original console methods
    const originalWarn = console.warn;
    const originalError = console.error;

    // Filter out extension-related warnings
    const filterExtensionWarnings = (args: any[]) => {
      const message = args[0]?.toString() || '';
      
      // Ignore these extension-related messages
      const ignoredPatterns = [
        'Download the React DevTools',
        'Deprecation warning: tabReply will be removed',
        'Provider initialised',
        'TronLink initiated',
        'Explain Console errors by using Copilot',
      ];

      return !ignoredPatterns.some(pattern => message.includes(pattern));
    };

    // Override console.warn
    console.warn = (...args: any[]) => {
      if (filterExtensionWarnings(args)) {
        originalWarn.apply(console, args);
      }
    };

    // Override console.error (if needed)
    console.error = (...args: any[]) => {
      if (filterExtensionWarnings(args)) {
        originalError.apply(console, args);
      }
    };

    // Clean up on unmount
    return () => {
      console.warn = originalWarn;
      console.error = originalError;
    };
  }
};

