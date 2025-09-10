# VeggieConnect GitHub Pages

Welcome to VeggieConnect's GitHub Pages site! This repository hosts the payment redirect pages and landing page for the VeggieConnect mobile application.

## 🌐 Live Site

Visit the live site at: [https://amanciolicious.github.io/veggieconnect.github.io/](https://amanciolicious.github.io/veggieconnect.github.io/)

## 📱 About VeggieConnect

VeggieConnect is a fresh produce marketplace that connects customers directly with local farmers and suppliers. Users can order fresh vegetables and fruits online and either pick them up from nearby farms or have them delivered to their doorstep.

## 🚀 Features

- **Fresh Produce**: Direct from local farms
- **Local Pickup**: Convenient locations
- **Easy Payment**: Multiple payment options (GCash, GrabPay, PayMaya, Credit/Debit Cards)
- **Fast Delivery**: Quick and reliable service

## 📄 Pages

This GitHub Pages site includes:

1. **`index.html`** - Main landing page with app information and download links
2. **`payment-success.html`** - Payment success redirect page
3. **`payment-cancel.html`** - Payment cancellation redirect page
4. **`config.js`** - Configuration file for API endpoints and app settings

## 🔧 Configuration

The site uses a configuration file (`config.js`) that contains:

- Cloud function URLs for order completion
- App store links
- Custom URL schemes for deep linking
- App information

## 🛠️ Setup

1. **Fork this repository** to your GitHub account
2. **Enable GitHub Pages** in your repository settings:
   - Go to Settings → Pages
   - Select "Deploy from a branch"
   - Choose "main" branch and "/ (root)" folder
3. **Update configuration** in `config.js` with your own API endpoints
4. **Customize** the HTML files to match your app's branding

## 🔄 Automatic Deployment

This repository includes a GitHub Actions workflow that automatically deploys changes to GitHub Pages when you push to the main branch.

## 📱 Mobile App Integration

The pages are designed to work seamlessly with the VeggieConnect mobile app:

- **Deep Linking**: Uses custom URL schemes to open the app
- **Payment Processing**: Integrates with PayMongo for payment handling
- **Order Management**: Connects to Firebase for order completion

## 🎨 Design

The site features a modern, responsive design with:

- Clean, minimalist interface
- VeggieConnect brand colors (#6CA04A)
- Quicksand font family
- Mobile-first responsive design
- Smooth animations and transitions

## 🔒 Security

- No sensitive data is stored in the HTML pages
- Order completion requires valid order IDs
- Cloud functions handle actual order processing
- CORS headers properly configured

## 🐛 Troubleshooting

### Common Issues

1. **Site not loading**: Check GitHub Pages status and repository settings
2. **Payment redirects not working**: Verify PayMongo webhook configuration
3. **Orders not completing**: Check cloud function logs and API endpoints

### Debug Steps

1. Check browser console for JavaScript errors
2. Verify cloud function URLs in `config.js`
3. Test with different browsers and devices
4. Monitor GitHub Actions deployment logs

## 📞 Support

For issues or questions:

1. Check the [GitHub Issues](https://github.com/amanciolicious/veggieconnect.github.io/issues) page
2. Review the [GitHub Pages documentation](https://docs.github.com/en/pages)
3. Contact the VeggieConnect development team

## 📄 License

This project is part of the VeggieConnect application ecosystem. All rights reserved.

---

**VeggieConnect** - Fresh Produce Marketplace 🥬