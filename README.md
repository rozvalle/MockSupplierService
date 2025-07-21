# MockSupplier

MockSupplier is a simple Express.js API server that provides mock supply data for testing or development purposes.

## Features

- Returns a list of supplies from a static JSON file
- CORS enabled for cross-origin requests
- Easy to run locally

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or newer recommended)
- [npm](https://www.npmjs.com/)

### Installation

1. Clone this repository or download the source files.
2. Install dependencies:

   ```sh
   npm install
   ```

### Running the Server

Start the server with:

```sh
npm start
```

Or for development with auto-reload:

```sh
npm run dev
```

The API will be available at `http://localhost:3003/supplies`.

## API

### GET /supplies

Returns an array of supply objects.

**Example Response:**
```json
[
  {
    "id": 1,
    "name": "Hikvision DS-2CD2043G0-I",
    "price": 6500,
    "stock": 14
  },
  ...
]
```

## Files

- [`index.js`](index.js): Express server implementation
- [`data.json`](data.json): Mock supply data
- [`package.json`](package.json): Project metadata and scripts