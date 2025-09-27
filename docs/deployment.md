# Deployment Guide

This guide provides instructions for deploying the MmabiaaCares application to various environments, including production, staging, and development.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Environment Variables](#environment-variables)
- [Deployment Options](#deployment-options)
  - [Vercel (Recommended)](#vercel-recommended)
  - [Netlify](#netlify)
  - [Self-Hosted](#self-hosted)
- [CI/CD Pipeline](#cicd-pipeline)
- [Environment Configuration](#environment-configuration)
- [Scaling](#scaling)
- [Monitoring and Logging](#monitoring-and-logging)
- [Backup and Recovery](#backup-and-recovery)
- [Troubleshooting](#troubleshooting)

## Prerequisites

Before deploying, ensure you have:

- Node.js (v18 or later) installed
- Git installed
- An account with your chosen hosting provider
- Domain name (for production)
- SSL certificate (recommended for production)

## Environment Variables

Create a `.env.production` file in the root directory with the following variables:

```env
NEXT_PUBLIC_API_URL=https://api.mmabiaacares.org
NEXT_PUBLIC_GA_TRACKING_ID=UA-XXXXXXXXX-X
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_recaptcha_site_key
# Add other production environment variables here
```

## Deployment Options

### Vercel (Recommended)

1. **Deploy with Vercel Button**
   [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FMmabiaa%2FMmabiaaCares)

2. **Manual Deployment**
   ```bash
   # Install Vercel CLI
   npm install -g vercel
   
   # Login to Vercel
   vercel login
   
   # Deploy
   vercel --prod
   ```

3. **Configure Custom Domain**
   - Go to your project in the Vercel dashboard
   - Navigate to Settings > Domains
   - Add your custom domain and follow the instructions to verify ownership

### Netlify

1. **Deploy with Netlify Button**
   [![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/Mmabiaa/MmabiaaCares)

2. **Manual Deployment**
   ```bash
   # Install Netlify CLI
   npm install -g netlify-cli
   
   # Login to Netlify
   netlify login
   
   # Build the project
   npm run build
   
   # Deploy
   netlify deploy --prod
   ```

### Self-Hosted

1. **Build the Application**
   ```bash
   # Install dependencies
   npm install --production
   
   # Build the application
   npm run build
   
   # Start the production server
   npm start
   ```

2. **Using PM2 (Recommended for Production)**
   ```bash
   # Install PM2 globally
   npm install -g pm2
   
   # Start the application with PM2
   pm2 start npm --name "mmabiaa-cares" -- start
   
   # Save the PM2 process list
   pm2 save
   
   # Set up PM2 to start on system boot
   pm2 startup
   ```

3. **Configure Nginx as Reverse Proxy**
   ```nginx
   server {
       listen 80;
       server_name yourdomain.com www.yourdomain.com;
       
       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

## CI/CD Pipeline

### GitHub Actions

Example workflow (`.github/workflows/deploy.yml`):

```yaml
name: Deploy

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v3
      
      - name: Use Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18.x'
          cache: 'npm'
      
      - name: Install Dependencies
        run: npm ci
      
      - name: Run Linting
        run: npm run lint
      
      - name: Run Tests
        run: npm test
      
      - name: Build
        run: npm run build
        env:
          NEXT_PUBLIC_API_URL: ${{ secrets.NEXT_PUBLIC_API_URL }}
          # Add other environment variables here
      
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
          working-directory: ./
          vercel-args: '--prod'
```

## Environment Configuration

### Staging

1. Create a new branch for staging (e.g., `staging`)
2. Set up a separate environment in your hosting provider
3. Configure environment variables with staging values
4. Set up a subdomain (e.g., `staging.mmabiaacares.org`)

### Production

1. Use the `main` branch for production
2. Set up monitoring and error tracking
3. Configure backups and disaster recovery
4. Set up CDN and caching

## Scaling

### Horizontal Scaling
- Use a load balancer to distribute traffic
- Deploy multiple instances of the application
- Use a managed database service

### Caching
- Implement Redis for session storage and caching
- Use CDN for static assets
- Enable HTTP/2 and GZIP compression

## Monitoring and Logging

### Recommended Tools
- **Application Monitoring**: Sentry, LogRocket
- **Performance Monitoring**: Vercel Analytics, Google Analytics
- **Server Monitoring**: Datadog, New Relic
- **Log Management**: Loggly, Papertrail

### Setting Up Sentry

1. Create a Sentry account and project
2. Install the Sentry SDK:
   ```bash
   npm install --save @sentry/nextjs
   ```
3. Configure Sentry in your `sentry.client.config.js` and `sentry.server.config.js`
4. Add your DSN to environment variables:
   ```env
   NEXT_PUBLIC_SENTRY_DSN=your-sentry-dsn
   ```

## Backup and Recovery

### Database Backups
- Set up automated daily backups
- Store backups in a secure, off-site location
- Test restoration process regularly

### Application Backups
- Version control all code changes
- Backup configuration files and environment variables
- Document all manual setup steps

## Troubleshooting

### Common Issues

1. **Application Won't Start**
   - Check error logs
   - Verify environment variables are set correctly
   - Ensure port 3000 is available

2. **Build Failures**
   - Check Node.js version compatibility
   - Verify all dependencies are installed
   - Look for TypeScript errors

3. **Performance Issues**
   - Check server resources (CPU, memory, disk I/O)
   - Optimize database queries
   - Implement caching where appropriate

### Getting Help

If you encounter issues during deployment:
1. Check the [Troubleshooting Guide](./troubleshooting.md)
2. Search the [GitHub Issues](https://github.com/Mmabiaa/MmabiaaCares/issues)
3. Open a new issue if your problem isn't documented

## Security Considerations

- Keep all dependencies up to date
- Use HTTPS for all requests
- Implement proper CORS policies
- Regularly audit for security vulnerabilities
- Use environment variables for sensitive information
- Implement rate limiting and DDoS protection
