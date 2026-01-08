
# Blueprint

## Overview

This project is a Next.js application for a piercing studio called "Piercing Shine". It is designed to be a modern, visually appealing, and informative website for potential clients.

## Project Structure

- **/src**: Main source code directory
  - **/app**: Next.js App Router
    - **/(main)**: Main route group
      - **/about**: About Us page
      - **/contact**: Contact page
      - **/gallery**: Gallery page
      - **/services**: Services page
      - **layout.tsx**: Main layout
      - **page.tsx**: Home page
    - **globals.css**: Global styles
    - **layout.tsx**: Root layout
  - **/components**: Reusable components
    - **BookingWidget.tsx**: Booking widget component
    - **Footer.tsx**: Footer component
    - **Header.tsx**: Header component
    - **Hero.tsx**: Hero section component
    - **InteractiveEar.tsx**: Interactive ear map component
  - **/lib**: Utility functions and data
    - **data.ts**: Static data

## Style and Design

- **Theme**: Dark theme with gold accents
- **Font**: Montserrat and Inter
- **Layout**: Modern, responsive layout with a focus on visual appeal
- **Visuals**: High-quality images, interactive elements, and smooth animations

## Features

- **Home Page**: Includes a hero section, an interactive ear map for piercings, and a booking widget.
- **Services Page**: Will detail the piercing services offered.
- **Shop Page**: Will feature piercing jewelry for sale.
- **Academy Page**: Will provide information about piercing training courses.
- **Contact Page**: Will have contact information and a contact form.
- **Gallery Page**: Will showcase a gallery of piercing work.
- **About Page**: Will tell the story of the studio and its artists.

## Current Plan

- **Phase 1: Initial Setup (Complete)**
  - Set up Next.js project with TypeScript and Tailwind CSS.
  - Create initial project structure with `src` directory.
  - Implement basic layout with Header and Footer.
  - Design and implement the Home page with Hero, InteractiveEar, and BookingWidget components.

- **Phase 2: Content Pages**
  - Create and populate the Services, Shop, Academy, Gallery, and Contact pages.

- **Phase 3: Advanced Features**
  - Implement a full-featured booking system.
  - Add e-commerce functionality to the Shop page.
  - Integrate a CMS for managing content.

