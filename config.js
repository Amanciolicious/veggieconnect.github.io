// Configuration for VeggieConnect GitHub Pages
// Update these values when deploying to your own repository

const CONFIG = {
    // Vercel API URLs (Free alternative to Firebase Functions)
    CLOUD_FUNCTIONS: {
        completeOrder: 'https://paymongo-7ek9z2get-amanciolicious-projects.vercel.app/api/completeOrder',
        paymongoWebhook: 'https://paymongo-7ek9z2get-amanciolicious-projects.vercel.app/api/paymongoWebhook'
    },
    
    // App URLs
    APP: {
        playStore: 'https://play.google.com/store/apps/details?id=com.veggieconnect.app',
        appStore: 'https://apps.apple.com/app/veggieconnect/id123456789',
        customScheme: 'veggieconnect://'
    },
    
    // App Information
    APP_INFO: {
        name: 'VeggieConnect',
        version: '1.0.0',
        description: 'Fresh Produce Marketplace'
    }
};

// Make config available globally
window.VeggieConnectConfig = CONFIG;
