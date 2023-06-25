
# 📺 Fullstack Netflix Clone

This is a Netflix clone project developed using TypeScript, Next.js, Node.js, and Tailwind CSS. The main objective of this project is to create a full-stack application using Node.js for building the APIs and implementing server-side rendering (SSR) for optimized loading.






## ✅ Features

- Page loading using Server Side Rendering (SSR)
- Integration of a database using MongoDB and Prisma as an ORM.
- Multiple ways to sign up and log in through email registration, Google, Facebook, and GitHub.
- Video playback using the native HTML `<video>` tag.


## 🔥 Dependencies
    
- **prisma**
    - Prisma simplifies database access and management with its modern ORM features, providing a type-safe and intuitive API for seamless integration with various databases, making development faster and more efficient.
- **bcrypt**
    - ensures secure password hashing, protecting user credentials from potential breaches and enhancing overall application security.
- **eslint**
    - helps enforce coding standards, detects potential bugs, and helps maintain consistent code quality throughout the project, which
- **lodash**
    - provides a wide range of helpful functions to simplify and enhance your coding experience. With its extensive collection of methods, lodash helps you write cleaner and more efficient code, saving time and effort in your development process.
- **next-auth**
    - provides a simple and flexible solution for implementing authentication. With NextAuth.js, you can easily handle various authentication providers, including social logins, OAuth, and JWT, while offering customizable UI components and serverless authentication flows.
- **postcss**
    - PostCSS is a versatile and powerful tool for transforming CSS with JavaScript plugins. It allows you to enhance your CSS workflow by enabling modern CSS features, automating repetitive tasks, and optimizing stylesheets for improved performance and compatibility.
- **autoprefixer**
    - is essential for web developers as it automatically adds vendor prefixes to CSS properties, ensuring cross-browser compatibility and saving valuable development time.
- **react-icons**
    - React-icons is an icon library that provides a wide range of ready-to-use icons for your React applications. With its easy integration and customization, React-icons allows you to quickly and easily add attractive and consistent icons, enhancing the visual experience of your users.
- **axios**
    - simplifies making HTTP requests from the browser or Node.js. It provides an easy-to-use interface, supports various request methods, and offers features like request cancellation, interceptors, and automatic JSON parsing, making it an efficient and reliable choice for handling API communication.
- **swr**
    - is a powerful data fetching library for JavaScript that offers a simple and efficient way to handle remote data in your applications. With its automatic caching, revalidation, and error handling capabilities, SWR helps optimize data fetching, improve user experience, and reduce unnecessary network requests.
- **tailwindcss**
    - is a utility-first CSS framework that offers rapid development and customization. It provides a comprehensive set of pre-built classes, allowing developers to quickly style their components without writing custom CSS, resulting in faster development cycles and easy maintenance.
- **zustand**
    - is a lightweight state management library for React that offers simplicity and performance. With its intuitive API and minimal setup, Zustand enables efficient and predictable state management, very easy to implement (much simpler than Redux and Context API) as its syntax is straightforward and does not require providers..

## 📋 Prerequisities

Node 16.8 or later.
## 💻 Installation

1. Clone the repository:
    ```
    https://github.com/Josenegrin/netflix-clone.git
    ```

2. Install packages:
    ```
    npm i
    ```

3. Setup .env file:
    ```
    DATABASE_URL=
    NEXTAUTH_URL=
    NEXTAUTH_JWT_SECRET=
    NEXTAUTH_SECRET=
    GITHUB_ID=
    GITHUB_SECRET=
    GOOGLE_CLIENT_ID=
    GOOGLE_CLIENT_SECRET=
    FACEBOOK_CLIENT_ID=
    FACEBOOK_CLIENT_SECRET=
    ```
    
## 🔬 Running Tests

To run tests, run the following command

```
  npm run test
```

