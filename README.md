# Base SaaS Template

This project was stripped down to provide a minimal starting point for new SaaS
applications. It now contains authentication, user management, company
registration and basic plan management features. Companies reference a plan by
`planId` so you can define subscription limits. The backend also exposes
invoice endpoints so each company can track billing records and update invoice
statuses when payments are received.
