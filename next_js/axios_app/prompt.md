I want you to create a next JS app in the directory ./next_js/fetch_app. This is a lab for a next js recon tool, so I will point out where the vulnerable components should be.

Additionally, create a Dockerfile in the same directory for this to ensure easy deployment.

The app should be like the following:

- It should have a backend API running on path /api/
- The frontend should be running on /

## Pages:
- Homepage at "/" titled "Vulnerable CI Services" stating that they provide some CI-related help/services
- About Page at "/about" stating that they've caused breaches worth 1/5th of the world's economy, which is around $21 trillion or $21,000,000,000,000.
    - Mention that they're looking forward to helping you with your CI needs and get your company breached.
- Contact page at "/contact"
    - It should say "Feeling too rich? Contact us — we specialize in high-impact breaches guaranteed to shrink your net worth faster than a crypto rugpull."
    - It should have a simple contact form with name, email, and message.
- Fetch contacts page at "/adminugerHUGK897UYeilhefes/fetch_contacts" (this will display the forms submitted on contact page; not navigable in the UI. The page should be password protected with the password as "Password1")
    - The page would just use fetch() to get the contacts from the API and display them in a table.
    - To delete the contact, the user should be able to click on a delete button next to the contact.

Wherever the password is required for the API, it should be hardcoded in the client-side app.

## API:
- POST `/api/contact`
    - This page would have a simple contact form with 
- GET `/api/adminugerHUGK897UYeilhefes/contacts`
    - By default, there would be one contact with name "John Doe" and email "john.doe@example.com" and the request containing the following:
    ```
    Hey CI team,
    I messed up. Can you please help me?

    Here's the AWS access key: `AKIAIOSFODNN7EXAMPLE`
               AWS secret access key: `wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY`
    ```
- DELETE `/api/adminugerHUGK897UYeilhefes/contacts/:id`
    - This would delete any requests with the ID provided in the URL

The `/api/adminugerHUGK897UYeilhefes/*` should be protected by basic authorization header with username:password as `adminugerHUGK897UYeilhefesuser12345:adminugerHUGK897UYeilhefespass54321`, both of which should be hardcoded in the client-side app.

IMPORTANT: The client-side app should use fetch() to make requests to the API.
