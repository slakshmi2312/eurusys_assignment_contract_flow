# Contract Flow – Frontend Contract Management Platform

## Overview
Contract Flow is a frontend-only Contract Management Platform developed as part of the Eurusys Frontend Assignment.  
The application demonstrates product thinking, UI design, and state handling without using any backend.

All data is stored locally using browser `localStorage`.

---

##  Core Design Decisions

### 1. Frontend-only Application
- No backend was used
- All data is stored in `localStorage`
- Simplifies setup and aligns with assignment scope

### 2. Centralized Storage Service
A centralized `StorageService` manages:
- Blueprints
- Contracts
- Contract status updates  

This ensures consistency across:
- Dashboard
- Contracts page
- Contract view page

### 3. Contract Lifecycle Management
Contracts move through fixed lifecycle stages:
created → approved → sent → signed → locked

Lifecycle updates are reflected across:
- Dashboard statistics
- Contracts list
- Contract detail view

---

##  Features Implemented

### Blueprints
- Create blueprint with name, description, and fields
- View blueprint cards
- Reuse blueprints while creating contracts

###  Contracts
- Create contract from a blueprint
- View all contracts in table/card format
- Filter contracts by status:
  - All
  - Active
  - Pending
  - Signed
- View contract details
- Update contract lifecycle (Approve / Revoke)

###  Dashboard
- Total contracts count
- Active contracts count
- Pending signature count
- Signed & locked count
- Recent contract activity section

---

##  Assumptions
- Single-user system (no authentication)
- Data persists per browser using `localStorage`
- Status transitions follow a fixed lifecycle
- UI actions directly update stored data

---

##  Limitations
- No backend or API integration
- No role-based access control
- No real digital signature (simulated)
- Data clears if browser storage is manually cleared
- No unit tests included

---

##  Possible Enhancements
- Backend integration (REST API)
- Authentication & authorization
- Real digital signature support
- Search and pagination
- State management using NgRx

---

## Tech Stack
- Angular
- TypeScript
- HTML
- CSS

---

##  How to Run the Project
```bash
npm install
ng serve

